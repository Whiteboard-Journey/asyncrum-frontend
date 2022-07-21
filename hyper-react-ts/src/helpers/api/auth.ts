import { APICore } from './apiCore';

const api = new APICore();

function login(params: { email: string; password: string }) {
    const baseUrl = '/api/v1/auth/login';
    return api.create(`${baseUrl}`, params);
}

function oauth(params: { provider: string; }) {
    const baseUrl = `/oauth2/authorization/${params.provider}?redirect_uri=http://localhost:3000/dashboard/ecommerce`;
    return api.oauth(`${baseUrl}`);
}

function logout() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // const baseUrl = '/logout/';
    // return api.create(`${baseUrl}`, {});
}

function signup(params: { fullname: string; email: string; password: string }) {
    const baseUrl = '/register/';
    return api.create(`${baseUrl}`, params);
}

function forgotPassword(params: { username: string }) {
    const baseUrl = '/forget-password/';
    return api.create(`${baseUrl}`, params);
}

function forgotPasswordConfirm(params: { email: string }) {
    const baseUrl = '/password/reset/confirm/';
    return api.create(`${baseUrl}`, params);
}

export { login, oauth, logout, signup, forgotPassword, forgotPasswordConfirm };
