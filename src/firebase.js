import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyADFnSWcHCOnaTbR5HCtuvycVkl9NoJGN0",
  authDomain: "whatsapp-clone-62743.firebaseapp.com",
  projectId: "whatsapp-clone-62743",
  storageBucket: "whatsapp-clone-62743.appspot.com",
  messagingSenderId: "1073114090130",
  appId: "1:1073114090130:web:4a87e68909624c51c6344b",
  databaseURL: "https://whatsapp-clone-62743.firebase.com"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAIC31GmLAeABUmQw-vNOzHeaee38YbmKY",
//   authDomain: "whatsapp-clone1-54e78.firebaseapp.com",
//   projectId: "whatsapp-clone1-54e78",
//   storageBucket: "whatsapp-clone1-54e78.appspot.com",
//   messagingSenderId: "814466745014",
//   appId: "1:814466745014:web:5388870b189400d2971c17",
//   databaseURL: "https://whatsapp-clone1-54e78.firebase.com"
// };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
