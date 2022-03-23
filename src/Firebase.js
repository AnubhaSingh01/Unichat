import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCCKbC0ziHTSrKXevHRi_wQdYlC21JIcDA",
    authDomain: "chat-app-ee8bc.firebaseapp.com",
    projectId: "chat-app-ee8bc",
    storageBucket: "chat-app-ee8bc.appspot.com",
    messagingSenderId: "1092424763558",
    appId: "1:1092424763558:web:36cefd4571d51a9e5d8c67",
    measurementId: "G-6ZSNJ92T4Q"
}).auth()