import { useState,useEffect } from "react";
import firebase from './login/fire';
import './App.css';
import React from "react";
import Login from "./login/Login";
import Hero from "./login/Hero";

const App=()=> {
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAccount,setHasAccount]=useState(true);

  const clearInputs=() =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin=()=>{
    clearErrors();
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
          default:
            setEmailError(err.message);
  }
});
  };
  const handleSignup=()=>{
    clearErrors();
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/Invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
            default:
        setEmailError(err.message);
            
        }
      })
  
  }
  const handleLogout=()=>{
    firebase.auth().signOut();
  }
  const authListner=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }
  useEffect(()=>{
    authListner();
  })
  

  return (
    <div className="App">
      {user ? (
        <>
        <Hero handleLogout={handleLogout}/>
        </>
      ) :(
      <Login
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
      )}
    
    </div >
  );
}

export default App;
