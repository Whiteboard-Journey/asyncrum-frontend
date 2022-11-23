import { useState } from 'react';
import { useVideoRecorder } from './hooks';
import { useMeeting } from 'pages/docs/hooks';

type Props = {
  meetingId: number;
  meetingName: string;
};

const ScreenRecorder = ({ meetingId, meetingName }: Props) => {
  const [meetingInProgress, setMeetingInProgress] = useState<boolean>(false);
  const screen_w = 960,
    screen_h = 540;
  const {
    recordingState,
    videoRef,
    previewStream,
    screenMediaBlobUrl,
    setRecordingState,
    screenStartRecording,
    screenStopRecording,
    uploadMeetingVideo,
  } = useVideoRecorder();
  const { onEndMeeting, onEnterMeeting } = useMeeting();

  return (
    <div className="video-recorder mt-4">
      <div>
        {recordingState === 'recording' && previewStream && (
          <div>
            <video
              ref={videoRef}
              width={screen_w}
              height={screen_h}
              controls
              playsInline
              autoPlay
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            />
          </div>
        )}
        {recordingState === 'recorded' && (
          <div>
            <video
              src={screenMediaBlobUrl}
              controls
              autoPlay
              playsInline
              width={screen_w}
              height={screen_h}
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            />
          </div>
        )}
        {recordingState !== 'recording' ? (
          recordingState === 'idle' ? (
            <div className="mt-4 mb-3 text-center">
              <div className="d-inline me-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setRecordingState('refused');
                    onEnterMeeting(meetingId, meetingName);
                  }}
                >
                  Start Meeting without Recording
                </button>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  screenStartRecording();
                  setRecordingState('recording');
                }}
              >
                Start Meeting with Recording
              </button>
            </div>
          ) : (
            <div className="mt-4 mb-3 text-center">
              {meetingInProgress ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    uploadMeetingVideo(screenMediaBlobUrl!, meetingId);
                    onEndMeeting(meetingId);
                  }}
                >
                  Save Recording & End Meeting
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    onEndMeeting(meetingId);
                  }}
                >
                  End Meeting
                </button>
              )}
            </div>
          )
        ) : (
          <div className="mt-4 mb-3 text-center">
            {meetingInProgress && <h4 className="mb-4">Meeting in progress...</h4>}
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                setMeetingInProgress(true);
                onEnterMeeting(meetingId, meetingName);
              }}
            >
              Start Meeting
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                screenStopRecording();
                setRecordingState('recorded');
              }}
            >
              Stop Recording
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenRecorder;
