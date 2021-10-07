
import './App.css';
import {getAuth,signOut , signInWithPopup ,GoogleAuthProvider ,GithubAuthProvider } from "firebase/auth";


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
          email: email,
          photo : photoURL
        };
        setUser(logginUser);
        console.log(result.user);
       
    })
    .catch(error =>{
      console.log(error.massage)
    })
  }

  const GithubSignIn = () => {
    signInWithPopup(auth , githubProvider)
      .then(result => {
        const { displayName, photoURL, email } = result.user;
      
        const logginUser = {
          name: displayName,
          
          photo: photoURL,
          email: email
          
        }
        setUser(logginUser);
      })
  }
  const GoogleSingOut =()=>{
    signOut(auth)
    .then( ()=>{
      setUser({})
    })
  }
  return (
    <div className="App">

    {user.name ?
    <button onClick={GoogleSingOut}>Sing Out</button>:
       <div>
       <button onClick={handleGoogleSingIn}>Google Sing In </button>
        <button onClick={GithubSignIn}>GitHub Sing In</button>
       </div>
        
    }
    <br />
  
    {
      user.name && <div>
        <h2>WellCome {user.name}</h2>
        <p>Email: {user.email}</p>
        <img src={user.photo} alt="" />
      </div>
    }
    </div>
  );
}

export default App;
