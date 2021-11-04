# Todo

with mongodb and user authentication

# Table of contents

- [Tailwind CSS Setup](#tailwind-css-setuphttpswwwyoutubecomwatchvztjxyiq0nquab_channeljamesqquick)

### [Firebase Setup](https://www.youtube.com/watch?v=rQvOAnNvcNQ&ab_channel=Firebase)

#### Installation

After npm setup :

    npm i firebase

Create a folder `src` and inside it a `firebase.js` file and include following code in it

#### Initialization

Then, initialize Firebase and begin using the SDKs : that is available in your Firebase -> Project Settings -> General (Scroll Down) and you'll find code similar to this

    <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->
    <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
    
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyD-dQ1LyPjots2qb6ZoDYz74F9G2GInAEY",
    authDomain: "todo-200720.firebaseapp.com",
    databaseURL: "https://todo-200720.firebaseio.com",
    projectId: "todo-200720",
    storageBucket: "todo-200720.appspot.com",
    messagingSenderId: "241273295218",
    appId: "1:241273295218:web:5126f5ad87dd409ffb4deb",
    measurementId: "G-10HRN3PDGM"
    };

    // Initialize Firebase FIRST before anything else
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

This is how firebase SDK knows how to connect to your specific firebase project

#### Using a firebase service

The basic syntax is :

    import { } from 'firebase/<service>'

For auth, we use `auth` service and import `getAuth`

    <!-- if you don't use module bundler, you can use these scripts -->
    import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

- we use `onAuthStateChanged` to observe the changes if a user is signed in/ logged out
- `createUserWithEmailAndPassword` is used(the name itself explains) and should be enabled in your Project -> Authentication(on left pane) -> Sign-in Method (tab) -> click 'Add new provider' and enable 'Email/Password'.

### Authentication

Handle/ call these functions by adding an event listener to a sign-up/ sign-in button

#### To create a user

         createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });


#### To Sign-in a user


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });