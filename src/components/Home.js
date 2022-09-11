import { BigButton,H1,Center,Side,Transaction,TransactionP} from "./Components";
import Exit from "../assets/img/Exit.svg";
import Plus from "../assets/img/Plus.svg";
import Minus from "../assets/img/Minus.svg";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/User.context";
import { useNavigate } from "react-router-dom";
import { getTransactions } from "../services/mywallet";
export default function Home(){

const localName=JSON.parse(localStorage.getItem('mywallet'));
const name=localName.name;
const {type,setType}=useContext(UserContext);
const navigate=useNavigate();
const [transactionList,setTransactionList]=useState([])
const [result,setResult]=useState([])
useEffect(()=>{
    getTransactions()
     .then((answer)=>{
        setTransactionList(answer.data.transactions);
        setResult(answer.data.result)
        
        ;})
     .catch((error)=>{
        alert(error)});
    
},[]);
function goToAdd(){
    navigate("/add")
}
return(
<>
<Side>
<H1>Olá, {name}</H1>
<img src={Exit} alt="exit"></img>
</Side>
<Center>
    <Transactions>
        {transactionList?(transactionList.length>0?
            (<>
                {transactionList.map((value)=>
                <Transaction 
                    obj={value}
                    key={value._id}>
                </Transaction>)}
               
                    <Balance>
                        <Side color={'#FFFFFF'}>
                            <h1>SALDO</h1>
                            {transactionList?(<TransactionP type={result.operation}>{result.soma}</TransactionP>):(<>a</>)}
                        </Side>
                    </Balance>
                    
                
                </>)
            :
            (<CenterP>Não há registros de <br></br>entrada ou saída</CenterP>)):(<></>)}

    </Transactions>
</Center>
<Side>
<BigButton onClick={()=>{setType('positive');goToAdd()}}>
    <img  src={Plus}alt="plus"></img>
    <p>Nova<br></br>entrada</p> 
</BigButton>
<BigButton onClick={()=>{ setType('negative');goToAdd();}}>
<img src={Minus}alt="minus"></img>
    <p>Nova<br></br>saída</p> 
</BigButton>
</Side>
</>
)

}


const Balance=styled.div`
    position: absolute;
    bottom:10px;
    width: 302px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
        background: #FFFFFF;
    }

`
const CenterP=styled.p`
    margin-top: 180px;
    background: #FFFFFF;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    
`
const Transactions=styled.div`
    width: 326px;
    min-height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 24px;
    margin-bottom: 18px;
    padding-top: 24px;
    padding-left:12px;
    padding-right:12px;
    position: relative;
`