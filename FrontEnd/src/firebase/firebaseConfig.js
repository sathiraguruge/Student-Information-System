import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCTNPdqZjSe3Pg7RWVEIHdl3LZVwrEvSp0",
    authDomain: "imageupload-23bc4.firebaseapp.com",
    databaseURL: "https://imageupload-23bc4.firebaseio.com",
    projectId: "imageupload-23bc4",
    storageBucket: "imageupload-23bc4.appspot.com",
    messagingSenderId: "336633944290",
    appId: "1:336633944290:web:253f7b0db3b3426d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage , firebase as default
}