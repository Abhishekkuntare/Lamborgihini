// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAqtUaN5oDZqY29D3tS2BCFSGSik4Vn3Sw",
    authDomain: "lamborghini-f74a3.firebaseapp.com",
    projectId: "lamborghini-f74a3",
    storageBucket: "lamborghini-f74a3.appspot.com",
    messagingSenderId: "926970137615",
    appId: "1:926970137615:web:b3ec387b7a3958893da77a",
    measurementId: "G-0DM6KWFS6Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db