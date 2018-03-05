import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBDtRZY1Zn83l7Fahj7_FnrWFftRb2LlYw",
  authDomain: "catch-of-the-day-cam-gunter.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-cam-gunter.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database())

export { firebase }

export default base