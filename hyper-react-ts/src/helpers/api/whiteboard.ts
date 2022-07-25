import { APICore } from "./apiCore";

const api = new APICore();

function readAllWhiteboard(params: { token: string }) {
    const baseUrl = '/api/v1/whiteboards?pageIndex=0&topId=0';
    return api.get(`${baseUrl}`, params);
}

export { readAllWhiteboard };