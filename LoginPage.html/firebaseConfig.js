import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAfE8iQmWMYadcXYEEm5j84Ejx0vCh4ng",
    authDomain: "coderoom-8daac.firebaseapp.com",
    databaseURL: "https://coderoom-8daac-default-rtdb.firebaseio.com",
    projectId: "coderoom-8daac",
    storageBucket: "coderoom-8daac.appspot.com",
    messagingSenderId: "457609825670",
    appId: "1:457609825670:web:3baa4cee84ac56db7c7007",
    measurementId: "G-LMCT3V3FSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.querySelector(".login_form_firebase").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailV = document.querySelector("#namee").value;
    const passwordV = document.querySelector("#password").value;
    console.log(emailV, passwordV);

    signInWithEmailAndPassword(auth, emailV, passwordV)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("User Logged In");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
})

const provider = new GoogleAuthProvider();

document.querySelector(".googleButton").addEventListener("click" , function(e) {
  e.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert("Signed Up")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})  