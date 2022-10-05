import type { Video } from './Video';

const el = document.createElement('video');
el.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
el.id = "video"

export const video: Video = 
    {
    bookmarks: [{
        content: "saasdf",
        drawing: {
            id: "doc",
            name: "New Document",
            version: 15.5,
            pages: {
                page: {
                    id: "page",
                    name: "Page 1",
                    childIndex: 1,
                    shapes: {},
                    bindings: {}
                }
            },
            pageStates: {
                page: {
                    id: "page",
                    selectedIds: [],
                    camera: {
                        point: [
                            0,
                            0
                        ],
                        zoom: 1
                    },
                    editingId: null
                }
            },
            assets: {}
        },
        id: "22d9cee4-f42a-47d6-8229-a83f90850a2d",
        icon: {
            native: "🔖"
        },
        position: null,
        scale: 1,
        time: 493.566666,
        video_id: "c0f54960-7df1-4788-bfa0-15e4f90e691a",
        author: "Dongun Yi"
    }],
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
