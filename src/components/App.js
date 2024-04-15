import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Add from "./Add";
import PrivatePage from "./PrivatePage";
import Edit from "./Edit"

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<PrivatePage><Home /></PrivatePage>} />
        <Route path="/add" element={<PrivatePage><Add /></PrivatePage>} />
        <Route path="/edit" element={<PrivatePage><Edit /></PrivatePage>} />

      </Routes>
    </BrowserRouter>
  )
}
