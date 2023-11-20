import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { 
  getFirestore,
  onSnapshot, 
  collection, 
  addDoc,
  getDocs
  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

        const firebaseConfig = {
          apiKey: "AIzaSyAuSEgwP4KD2qo2XLaAoJVwVgOBoElFhgE",
          authDomain: "chinedus-wedding.firebaseapp.com",
          projectId: "chinedus-wedding",
          storageBucket: "chinedus-wedding.appspot.com",
          messagingSenderId: "153444567710",
          appId: "1:153444567710:web:993bb74381e5fd3156498f",
          measurementId: "G-45NYL950SL"
        };
      
        const app = initializeApp(firebaseConfig);
        const fireStore = getFirestore();
        export const colRef = collection(getFirestore(),'rsvps');
        export const addDocument = addDoc;

        export {
          collection,
          fireStore,
          addDoc,
          onSnapshot,
          getDocs
        }