import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = { facingMode: 'user' }
const w = 360, h = 270

const ScreenRecorder: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const webcamRef = useRef<Webcam>(null)
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'recorded'>('idle')

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream,
  } = useReactMediaRecorder({ video: true });

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream])

  return (
    <div className="screen-recorder">
      <header className="screen-recorder-header">
        <div>
          <p>{status}</p>
          {
            recordingState !== 'recording'
              ? recordingState === 'idle'
                ? <button onClick={() => { startRecording(); setRecordingState('recording'); }}>Start Recording</button>
                : <button onClick={() => { setRecordingState('idle') }}>reshoot</button>
              : <button onClick={() => { stopRecording(); setRecordingState('recorded'); }}>Stop Recording</button>
          }
          <br />
          {
            recordingState === 'idle' &&
            < Webcam audio={false} ref={webcamRef} videoConstraints={videoConstraints} width={w} height={h} />
          }
          {
            (recordingState === 'recording' && previewStream) &&
            <video ref={videoRef} width={w} height={h} controls playsInline autoPlay />
          }
          {
            recordingState === 'recorded' &&
            <video src={mediaBlobUrl!} controls autoPlay playsInline width={w} height={h} />
          }
        </div>
      </header >
    </div >
  );
}

export default ScreenRecorder;