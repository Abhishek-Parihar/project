import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
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