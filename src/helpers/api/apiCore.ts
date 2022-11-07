import jwtDecode from 'jwt-decode';
import axios from 'axios';
import config from '../../config';

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = config.API_URL;
axios.defaults.withCredentials = true;

// intercepting to capture errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;

    if (error && error.response && error.response.status === 404) {
      // window.location.href = '/not-found';
    } else if (error && error.response && error.response.status === 403) {
      window.location.href = '/access-denied';
    } else {
      switch (error.response.status) {
        case 401:
          message = 'Invalid credentials';
          break;
        case 403:
          message = 'Access Forbidden';
          break;
        case 404:
          message = 'Sorry! the data you are looking for could not be found';
          break;
        default: {
          message = error.response && error.response.data ? error.response.data['message'] : error.message || error;
        }
      }
      return Promise.reject(message);
    }
  }
);

const AUTH_SESSION_KEY = 'asyncrum_user';

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: string | null) => {
  if (token) axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  else delete axios.defaults.headers.common['Authorization'];
};

const getUserFromSession = () => {
  const user = sessionStorage.getItem(AUTH_SESSION_KEY);
  return user ? (typeof user == 'string' ? JSON.parse(user) : user) : null;
};

const getTeamListFromSession = () => {
  const teamList = sessionStorage.getItem('TEAM_LIST');
  return teamList ? (typeof teamList == 'string' ? JSON.parse(teamList) : teamList) : null;
}

const getCurrentTeamFromSession = () => {
  const currentTeam = sessionStorage.getItem('CURRENT_TEAM');
  return currentTeam ? (typeof currentTeam == 'string' ? JSON.parse(currentTeam) : currentTeam) : null;
}

class APICore {
  /**
   * Fetches data from given url
   */
  get = (url: string, params: any) => {
    let response;
    const user = getUserFromSession();

    if (params) {
      const queryString = params
        ? Object.keys(params)
          .map((key) => {
            if (!user || key != 'token') {
              return key + '=' + params[key];
            }
          })
          .join('&')
        : '';
      response = axios.get(`${url}?${queryString}`, {
        headers: { Authorization: 'Bearer ' + `${params['token'] ? params['token'] : user.token}` },
      });
    } else {
      response = axios.get(`${url}`, {
        headers: { Authorization: 'Bearer ' + user.token },
      });
    }
    return response;
  };

  getFile = (url: string, params: any) => {
    let response;
    if (params) {
      const queryString = params
        ? Object.keys(params)
          .map((key) => key + '=' + params[key])
          .join('&')
        : '';
      response = axios.get(`${url}?${queryString}`, { responseType: 'blob' });
    } else {
      response = axios.get(`${url}`, { responseType: 'blob' });
    }
    return response;
  };

  getMultiple = (urls: string, params: any) => {
    const reqs = [];
    let queryString = '';
    if (params) {
      queryString = params
        ? Object.keys(params)
          .map((key) => key + '=' + params[key])
          .join('&')
        : '';
    }

    for (const url of urls) {
      reqs.push(axios.get(`${url}?${queryString}`));
    }
    return axios.all(reqs);
  };

  /**
   * refresh access token
   */
  refreshToken = (url: string) => {
    if (user?.token) {
      return axios.get(url, { headers: { Authorization: 'Bearer ' + user.token } });
    }
    return axios.get(url);
  };

  /**
   * post given data to url
   */
  create = (url: string, data: any) => {
    if (user?.token) {
      return axios.post(url, data, { headers: { Authorization: 'Bearer ' + user.token } });
    }
    return axios.post(url, data);
  };

  /**
   * Updates patch data
   */
  updatePatch = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return axios.put(url, data);
  };

  /**
   * Deletes data
   */
  delete = (url: string) => {
    return axios.delete(url);
  };

  /**
   * post given data to url with file
   */
  createWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        'content-type': 'multipart/form-data',
      },
    };
    return axios.post(url, formData, config);
  };

  /**
   * post given data to url with file
   */
  updateWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        'content-type': 'multipart/form-data',
      },
    };
    return axios.patch(url, formData, config);
  };

  isUserAuthenticated = () => {
    const user = this.getLoggedInUser();

    if (!user || (user && !user.token)) {
      return false;
    }
    const decoded: any = jwtDecode(user.token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');

      this.refreshToken('/api/v1/auth/refresh')
        .then((res) => {
          const accessToken = res.data['token'];
          this.renewAccessTokenInSession(accessToken);
          return true;
        })
        .catch((err) => {
          return false;
        });
    } else {
      return true;
    }
  };

  setLoggedInUser = (session: any) => {
    if (session) sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
    else {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    }
  };
  /**
   * Returns the logged in user
   */
  getLoggedInUser = () => {
    return getUserFromSession();
  };

  renewAccessTokenInSession = (token: string) => {
    const userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (userInfo) {
      const user = JSON.parse(userInfo);
      user.token = token;
      this.setLoggedInUser(user);
    }
  }

  setUserInSession = (modifiedUser: any) => {
    const userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (userInfo) {
      const { token, user } = JSON.parse(userInfo);
      this.setLoggedInUser({ token, ...user, ...modifiedUser });
    }
  };

  setTeamList = (teamList: any) => {
    if (teamList) sessionStorage.setItem('TEAM_LIST', JSON.stringify(teamList));
    else {
      sessionStorage.removeItem('TEAM_LIST')
    }
  }

  getTeamList = () => {
    return getTeamListFromSession();
  }

  setCurrentTeam = (currentTeam: any) => {
    if (currentTeam) sessionStorage.setItem('CURRENT_TEAM', JSON.stringify(currentTeam));
    else {
      sessionStorage.removeItem('CURRENT_TEAM')
    }
  }

  getCurrentTeam = () => {
    return getCurrentTeamFromSession();
  }
}

/*
Check if token available in session
*/
const user = getUserFromSession();
if (user) {
  const { token } = user;
  if (token) {
    setAuthorization(token);
  }
}

export { APICore, setAuthorization };
