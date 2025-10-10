import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyCTAxZt-sJHUjbpT7KYXhvOghlZ_36gIOA",
authDomain: "amavi-joyeria.firebaseapp.com",
projectId: "amavi-joyeria",
storageBucket: "amavi-joyeria.firebasestorage.app",
messagingSenderId: "698311963853",
appId: "1:698311963853:web:f51aa44f84974041b0e584"
};

export const app = initializeApp(firebaseConfig);