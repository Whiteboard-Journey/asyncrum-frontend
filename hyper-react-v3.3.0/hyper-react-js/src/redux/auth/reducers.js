// @flow
import { AuthActionTypes } from './constants';

import { APICore } from '../../helpers/api/apiCore';

const api = new APICore();

const INIT_STATE = {
    user: api.getLoggedInUser(),
    loading: false,
};

type AuthAction = {
    type: string,
    payload: { actionType?: string, data?: any, error?: string },
};
type State = { user?: {} | null, loading?: boolean, +value?: boolean };

const Auth = (state: State = INIT_STATE, action: AuthAction): any => {
    console.log(action);
    switch (action.type) {
        case AuthActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        user: action.payload.data,
                        userLoggedIn: true,
                        loading: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        loading: false,
                        userSignUp: true,
                    };
                }
                case AuthActionTypes.LOGOUT_USER: {
                    return {
                        ...state,
                        user: null,
                        loading: false,
                        userLogout: true,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        resetPasswordSuccess: action.payload.data,
                        loading: false,
                        passwordReset: true,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD_CHANGE: {
                    return {
                        ...state,
                        loading: false,
                        passwordChange: true,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        error: action.payload.error,
                        userLoggedIn: false,
                        loading: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        registerError: action.payload.error,
                        userSignUp: false,
                        loading: false,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        passwordReset: false,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD_CHANGE: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                        passwordChange: false,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.LOGIN_USER:
            return { ...state, loading: true, userLoggedIn: false };
        case AuthActionTypes.LOGOUT_USER:
            return { ...state, loading: true, userLogout: false };
        case AuthActionTypes.SIGNUP_USER:
            return { ...state, loading: true, userSignUp: false };
        case AuthActionTypes.FORGOT_PASSWORD:
            return { ...state, loading: true, passwordReset: false };
        case AuthActionTypes.FORGOT_PASSWORD_CHANGE:
            return { ...state, loading: true, passwordChange: false };
        case AuthActionTypes.RESET:
            return {
                ...state,
                loading: false,
                error: false,
                userSignUp: false,
                userLoggedIn: false,
                passwordReset: false,
                passwordChange: false,
                resetPasswordSuccess: null,
            };
        default:
            return { ...state };
    }
};

export default Auth;
