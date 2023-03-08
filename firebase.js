import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDb1wsJOvqTHm_YRP9-mXFF0ml0wo-7nqQ",
    authDomain: "active-24bf1.firebaseapp.com",
    projectId: "active-24bf1",
    storageBucket: "active-24bf1.appspot.com",
    messagingSenderId: "978954051311",
    appId: "1:978954051311:web:f5822d31e8393a7b16451a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

export { auth, db }