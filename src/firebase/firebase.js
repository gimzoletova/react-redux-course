import * as firebase from 'firebase';

console.log(process.env.FIREBASE_API_KEY);


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {  firebase, googleAuthProvider, database as default };



// firebase.database().ref().set({name: 'tzuri', age: 45, isSingle: false, location: {city: "Gimzo", country: "Israel"}})
// .then(() => {
//     console.log('saved!');    
// })
// .catch((e) => {
//     console.log('error: ', e);    
// });

// firebase.database().ref().update({name: 'Naomi', age: 27, job: 'yes', isSingle: null})
// .then(() => {
//     console.log('updated!');    
// })
// .catch((e) => {
//     console.log('error: ', e);    
// });

// firebase.database().ref('isSingle').set(null)
// .then(() => {
//     console.log('nulled isSingle');    
// })
// .catch((e) => {
//     console.log('error: ', e);    
// });


// firebase.database().ref('isSingle').remove()
// .then(() => {
//     console.log('removed sucssessfully!!');    
// })
// .catch(() => {
//     console.log('failed removing');    
// });