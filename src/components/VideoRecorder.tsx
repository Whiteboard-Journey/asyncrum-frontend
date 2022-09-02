import Webcam from 'react-webcam';
import { useVideoRecorder } from './hooks';

const VideoRecorder: React.FC = () => {
  const videoConstraints = { facingMode: 'user' };
const cam_w = 320,
  cam_h = 240,
  screen_w = 960,
  screen_h = 540;
  const { recordingState, webcamRef, videoRef, previewStream, camMediaBlobUrl, screenMediaBlobUrl, setRecordingState, camStartRecording, camStopRecording, screenStartRecording, screenStopRecording, uploadVideoes } = useVideoRecorder();


  // const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
  // const title = user.fullname + ' ' + Date.now();
  // const description = 'Daily standups - ' + title;
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const webcamRef = useRef<Webcam>(null);
  // const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'recorded'>('idle');

  // const {
  //   status: camStatus,
  //   startRecording: camStartRecording,
  //   stopRecording: camStopRecording,
  //   mediaBlobUrl: camMediaBlobUrl,
  //   previewStream,
  // } = useReactMediaRecorder({ video: true });

  // const {
  //   startRecording: screenStartRecording,
  //   stopRecording: screenStopRecording,
  //   mediaBlobUrl: screenMediaBlobUrl,
  // } = useReactMediaRecorder({ video: true, screen: true });

  // const uploadVideo = async (url: string, type: string) => {
  //   const camMedia = await fetch(url);
  //   const blob = await camMedia.blob();
  //   const body = {
  //     title: title + ' ' + type,
  //     description: description + ' ' + type,
  //     scope: 'team',
  //   };

  //   const createRecordAPIResponse = await createRecordAPI(body);
  //   const presignedURL = createRecordAPIResponse.data.preSignedURL;
  //   const fileToUpload = new File([blob], title + ' ' + type + '.mp4', { type: 'video/mp4' });
  //   await uploadRecordAPI(presignedURL, fileToUpload);
  // };

  // const uploadVideoes = async () => {
  //   if (!camMediaBlobUrl || !screenMediaBlobUrl) {
  //     alert('Recordings are not ready');
  //     return;
  //   }

  //   await uploadVideo(camMediaBlobUrl, 'cam');
  //   await uploadVideo(screenMediaBlobUrl, 'screen');

  //   window.location.reload();
  // };

  // useEffect(() => {
  //   if (videoRef.current && previewStream) {
  //     videoRef.current.srcObject = previewStream;
  //   }
  // }, [previewStream]);

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
              <button
                className="btn btn-primary"
                onClick={() => {
                  screenStartRecording();
                  camStartRecording();
                  setRecordingState('recording');
                }}
              >
                Start Recording
              </button>
            </div>
          ) : (
            <div className="mt-4 mb-3 text-center">
              <button
                className="btn btn-primary me-3"
                onClick={() => {
                  setRecordingState('idle');
                }}
              >
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

export default VideoRecorder;
