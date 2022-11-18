import { useToggle, useRedux } from 'hooks';
import { useCallback, useEffect, useState } from 'react';
import {
  createMeeting as createMeetingAPI,
  readAllMeeting as readAllMeetingAPI,
  deleteMeeting as deleteMeetingAPI,
  updateMeeting as updateMeetingAPI,
  addMeetingMember as addMeetingMemberAPI,
} from 'helpers';
import { Meeting } from '../types';

const useMeeting = () => {
  const { appSelector } = useRedux();
  const { loading, user, currentTeam } = appSelector((state) => ({
    loading: state.Auth.loading,
    user: state.Auth.user,
    currentTeam: state.Team.currentTeam
  }));

  const [isCreateMeetingOpen, toggleCreateMeeting] = useToggle();
  const [isRecordOpen, toggleRecord] = useToggle();

  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [meetingLoading, setMeetingLoading] = useState<boolean>(true);
  const [currentMeetingName, setCurrentMeetingName] = useState<string>("");
  const [currentMeetingId, setCurrentMeetingId] = useState<number>();

  const teamId = currentTeam?.id;

  const readAllMeeting = useCallback(
    async () => {
      const readAllMeetingAPIResponse = await readAllMeetingAPI(teamId);
      let meetingsData = readAllMeetingAPIResponse.data.meetings;
      meetingsData = meetingsData.map((meeting: Meeting) => {
        return {
        ...meeting,
        participants: meeting.participants.map((participant: string) => {
          const participantArray = participant.split(',');
          return [participantArray[0].substring(1), participantArray[1].trim()];
        })
      }});
      setMeetings(meetingsData);
      setMeetingLoading(false);
    },
    [currentTeam.id]
  );

  const onCreateMeeting = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const meetingName = ((event.target as HTMLFormElement).elements.namedItem('meetingName') as HTMLInputElement).value;
    const createMeetingAPIResponse = await createMeetingAPI({teamId, meetingName});
    setCurrentMeetingName(meetingName);
    setCurrentMeetingId(createMeetingAPIResponse.data.id);
    toggleCreateMeeting();
    toggleRecord();
    readAllMeeting();
  };

  const onDeleteMeeting = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const meetingId = parseInt(((event.target as HTMLFormElement).elements.namedItem('id') as HTMLInputElement).value);
    await deleteMeetingAPI(meetingId);
    readAllMeeting();
  };

  const onEndMeeting = async (meetingId: number) => {
    await updateMeetingAPI(meetingId, {status: false})
    readAllMeeting();
  }

  const onEnterMeeting = (meetingId: number, meetingName: string) => {
    addMeetingMemberAPI(meetingId, {memberId: user.id});
    window.open(`https://${process.env.REACT_APP_JITSI_URL}/${meetingName}`, '_blank');
  }

  useEffect(() => {
    if (loading) {
      return;
    }
    readAllMeeting();
  }, [loading, readAllMeeting]);

  return {
    meetings,
    meetingLoading,
    
    isCreateMeetingOpen,
    toggleCreateMeeting,
    isRecordOpen,
    toggleRecord,
    currentMeetingId,
    currentMeetingName,
    onCreateMeeting,
    onDeleteMeeting,
    onEndMeeting,
    onEnterMeeting,
  };
};

export default useMeeting;
