import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBrx420xJAuQM1KPmYJnAxrMIaDfcQa1vI",
    authDomain: "eatfast-f5acf.firebaseapp.com",
    databaseURL: "https://eatfast-f5acf.firebaseio.com",
    projectId: "eatfast-f5acf",
    storageBucket: "",
    messagingSenderId: "354773888658"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;