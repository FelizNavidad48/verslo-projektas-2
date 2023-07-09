//@ts-nocheck
'use client';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,child, get, push, onChildAdded, onValue } from "firebase/database";
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
  var array  = ["","","",0];
  const db = getDatabase();
  const dbRefrence = ref(db, 'interview/' + id);
  onValue(dbRefrence, (snapshot) => {
    array[0] = snapshot.val().companyName;
    array[1] = snapshot.val().position;
    array[2] = snapshot.val().typeOfQuestions;
    array[3] = parseInt(snapshot.val().amountOfQuestions);

    
  });
  return array;
  
}

export function writeInitialCustomizationData(companyName: any, position: any, typeOfQuestions: any, amount:any) {

  const db = getDatabase();
  const postListRef = ref(db, 'interview/');
  const newPostRef = push(postListRef);
  let pageId;
  set(newPostRef, {
    companyName: companyName,
    position: position,
    typeOfQuestions: typeOfQuestions,
    amountOfQuestions: amount,
});



onChildAdded(postListRef, (data) => { pageId = data.key});

return pageId;

}

export function fillChatData(id:any) {

  var chatArray =[];
  
  var textAreas = document.getElementsByName("interviewtextarea");
  textAreas.forEach(element => {
    chatArray.push(element.innerHTML);
  });

  const db = getDatabase();
  
    

  for(let i =0; i<chatArray.length;i++){
    const postListRef = ref(db, 'interview/'+id +"/chat/"+`${i}`);
    set(postListRef, {
      text: chatArray[i],
    });
  }
    
   
  
}
