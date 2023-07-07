'use client';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onChildAdded, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIvndUqVvskuZXDKm2I9mTuYjfpqPafSc",
  authDomain: "verslo-projektas-2.firebaseapp.com",
  databaseURL: "https://verslo-projektas-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "verslo-projektas-2",
  storageBucket: "verslo-projektas-2.appspot.com",
  messagingSenderId: "1050051269706",
  appId: "1:1050051269706:web:69de96c9bde9e4ff6802b3",
  measurementId: "G-VQF7YMXG98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function retrieveDataById(id:any){
  var array  = ["","",""];
  const db = getDatabase();
  const dbRefrence = ref(db, 'userCustomizationData/' + id);
  onValue(dbRefrence, (snapshot) => {
  array[0] = snapshot.val().companyName;
  array[1] = snapshot.val().position;
  array[2] = snapshot.val().typeOfQuestions;

  });


  return array;
}

export function writeInitialCustomizationData(companyName: any, position: any, typeOfQuestions: any) {

  const db = getDatabase();
  const postListRef = ref(db, 'userCustomizationData/');
  const newPostRef = push(postListRef);
  let pageId;
  set(newPostRef, {
    companyName: companyName,
    position: position,
    typeOfQuestions: typeOfQuestions,
});

onChildAdded(postListRef, (data) => { pageId = data.key});

return pageId;

}