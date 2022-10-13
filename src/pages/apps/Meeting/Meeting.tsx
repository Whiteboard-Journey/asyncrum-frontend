import { JitsiMeeting } from '@jitsi/react-sdk';
import { useRedux } from 'hooks';

const Meeting = () => {
  const { appSelector } = useRedux();
  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  const generateRoomName = () => `${user.currentTeam.id}${Math.random() * 100}-${Date.now()}`;

  return (
    <JitsiMeeting
      domain={process.env.REACT_APP_JITSI_URL}
      roomName={generateRoomName()}
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{
        displayName: user.fullname,
        email: user.email,
      }}
      onApiReady={(externalApi) => {
        // here you can attach custom event listeners to the Jitsi Meet External API
        // you can also store it locally to execute commands
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = '800px';
      }}
    />
  );
};

export { Meeting };
