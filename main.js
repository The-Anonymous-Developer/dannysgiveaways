// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhAX8K0nu0AE59Z7ywhgWSlLBRj-ov5YU",
  authDomain: "nydanny-firebase.firebaseapp.com",
  projectId: "nydanny-firebase",
  storageBucket: "nydanny-firebase.appspot.com",
  messagingSenderId: "49909583662",
  appId: "1:49909583662:web:57a1c76eb360aa869534bf",
  measurementId: "G-5TVS93W9XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*------------------------------------------------------------------------------------------------*/

import { getDatabase, ref, set } from "firebase/database";
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  name = "aayan"
  email = "aaylovesgames@gmail.com"
  profile_picture = "https://cdn.discordapp.com/attachments/768156272293052477/938824305385545758/profile.png"
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}