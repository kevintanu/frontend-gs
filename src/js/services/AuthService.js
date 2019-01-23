import firebase from "firebase";
import config from "../configs/firebase";

firebase.initializeApp(config);
let auth = firebase.auth();

const signIn = function(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
};

const signOut = function() {
  return auth.signOut();
};

const loggedIn = function() {
  return auth.currentUser;
};

export { auth, signIn, signOut, loggedIn };
