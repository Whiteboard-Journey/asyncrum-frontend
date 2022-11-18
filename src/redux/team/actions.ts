import { TeamActionTypes } from './constants';
import type { Member } from 'pages/settings/types';

export type TeamActionType = {
  type:
    | TeamActionTypes.API_RESPONSE_SUCCESS
    | TeamActionTypes.API_RESPONSE_ERROR
    | TeamActionTypes.CREATE_TEAM
    | TeamActionTypes.READ_ALL_TEAM
    | TeamActionTypes.READ_TEAM
    | TeamActionTypes.UPDATE_TEAM
    | TeamActionTypes.LEAVE_TEAM
    | TeamActionTypes.CHANGE_TEAM
    | TeamActionTypes.RESET;
  payload: unknown | string;
};

type Team = {
  id: number;
  name: string;
  code: string;
  pictureUrl: string;
};

type CurrentTeam = {
  id: number;
  name: string;
  code: string;
  pictureUrl: string;
  members: Member[];
  openMeetings: string[];
};

// common success
export const teamApiResponseSuccess = (
  actionType: string,
  teamListData: Team[] | unknown,
  currentTeamData: CurrentTeam | unknown
): TeamActionType => ({
  type: TeamActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, teamListData, currentTeamData },
});
// common error
export const teamApiResponseError = (actionType: string, error: string): TeamActionType => ({
  type: TeamActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const createTeam = (name: string, code: string): TeamActionType => ({
  type: TeamActionTypes.CREATE_TEAM,
  payload: { name, code },
});

export const readAllTeam = (): TeamActionType => ({
  type: TeamActionTypes.READ_ALL_TEAM,
  payload: {},
});

export const readTeam = (id: number): TeamActionType => ({
  type: TeamActionTypes.READ_TEAM,
  payload: { id },
});

export const updateTeam = (id: number, name: string): TeamActionType => ({
  type: TeamActionTypes.UPDATE_TEAM,
  payload: { id, name },
});

export const leaveTeam = (teamId: number, memberId: number): TeamActionType => ({
  type: TeamActionTypes.LEAVE_TEAM,
  payload: { teamId, memberId },
});

export const changeTeam = (id: number): TeamActionType => ({
  type: TeamActionTypes.CHANGE_TEAM,
  payload: { id },
});

export const resetTeam = (): TeamActionType => ({
  type: TeamActionTypes.RESET,
  payload: {},
});
