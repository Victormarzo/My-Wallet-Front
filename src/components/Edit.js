import { AddButton, H1, AddInput,Side } from "./Components.js";
import { useState } from "react";
import styled from "styled-components";
import { editTransaction } from "../services/mywallet.js"
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft,FaArrowRightFromBracket,FaPlus,FaMinus} from "react-icons/fa6";

export default function Edit() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const location=useLocation()
    const data = location.state;
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
        let body = { operation: data.operation, amount: newValue, description,id:data.id };
        console.log(body)
        editTransaction(body)
            .then(() => {
                navigate('/home');
            })
            .catch((answer) => {
                console.log(answer);
            });
    }
    let editOperation;
    if(data.operation === "POSITIVE"){
        editOperation='entrada'
    }else if(data.operation === "NEGATIVE"){
        editOperation='saída'
    }
    function returnHome (){
        navigate('/home')
    }

    return (
        <form onSubmit={addTransaction}>
            <Side>
                <H1>Editar {editOperation}</H1>
                <FaArrowLeft color="white" size="30px"onClick={returnHome} />
            </Side>
            
            <Space></Space>
            <AddInput
                placeholder={(data.amount/100).toFixed(2).toString().replace('.',',')}
                required
                value={value}
                onChange={e => { setValue(k(e.target.value)) }}></AddInput>
            <AddInput
                placeholder={data.description}
                required
                value={description}
                onChange={e => setDescription(e.target.value)}></AddInput>
            <AddButton>Salvar {editOperation}</AddButton>
        </form>

        
    )
}
const Space = styled.div`
height:40px`