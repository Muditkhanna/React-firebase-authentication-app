import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoAy0IWhBIVHRSk-yV-bXxm0p8Kl6ATjs",
  authDomain: "app-ea062.firebaseapp.com",
  projectId: "app-ea062",
  storageBucket: "app-ea062.appspot.com",
  messagingSenderId: "560684306814",
  appId: "1:560684306814:web:17ff8ffbaacb2bac54e32f",
  databaseURL:"https://app-ea062-default-rtdb.firebaseio.com/",
};

export const app=initializeApp(firebaseConfig);
