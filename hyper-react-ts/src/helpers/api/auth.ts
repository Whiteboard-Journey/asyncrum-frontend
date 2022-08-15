import { APICore } from './apiCore';

const api = new APICore();

function login(params: { email: string; password: string }) {
    const baseUrl = '/api/v1/auth/login';
    return api.create(`${baseUrl}`, params);
}

function logout() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function readMember(params: { token: string; }) {
    const baseUrl = '/api/v1/members/0';
    return api.get(`${baseUrl}`, params);
}

function signup(params: { fullname: string; email: string; password: string }) {
    const baseUrl = '/api/v1/members';
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

export { login, logout, readMember, signup, forgotPassword, forgotPasswordConfirm };
