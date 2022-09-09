import { BigButton,H1,Center,Side,Transaction} from "./Components";
import Exit from "../assets/img/Exit.svg";
import Plus from "../assets/img/Plus.svg";
import Minus from "../assets/img/Minus.svg";
import styled from "styled-components";
export default function Home(){

const provissoria=[]
const provisoria=[
{
    date:"14/01",
    operation:true,
    value:"25,00",
    description:"pix" 
},{
    date:"14/01",
    operation:false,
    value:"30,00",
    description:"pizza"
},{
    date:"14/01",
    operation:true,
    value:"245,00",
    description:"pix" 
}

];

return(
<>
<Side>
<H1>Ola Vitao</H1>
<img src={Exit} alt="exit"></img>
</Side>
<Center>
    <Transactions>
        {provisoria.length>0?
            (provisoria.map((value)=>
                <Transaction 
                    date={value.date}
                    operation={value.operation}
                    value={value.value}
                    description={value.description}>
                </Transaction>)
            ):
            (<CenterP>Não há registros de <br></br>entrada ou saída</CenterP>)
        }
    </Transactions>
</Center>
<Side>
<BigButton>
    <img src={Plus}alt="plus"></img>
    <p>Nova Entrada</p> 
</BigButton>
<BigButton>
<img src={Minus}alt="minus"></img>
    <p>Nova Saída</p> 
</BigButton>
</Side>
</>
)

}
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
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 24px;
    margin-bottom: 18px;
    padding-top: 24px;
    padding-left:12px;
`