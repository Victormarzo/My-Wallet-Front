import { useState } from "react";
import { Input,Button,P} from "./Components";
import Logo from "../assets/img/Logo.svg";

export default function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    return(<>
        <img src={Logo} alt="logo"></img>
        <Input
        placeholder="E-mail"
        required
        value={email}    
        onChange={e=>setEmail(e.target.value)}
        ></Input>
        <Input
        placeholder="Senha"
        required
        value={password}
        onChange={e=>setPassword(e.target.value)}
        ></Input>
        <Button>Entrar</Button>
        <P>Primeira vez? Cadastre-se!</P>
    </>)
}