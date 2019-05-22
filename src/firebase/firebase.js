import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBNuXU-zKbfHM95RBF2vI2jYPsvFWJoXX4',
    authDomain: 'expensify-cc867.firebaseapp.com',
    databaseURL: 'https://expensify-cc867.firebaseio.com',
    projectId: 'expensify-cc867',
    storageBucket: 'expensify-cc867.appspot.com',
    messagingSenderId: '101392083316',
    appId: '1:101392083316:web:3e1eaddca63bcfd'
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