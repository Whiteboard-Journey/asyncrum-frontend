import { useToggle, useRedux } from 'hooks';
import { createMeeting, deleteMeeting } from 'redux/actions';


const useMeeting = () => {
  const { dispatch, appSelector } = useRedux();
  const { currentTeam } = appSelector((state) => ({
    currentTeam: state.Team.currentTeam
  }));

  const [isCreateMeetingOpen, toggleCreateMeeting] = useToggle();

  const teamId = currentTeam.id;

  const onCreateMeeting = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const roomName = ((event.target as HTMLFormElement).elements.namedItem('roomName') as HTMLInputElement).value;
    dispatch(createMeeting(teamId, roomName));
    window.location.href = `https://${process.env.REACT_APP_JITSI_URL}/${roomName}`;
  };

  const onDeleteMeeting = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const roomName = ((event.target as HTMLFormElement).elements.namedItem('id') as HTMLInputElement).value;
    dispatch(deleteMeeting(teamId, roomName));
  };

  return {
    isCreateMeetingOpen,
    toggleCreateMeeting,
    onCreateMeeting,
    onDeleteMeeting
  };
};

export default useMeeting;
