import { WhiteboardActionTypes } from './constants';

const INIT_STATE = {
    loading: true,
    hasBeenSet: false,
};

type WhiteboardData = {
    id: number;
    title: string;
    description: string;
    createdDate: string;
    lastModifiedDate: string;
    scope: string;
    author: string;
};

type WhiteboardActionType = {
    type:
        | WhiteboardActionTypes.API_RESPONSE_SUCCESS
        | WhiteboardActionTypes.API_RESPONSE_ERROR
        | WhiteboardActionTypes.READ_ALL_WHITEBOARD;
    payload: {
        actionType?: string;
        data?: WhiteboardData | [WhiteboardData];
        error?: string;
    };
};

type State = {
    loading?: boolean;
    value?: boolean;
    hasBeenSet?: boolean
};

const Whiteboard = (state: State = INIT_STATE, action: WhiteboardActionType) => {
    switch (action.type) {
        case WhiteboardActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case WhiteboardActionTypes.READ_ALL_WHITEBOARD: {
                    return {
                        ...state,
                        whiteboards: action.payload.data,
                        loading: false,
                        hasBeenSet: true,
                    };
                }
                default:
                    return { ...state };
            }

        case WhiteboardActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case WhiteboardActionTypes.READ_ALL_WHITEBOARD: {
                    return {
                        ...state,
                        error: action.payload.error,
                        loading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case WhiteboardActionTypes.READ_ALL_WHITEBOARD:
            return { ...state, loading: true };
        default:
            return { ...state };
    }
};

export default Whiteboard;
