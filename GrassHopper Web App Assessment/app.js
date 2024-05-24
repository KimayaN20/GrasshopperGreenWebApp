const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

/*import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";*/

// Your web app's Firebase configuration
/*const firebaseConfig = {
    apiKey: "AIzaSyBp9_zGwS2s8QeAMSCgnLoOg_pKPsJ7LlA",
    authDomain: "grasshopper-green-web-app.firebaseapp.com",
    databaseURL: "https://grasshopper-green-web-app-default-rtdb.firebaseio.com",
    projectId: "grasshopper-green-web-app",
    storageBucket: "grasshopper-green-web-app.appspot.com",
    messagingSenderId: "486364515465",
    appId: "1:486364515465:web:f5bb801eec50021ad28a58"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("messages");*/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("form submitted");

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    /*ref.push({
        name: name,
        email: email,
        message: message
    });*/

    // console.log(name, email, subject, message);
    alert.style.display = "block"
        // alert.toString("name" + name, "email" + email, "message" + message)

    setTimeout(() => {
        alert.style.display = "none"
    }, 2000)
    form.reset();
})