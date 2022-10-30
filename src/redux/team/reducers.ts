import { APICore } from 'helpers/api/apiCore';
import { TeamActionTypes } from './constants';
import type { Member } from 'pages/settings/types';

const api = new APICore();

const INIT_STATE = {
  teamList: api.getTeamList(),
  currentTeam: api.getCurrentTeam(),
  loading: true
};

type TeamData = {
  id: number;
  name: string;
  code: string;
  pictureUrl: string;
};

type CurrentTeamData = {
  id: number;
  name: string;
  code: string;
  pictureUrl: string;
  members: Member[];
  openMeetings: string[];
}

type TeamActionType = {
  type:
    | TeamActionTypes.API_RESPONSE_SUCCESS
    | TeamActionTypes.API_RESPONSE_ERROR
    | TeamActionTypes.CREATE_TEAM
    | TeamActionTypes.READ_ALL_TEAM
    | TeamActionTypes.READ_TEAM
    | TeamActionTypes.UPDATE_TEAM
    | TeamActionTypes.LEAVE_TEAM
    | TeamActionTypes.CHANGE_TEAM
    | TeamActionTypes.CREATE_MEETING
    | TeamActionTypes.DELETE_MEETING
    | TeamActionTypes.RESET;
  payload: {
    actionType?: string;
    teamListData?: TeamData[] | unknown;
    currentTeamData?: CurrentTeamData | unknown;
    error?: string;
  };
};

type State = {
  teamList?: TeamData[] | unknown;
  currentTeam?: CurrentTeamData;
  loading?: boolean;
};

const Team = (state: State = INIT_STATE, action: TeamActionType) => {
  switch (action.type) {
    case TeamActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case TeamActionTypes.CREATE_TEAM: {
          return {
            ...state,
            teamList: action.payload.teamListData,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        case TeamActionTypes.READ_ALL_TEAM: {
          return {
            ...state,
            teamList: action.payload.teamListData,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        case TeamActionTypes.READ_TEAM: {
          return {
            ...state,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        case TeamActionTypes.UPDATE_TEAM: {
          return {
            ...state,
            teamList: action.payload.teamListData,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        case TeamActionTypes.LEAVE_TEAM: {
          return {
            ...state,
            teamList: action.payload.teamListData,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        case TeamActionTypes.CREATE_MEETING: {
          return {
            ...state,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        case TeamActionTypes.DELETE_MEETING: {
          return {
            ...state,
            currentTeam: action.payload.currentTeamData,
            loading: false,
          };
        }
        default:
          return { ...state };
      }

    case TeamActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case TeamActionTypes.CREATE_TEAM: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        case TeamActionTypes.UPDATE_TEAM: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        case TeamActionTypes.LEAVE_TEAM: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        default:
          return { ...state };
      }

    case TeamActionTypes.CREATE_TEAM:
      return { ...state, loading: true };
    case TeamActionTypes.UPDATE_TEAM:
      return { ...state, loading: true };
    case TeamActionTypes.LEAVE_TEAM:
      return { ...state, loading: true };
    case TeamActionTypes.CHANGE_TEAM:
      return { ...state, loading: true };
    case TeamActionTypes.CREATE_MEETING:
      return { ...state, loading: true };
    case TeamActionTypes.DELETE_MEETING:
      return { ...state, loading: true };
    case TeamActionTypes.RESET:
      return {
        teamList: [],
        team: {},
        loading: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default Team;
