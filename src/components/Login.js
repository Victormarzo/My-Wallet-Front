import { useState } from "react";
import { Input,Button,P,Center} from "./Components";
import Logo from "../assets/img/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    return(<>
        <Center>
            <LogoWrapper src={Logo} alt="logo"></LogoWrapper>
        
        <Input
            placeholder="E-mail"
            required
            type="email"
            value={email}    
            onChange={e=>setEmail(e.target.value)}
        ></Input>
        <Input
            placeholder="Senha"
            required
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
        ></Input>
        <Button>Entrar</Button>
        
           <Link to={'/signup'}><P>Primeira vez? Cadastre-se!</P></Link> 
        </Center>
        
    </>)
}
const LogoWrapper=styled.img`
    margin-bottom: 25px;
    margin-top:160px;
   
`
    

