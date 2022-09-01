import { APICore } from './apiCore';
import axios from 'axios';

const api = new APICore();
const baseURL = '/api/v1/members';
const user = api.getLoggedInUser();

const createProfileImage = () => {
    return api.create(`/api/v1/member/images/${user.id}`, null);
};

const updateProfileInfo = (params: { fullname: string; nickname: string }) => {
    return api.updatePatch(baseURL+`/${user.id}`, params);
}

const uploadProfileImage = (presignedURL: string, profileImageFile: File) => {
    const uploadAxios = axios.create({
        transformRequest: [
            (data: any, headers: any) => {
            delete headers.common.Authorization;
            headers['Content-Type'] = 'image/png';
            return profileImageFile;
            },
        ],
    });
    return uploadAxios.put(presignedURL, profileImageFile);
}

export { createProfileImage, updateProfileInfo, uploadProfileImage };
  