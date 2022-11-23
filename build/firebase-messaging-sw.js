// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyADFwiyQqDxUxehYKKhs6LzlUYtKOfOoS4',
  authDomain: 'asyncrum.firebaseapp.com',
  projectId: 'asyncrum',
  storageBucket: 'asyncrum.appspot.com',
  messagingSenderId: '586881315432',
  appId: '1:586881315432:web:01354de0665f2d4b6881dd',
  measurementId: 'G-CDKERB6JDW',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
