import { Navigate } from 'react-router-dom';
import { APICore } from 'helpers/api/apiCore';

const Root = () => {
  const api = new APICore();

  const getRootUrl = () => {
    const url = 'dashboard';
    return url;
  };

  const getLandingUrl = () => {
    const url = 'landing';
    return url;
  };

  const url = getRootUrl();
  const landingUrl = getLandingUrl();

  return api.isUserAuthenticated() === false ? <Navigate to={`/${landingUrl}`} /> : <Navigate to={`/${url}`} />;
};

export default Root;
