import firebase from "firebase/app";
import "firebase/auth";
import config from "../configs/firebaseConfig";

firebase.initializeApp(config);
export default firebase.auth();
