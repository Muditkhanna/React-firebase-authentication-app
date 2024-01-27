import React from "react";
import { useState } from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";

const auth=getAuth(app);

const SignInPage=()=>{
   
  
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    
    const signinuser=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((value)=>alert("login was successful"))
        .catch((err)=>alert(err))
    }

   return( 
   <div className="signin-page">
    <h1>Sign In Page</h1>
        <label>Enter your Email</label>
        <input onChange={(e)=>setemail(e.target.value)}  value={email} type="email" placeholder="email address"/>
        <label>Enter your Password</label>
        <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="password" />
        <button onClick={signinuser}>Sign in</button>
    </div>)
}
export default SignInPage;