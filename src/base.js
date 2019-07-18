import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBirOqDNZCOy0kfTgOTXVGHcfNSitalA6Q",
  authDomain: "catch-of-the-day-prateek-2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-prateek-2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database())

export {
  firebaseApp
};

export default base;