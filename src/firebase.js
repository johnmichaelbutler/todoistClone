import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC0niACJx61Eh4i5xGyr1C613rxRrFxT28",
  authDomain: "todoist-tut-85956.firebaseapp.com",
  databaseURL: "https://todoist-tut-85956.firebaseio.com",
  projectId: "todoist-tut-85956",
  storageBucket: "todoist-tut-85956.appspot.com",
  messagingSenderId: "128208321593",
  appId: "1:128208321593:web:58ae468136b8d0a05161e8"
});

export {firebaseConfig as firebase };