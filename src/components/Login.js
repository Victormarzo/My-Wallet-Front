import { useState } from "react";
import { Input,Button,P,Center} from "./Components";
import Logo from "../assets/img/Logo.svg";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import {postLogin} from "../services/mywallet.js"

export default function Login(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
function Login(e){
    e.preventDefault();
    let body={email,password}
    postLogin(body)
    .then((answer)=>{
        const token=answer.data.token;
        const name=answer.data.name;
        const authJSON =JSON.stringify({token:token,name:name});
        localStorage.setItem('mywallet',authJSON)
        
        navigate('/home');

    })
    .catch(()=>{
        alert('Email e/ou senha inválidos');
        setPassword('');

    });
}

    return(<form onSubmit={Login}>
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
        
    </form>)
}
const LogoWrapper=styled.img`
    margin-bottom: 25px;
    margin-top:160px;
   
`
    

