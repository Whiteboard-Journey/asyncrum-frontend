import { WhiteboardActionTypes } from './constants';
import Whiteboard from './reducers';

export type WhiteboardActionType = {
    type:
        | WhiteboardActionTypes.API_RESPONSE_SUCCESS
        | WhiteboardActionTypes.API_RESPONSE_ERROR
        | WhiteboardActionTypes.READ_ALL_WHITEBOARD;
        // | WhiteboardActionTypes.CREATE_WHITEBOARD;
    payload: {} | string;
};

type Whiteboard = {
    id: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
};

// common success
export const whiteboardApiResponseSuccess = (actionType: string, data: Whiteboard | {}): WhiteboardActionType => ({
    type: WhiteboardActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const whiteboardApiResponseError = (actionType: string, error: string): WhiteboardActionType => ({
    type: WhiteboardActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const readAllWhiteboard = (token: string): WhiteboardActionType => ({
    type: WhiteboardActionTypes.READ_ALL_WHITEBOARD,
    payload: { token },
});

// export const createWhiteboard = (title: string, description: string, scope: string): WhiteboardActionType => ({
//     type: WhiteboardActionTypes.CREATE_WHITEBOARD,
//     payload: { title, description, scope },
// });