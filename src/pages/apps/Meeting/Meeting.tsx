import { JitsiMeeting } from '@jitsi/react-sdk';
import { useRedux } from 'hooks';

const Meeting = (roomName: string) => {
  const { appSelector } = useRedux();
  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  return (
    <JitsiMeeting
      domain={process.env.REACT_APP_JITSI_URL}
      roomName={roomName}
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
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = '800px';
      }}
    />
  );
};

export { Meeting };
