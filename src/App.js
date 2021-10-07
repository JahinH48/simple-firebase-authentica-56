
import './App.css';
import {getAuth, signInWithPopup ,GoogleAuthProvider ,GithubAuthProvider } from "firebase/auth";


import initallzeAuthentication from './Firebase/firebase';
import { useState } from 'react';

// GitHub 
const githubProvider = new GithubAuthProvider();

initallzeAuthentication()
const googleProvider = new GoogleAuthProvider();
function App() {
  const [ user , setUser ] = useState({})
  
 
  const auth = getAuth();
  const handleGoogleSingIn =()=>{
    
    signInWithPopup(auth , googleProvider)
    .then(result=>{
        const {displayName , email ,photoURL} = result.user;
    
        const logginUser ={
          name :displayName,
          email:email,
          photo : photoURL
        };
        setUser(logginUser);
       
    })
    .catch(error =>{
      console.log(error.massage)
    })
  }

  const GithubSignIn = () => {
    signInWithPopup(auth , githubProvider)
      .then(result => {
        const { displayName, photoURL, email } = result.user;
       
        console.log(result.user);
        const logginUser = {
          name: displayName,
          email: email,
          photo: photoURL
          
        }
        setUser(logginUser);
      })
  }
  return (
    <div className="App">

      <button onClick={handleGoogleSingIn}>Google Sing In </button>
      <button onClick={GithubSignIn}>GitHub Sing In</button>
    <br />
  
    {
      user.photo && <div>
        <h2>WellCome {user.name}</h2>
        <p>Email: {user.email}</p>
        <img src={user.photo} alt="" />
      </div>
    }
    </div>
  );
}

export default App;
