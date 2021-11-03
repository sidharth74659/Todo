// @ts-nocheck
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

// * FIRST initializeApp then anything after
const firebaseApp = initializeApp({
    apiKey: "AIzaSyD-dQ1LyPjots2qb6ZoDYz74F9G2GInAEY",
    authDomain: "todo-200720.firebaseapp.com",
    databaseURL: "https://todo-200720.firebaseio.com",
    projectId: "todo-200720",
    storageBucket: "todo-200720.appspot.com",
    messagingSenderId: "241273295218",
    appId: "1:241273295218:web:5126f5ad87dd409ffb4deb",
    measurementId: "G-10HRN3PDGM"
});

const signUp = document.querySelector('#sign-in')
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('logged in');
        signUp.textContent = 'Sign In'
        window.location.assign('../dashboard')
    } else {
        console.log('No user');
        signUp.textContent = 'Sign Up'
        signUp.addEventListener('click', createUser)
    }
})


function createUser(e) {
    e.preventDefault();
    const userEmail = document.querySelector('#email-address').value
    const userPassword = document.querySelector('#password').value

    // auth.createUserWithEmailAndPassword(userEmail, userPassword)
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            console.log("signed- up")
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            alert(errorCode)
        });
}

function signUser(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("signed- in")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

}