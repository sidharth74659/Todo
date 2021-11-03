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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


This is how firebase SDK knows how to connect to your specific firebase project


#### Using a firebase service

The basic syntax is :

    import { } from 'firebase/<service>'

For auth, we use `auth` service and import `getAuth`

    import { getAuth } from "firebase/auth";

    

