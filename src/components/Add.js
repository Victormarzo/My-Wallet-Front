import { Input,Button,H1,Center} from "./Components";
import { useState } from "react";
import styled from "styled-components";
import {newTransaction} from "../services/mywallet.js"
import { useNavigate } from "react-router-dom";

export default function Add({type}){
    let operation;
    
    type==='positive'?(operation='entrada'):(operation='saida')

    const[value,setValue]=useState('');
    const[description,setDescription]=useState('');
    const navigate=useNavigate();
    function k(i) {
        let newValue = i.replace(/\D/g,'');
        newValue = (newValue/100).toFixed(2) + '';
        newValue = newValue.replace(".", ",");
        newValue = newValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        newValue = newValue.replace(/(\d)(\d{3}),/g, "$1.$2,");
        return newValue;
    }
    function addTransaction(e){
        e.preventDefault();
        
        let newValue=value.replace('.','').replace(',','.');
        if (newValue==='0.00'){
            alert("Digite um valor válido")
        }
        let body={operation,value:newValue,description};
        newTransaction(body)
    .then((answer)=>{
        alert("bora dormi")
        navigate('/home');

    })
    .catch((answer)=>{
        console.log(answer);

    });
    }
   return(
     <form onSubmit={addTransaction}>
        <H1>Nova {operation}</H1>
        <Space></Space>
        <Input 
            placeholder="Valor"
            required
            value={value}    
            onChange={e=>{setValue(k(e.target.value))}}></Input>
        <Input 
            placeholder="Descrição"
            required
            value={description}    
            onChange={e=>setDescription(e.target.value)}></Input>
        <Button>Salvar {operation}</Button>
    </form>
   )
}
const Space=styled.div`
height:40px`