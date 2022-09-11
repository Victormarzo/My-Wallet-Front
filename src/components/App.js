import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Add from "./Add";
import PrivatePage from "./PrivatePage";
import UserContext from "../contexts/User.context";
import { useState } from "react";

export default function App(){
  const[type,setType]=useState('')

  return(
    <BrowserRouter>
      <GlobalStyle/>   
      <UserContext.Provider value={{type,setType}}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<PrivatePage><Home/></PrivatePage>}/>
          <Route path="/add" element={<PrivatePage><Add/></PrivatePage>}/>
        </Routes> 
        </UserContext.Provider>
    </BrowserRouter>
  )
}
