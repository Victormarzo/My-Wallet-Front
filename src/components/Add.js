import { Input,Button,H1,Center} from "./Components";
import { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

export default function Add({type=true}){
    let operation;
    
    type?(operation='entrada'):(operation='saida')

    const[value,setValue]=useState('');
    const[description,setDescription]=useState('');

    function addTransaction(e){
        e.preventDefault();
        let body={operation,value,description,date:`${dayjs().date()}/${dayjs().month()}`};
        console.log(body)
    }
   return(
     <form onSubmit={addTransaction}>
        <H1>Nova {operation}</H1>
        <Space></Space>
        <Input 
            placeholder="Valor"
            required
             min="0.00" max="10000.00" step="0.01" 
            value={value}    
            onChange={e=>setValue(e.target.value)}></Input>
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