import { useReactMediaRecorder } from 'react-media-recorder';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { createRecord as createRecordAPI, uploadRecord as uploadRecordAPI } from 'helpers';
import { useRedux } from 'hooks';

const useVideoRecorder = () => {
  const { appSelector } = useRedux();

  const { user, currentTeam } = appSelector((state) => ({
    user: state.Auth.user,
    currentTeam: state.Team.currentTeam,
  }));
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'recorded'>('idle');

  const videoRef = useRef<HTMLVideoElement>(null);
  const webcamRef = useRef<Webcam>(null);

  const title = user.fullname + ' ' + Date.now();
  const description = 'Daily standups - ' + title;

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

  const uploadVideo = async (url: string, type: string) => {
    const camMedia = await fetch(url);
    const blob = await camMedia.blob();
    const body = {
      title: title + ' ' + type,
      description: description + ' ' + type,
      scope: 'team',
      teamId: currentTeam.id,
    };

    const createRecordAPIResponse = await createRecordAPI(body);
    const presignedURL = createRecordAPIResponse.data.preSignedURL;
    const fileToUpload = new File([blob], title + ' ' + type + '.mp4', { type: 'video/mp4' });
    await uploadRecordAPI(presignedURL, fileToUpload);
  };

  const uploadVideoes = async () => {
    if (!camMediaBlobUrl || !screenMediaBlobUrl) {
      alert('Recordings are not ready');
      return;
    }

    await uploadVideo(camMediaBlobUrl, 'cam');
    await uploadVideo(screenMediaBlobUrl, 'screen');

    window.location.reload();
  };

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  return {
    recordingState,
    webcamRef,
    videoRef,
    previewStream,
    camMediaBlobUrl,
    screenMediaBlobUrl,
    setRecordingState,
    camStartRecording,
    camStopRecording,
    screenStartRecording,
    screenStopRecording,
    uploadVideoes,
  };
};

export default useVideoRecorder;
