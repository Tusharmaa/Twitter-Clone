import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD18N2GZMyKjuW5WTNKYLZm-_kTmFnYAm0",
  authDomain: "twitter-clone-d5990.firebaseapp.com",
  databaseURL: "https://twitter-clone-d5990.firebaseio.com",
  projectId: "twitter-clone-d5990",
  storageBucket: "twitter-clone-d5990.appspot.com",
  messagingSenderId: "206536784227",
  appId: "1:206536784227:web:70bc72e7a7d842590bfb56",
  measurementId: "G-54WTW76VSH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
