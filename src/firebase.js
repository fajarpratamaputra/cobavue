import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDvo7O8y6Ym07aPtiTGI5GuEpbECfGt3Jk",
    authDomain: "fir-vue-f8f5e.firebaseapp.com",
    databaseURL: "https://fir-vue-f8f5e.firebaseio.com",
    projectId: "fir-vue-f8f5e",
    storageBucket: "fir-vue-f8f5e.appspot.com",
    messagingSenderId: "80741896290"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');