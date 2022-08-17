import { Button } from 'react-bootstrap';
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import config from 'config';

const videoConstraints = { facingMode: 'user' }
const cam_w = 320, cam_h = 240, screen_w = 960, screen_h = 540

const VideoRecorder: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const webcamRef = useRef<Webcam>(null)
  const [uploadCounter, setUploadCounter] = useState(0);
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'recorded'>('idle')

  const {
    status: camStatus,
    startRecording: camStartRecording,
    stopRecording: camStopRecording,
    mediaBlobUrl: camMediaBlobUrl,
    previewStream,
  } = useReactMediaRecorder({ video: true });

  const {
    startRecording: screenStartRecording,
    stopRecording: screenStopRecording,
    mediaBlobUrl: screenMediaBlobUrl,
  } = useReactMediaRecorder({ video: true, screen: true });

  const uploadVideo = () => {
    if (!camMediaBlobUrl || !screenMediaBlobUrl) {
      alert("Recordings are not ready");
      return;
    }

    const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
    const title = user.fullname + " " + Date.now();
    const description = "Daily standups - " + title

    fetch(camMediaBlobUrl!)
      .then(res => res.blob())
      .then(blob => {
        axios.post(config.API_URL+'/api/v1/records', {
          "title": title + " cam",
          "description": description + " cam",
          "scope": ""
        }, { headers: { Authorization: 'Bearer ' + user.token }})
        .then(res => {
          const preSignedURL = res.data.preSignedURL;
          const fileToUpload = new File([blob], title + " cam.mp4", {type: 'video/mp4'});
          const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
            delete headers.common.Authorization;
            headers['Content-Type'] = 'video/mp4';
            return data;
          }] });
          uploadAxios.put(preSignedURL, fileToUpload);
        });
      });
    fetch(screenMediaBlobUrl!)
      .then(res => res.blob())
      .then(blob => {
        axios.post(config.API_URL+'/api/v1/records', {
          "title": title + " screen",
          "description": description + " screen",
          "scope": ""
        }, { headers: { Authorization: 'Bearer ' + user.token }})
        .then(res => {
          const preSignedURL = res.data.preSignedURL;
          const fileToUpload = new File([blob], title + " screen.mp4", {type: 'video/mp4'});
          const uploadAxios = axios.create({ transformRequest: [(data: any, headers: any) => {
            delete headers.common.Authorization;
            headers['Content-Type'] = 'video/mp4';
            return data;
          }] });
          uploadAxios.put(preSignedURL, fileToUpload);
        });
      });
  }

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream])

  useEffect(() => {
    console.log(recordingState, screenMediaBlobUrl);
  }, [recordingState, screenMediaBlobUrl]);

  return (
    <div className="video-recorder">
        <div>
          {
            recordingState === 'idle' &&
            <Webcam audio={false} ref={webcamRef} videoConstraints={videoConstraints} width={cam_w} height={cam_h} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
          }
          {
            (recordingState === 'recording' && previewStream) &&
            <div>
              <video ref={videoRef} width={cam_w} height={cam_h} controls playsInline autoPlay style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
            </div>
          }
          {
            recordingState === 'recorded' &&
            <div>
              <video src={camMediaBlobUrl!} controls autoPlay playsInline width={cam_w} height={cam_h} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
              <video src={screenMediaBlobUrl!} controls autoPlay playsInline width={screen_w} height={screen_h} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
            </div>
          }
          {
            recordingState !== 'recording'
              ? recordingState === 'idle'
                ? (
                  <div className='mt-4 mb-3 text-center'>
                    <button className="btn btn-primary" onClick={() => { camStartRecording(); screenStartRecording(); setRecordingState('recording'); }}>Start Recording</button>
                  </div>
                  )
                : (
                  <div className='mt-4 mb-3 text-center'>
                    <button className="btn btn-primary me-3" onClick={() => { setRecordingState('idle') }}>Reshoot</button>
                    <button className='btn btn-primary' onClick={uploadVideo}>Save Recording</button>
                  </div>
                )
              : (
                <div className='mt-4 mb-3 text-center'>
                  <button className="btn btn-danger" onClick={() => { camStopRecording(); screenStopRecording(); setRecordingState('recorded'); }}>Stop Recording</button>
                </div>
                )
          }
        </div>
    </div >
  );
}

export default VideoRecorder;