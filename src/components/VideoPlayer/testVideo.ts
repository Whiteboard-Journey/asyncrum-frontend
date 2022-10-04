import type { Video } from './Video';

const el = document.createElement('video');
el.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
el.id = "video"
console.log(el)

export const video: Video = 
    {
    bookmarks: [],
    codedHeight: 1080,
    codedWidth: 1920,
    displayAspectRatio: "16:9",
    el: el,
    filePath: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    frameRate: 30,
    id: "c0f54960-7df1-4788-bfa0-15e4f90e691a",
    name: "[VAP]video1072070932",
    seeking: false,
    volume: 0.8  
    }
