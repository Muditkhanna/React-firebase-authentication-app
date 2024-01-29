import { useEffect,useState } from "react";
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth"
import { app } from "./firebase";
import './App.css';
import SignupPage from "./pages/Signup";
import SignInPage from "./pages/SignIn";


const auth=getAuth(app);

function App() {

  const [user,setUser]=useState(null);

 useEffect(()=>{
  onAuthStateChanged(auth,user=>{
    if(user){
      //user is logged in
      setUser(user)
    }else{
      console.log("user is logged out");
      setUser(null);
    }
  })
 },[])
 if(user==null){
 return (
    <div className="App">
     <SignupPage/>
     <SignInPage/>
    </div>
  );
 }else{
  return (
   <div className="App">
    <h1>Hello there {user.email}</h1>
    <button onClick={()=>signOut(auth)}>Log out</button>
   </div>
  )
 }
  
}

export default App;
