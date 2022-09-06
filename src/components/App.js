import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import Login from "./Login"
import SignUp from "./SignUp";



export default function App(){


  return(
    <BrowserRouter>
      <GlobalStyle/>    
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
        </Routes> 
    </BrowserRouter>
  )
}
/*
<Route path="/home" element={<Home/>}/>
<Route path="/income" element={<Income/>}/>
<Route path="/outcome" element={<Outcome/>}/>
*/