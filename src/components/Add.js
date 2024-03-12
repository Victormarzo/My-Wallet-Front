import { AddButton, H1, AddInput,Side } from "./Components.js";
import { useState } from "react";
import styled from "styled-components";
import { newTransaction } from "../services/mywallet.js"
import { useNavigate,useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function Add() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const location=useLocation();
    const operationData = location.state;
    function k(i) {
        let newValue = i.replace(/\D/g, '');
        newValue = (newValue / 100).toFixed(2) + '';
        newValue = newValue.replace(".", ",");
        newValue = newValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
        newValue = newValue.replace(/(\d)(\d{3}),/g, "$1.$2,");
        return newValue;
    }
    function addTransaction(e) {
        e.preventDefault();

        let newValue = value.replace('.', '').replace(',', '.') * 100;
        if (newValue === '0.00') {
            alert("Digite um valor válido")
        }
        let body = { operation: operationData, amount: newValue, description };
        newTransaction(body)
            .then(() => {
                navigate('/home');
            })
            .catch((answer) => {
                console.log(answer);
            });
    }
    
    let addOperation;
    if(operationData === "POSITIVE"){
        addOperation='entrada'
    }else if(operationData === "NEGATIVE"){
        addOperation='saída'
    }
    
    function returnHome (){
        navigate('/home')
    }

    return (
        <form onSubmit={addTransaction}>
            <Side>
                <H1>Nova {addOperation}</H1>
                <FaArrowLeft color="white" size="30px"onClick={returnHome} />
            </Side>
            
            <Space></Space>
            <AddInput
                placeholder="Valor"
                required
                value={value}
                onChange={e => { setValue(k(e.target.value)) }}></AddInput>
            <AddInput
                placeholder="Descrição"
                required
                value={description}
                onChange={e => setDescription(e.target.value)}></AddInput>
            <AddButton>Salvar {addOperation}</AddButton>
            

        </form>

        
    )
}
const Space = styled.div`
height:40px`