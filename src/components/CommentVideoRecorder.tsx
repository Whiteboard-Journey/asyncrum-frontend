import Webcam from 'react-webcam';
import { useCommentVideoRecorder } from './hooks';

const CommentVideoRecorder: React.FC = () => {
  const videoConstraints = { facingMode: 'user' };
  const cam_w = 320,
    cam_h = 240;
  const {
    recordingState,
    webcamRef,
    videoRef,
    previewStream,
    camMediaBlobUrl,
    setRecordingState,
    camStartRecording,
    camStopRecording,
    uploadVideoes,
  } = useCommentVideoRecorder();

  return (
    <div className="video-recorder">
      <div>
        {recordingState === 'idle' && (
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            width={cam_w}
            height={cam_h}
            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
          />
        )}
        {recordingState === 'recording' && previewStream && (
          <div>
            <video
              ref={videoRef}
              width={cam_w}
              height={cam_h}
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
              src={camMediaBlobUrl}
              controls
              autoPlay
              playsInline
              width={cam_w}
              height={cam_h}
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            />
          </div>
        )}
        {recordingState !== 'recording' ? (
          recordingState === 'idle' ? (
            <div className="mt-4 mb-3 text-center">
              <button
                className="btn btn-primary"
                onClick={() => {
                  camStartRecording();
                  setRecordingState('recording');
                }}>
                Start Recording
              </button>
            </div>
          ) : (
            <div className="mt-4 mb-3 text-center">
              <button
                className="btn btn-primary me-3"
                onClick={() => {
                  setRecordingState('idle');
                }}>
                Reshoot
              </button>
              <button className="btn btn-primary" onClick={uploadVideoes}>
                Save Recording
              </button>
            </div>
          )
        ) : (
          <div className="mt-4 mb-3 text-center">
            <button
              className="btn btn-danger"
              onClick={() => {
                camStopRecording();
                setRecordingState('recorded');
              }}>
              Stop Recording
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentVideoRecorder;
