import { BigButton,H1,Center,Side,Transaction,TransactionP} from "./Components";
import Exit from "../assets/img/Exit.svg";
import Plus from "../assets/img/Plus.svg";
import Minus from "../assets/img/Minus.svg";
import styled from "styled-components";

export default function Home(){

const localName=JSON.parse(localStorage.getItem('mywallet'));
const name=localName.name;

const provisorisa=[]
const provisoria=[
{
    date:"14/01",
    operation:'positive',
    value:"25,02",
    description:"pix" 
},{
    date:"14/01",
    operation:'negative',
    value:"30,00",
    description:"pizza"
},  {
    date:"14/01",
    operation:'positive',
    value:"2452,00",
    description:"pix" 
}

];
function result(){
    let obj= {}
    let sum=0;
    provisoria.forEach(transaction=>{
        if(transaction.operation==='positive'){
            sum+=Number(transaction.value.replace(',','.'))
        }else{
            sum-=Number(transaction.value.replace(',','.'))
        }
    })
    
    if (sum>0){
        obj={
            soma:sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.','x').replace(',','.').replace('x',','),
            operation:'positive'
        }
    }else{
        obj={
            sum,
            operation:'negative'
        }
    }

    return obj;

}
let res=result();

return(
<>
<Side>
<H1>Ola {name}</H1>
<img src={Exit} alt="exit"></img>
</Side>
<Center>
    <Transactions>
        {provisoria.length>0?
            (<>
                {provisoria.map((value)=>
                <Transaction 
                    obj={value}>
                </Transaction>)}
               
                    <Balance>
                        <Side color={'#FFFFFF'}>
                            <h1>SALDO</h1>
                            <TransactionP type={res.operation}>{res.soma}</TransactionP>
                        </Side>
                    </Balance>
                    
                
                </>)
            :
            (<CenterP>Não há registros de <br></br>entrada ou saída</CenterP>)
        }
    </Transactions>
</Center>
<Side>
<BigButton>
    <img src={Plus}alt="plus"></img>
    <p>Nova <br></br> entrada</p> 
</BigButton>
<BigButton>
<img src={Minus}alt="minus"></img>
    <p>Nova <br></br>saída</p> 
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