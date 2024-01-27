import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { app } from "./firebase";
import './App.css';
import SignupPage from "./pages/Signup";
import SignInPage from "./pages/SignIn";
const auth=getAuth(app);
function App() {

  return (
    <div className="App">
     <SignupPage/>
     <SignInPage/>
    </div>
  );
}

export default App;
