import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCh4Cp9VY7rXM_-eWbPXfuIbQqkwxEa2Ts",
  authDomain: "whatsapp-clone-personal-98bdc.firebaseapp.com",
  projectId: "whatsapp-clone-personal-98bdc",
  storageBucket: "whatsapp-clone-personal-98bdc.appspot.com",
  messagingSenderId: "788528794147",
  appId: "1:788528794147:web:8d8ceb922d1c75fa40bf96",
  measurementId: "G-C2401DLT54"
};
   
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;