import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAfa_XNtrNmNi7Bu_dNOgx7Nd66HWuzUlc",
    authDomain: "paris-golf.firebaseapp.com",
    databaseURL: "https://paris-golf.firebaseio.com",
    projectId: "paris-golf",
    storageBucket: "paris-golf.appspot.com",
    messagingSenderId: "355085753876",
    appId: "1:355085753876:web:cbabdf114d05edc1f91101"
};

const app = firebase.initializeApp(firebaseConfig);

export const Database = app.database()
export const Storage = app.storage()
