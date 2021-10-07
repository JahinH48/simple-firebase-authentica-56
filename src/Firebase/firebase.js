
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase-confic";

const initallzeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}


export default initallzeAuthentication;