import { useReactMediaRecorder } from 'react-media-recorder';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { createComment as createCommentAPI, uploadRecord as uploadRecordAPI } from 'helpers';
import { useRedux } from 'hooks';

const useCommentVideoRecorder = () => {
  const { appSelector } = useRedux();

  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));
  const [recordingState, setRecordingState] = useState<'idle' | 'recording' | 'recorded'>('idle');

  const videoRef = useRef<HTMLVideoElement>(null);
  const webcamRef = useRef<Webcam>(null);

  const title = user.fullname + ' ' + Date.now();
  const description = 'Comment - ' + title;

  const {
    status: camStatus,
    startRecording: camStartRecording,
    stopRecording: camStopRecording,
    mediaBlobUrl: camMediaBlobUrl,
    previewStream,
  } = useReactMediaRecorder({ video: true });

  const uploadVideo = async (url: string) => {
    const camMedia = await fetch(url);
    const blob = await camMedia.blob();
    const currentBookmarkId = sessionStorage.getItem('currentBookmarkId');

    const body = {
      bookmarkId: currentBookmarkId!,
      author: user.fullname,
      description: description,
    };

    const createRecordAPIResponse = await createCommentAPI(body);
    const presignedURL = createRecordAPIResponse.data.preSignedURL;
    const fileToUpload = new File([blob], title + ' ' + '.mp4', { type: 'video/mp4' });
    await uploadRecordAPI(presignedURL, fileToUpload);
  };

  const uploadVideoes = async () => {
    if (!camMediaBlobUrl) {
      alert('Recordings are not ready');
      return;
    }

    await uploadVideo(camMediaBlobUrl);

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
    setRecordingState,
    camStartRecording,
    camStopRecording,
    uploadVideoes,
  };
};

export default useCommentVideoRecorder;
