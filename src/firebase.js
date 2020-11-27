import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB_aG9s2wH1QoNd1DjiJARXTCEfNhfLWN4",
    authDomain: "facebook-clone-react-6829b.firebaseapp.com",
    databaseURL: "https://facebook-clone-react-6829b.firebaseio.com",
    projectId: "facebook-clone-react-6829b",
    storageBucket: "facebook-clone-react-6829b.appspot.com",
    messagingSenderId: "1004100819105",
    appId: "1:1004100819105:web:9c6e191faf6fa6d10678e0",
    measurementId: "G-GL403479X2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;