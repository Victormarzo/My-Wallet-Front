import dayjs from "dayjs";
import styled from "styled-components";

function Input({...otherProps}){
    return(
        <InputWrapper {...otherProps}></InputWrapper>
    )
}

function AddInput ({...otherProps}){
    return(
        <AddInputWrapper{...otherProps}></AddInputWrapper>
    )
}
function Button({children}){
    return(
        <ButtonWrapper>{children}</ButtonWrapper>
    )
}

function AddButton ({children}){
    return(
        <AddButtonWrapper>{children}</AddButtonWrapper>
    )
}

function P({children}){
    return(
        <PWrapper>{children}</PWrapper>
    )
}
function Center({children}){
    return(
        <CenterWrapper>{children}</CenterWrapper>
        )
}
function H1({children}){
    return(
        <H1Wrapper>{children}</H1Wrapper>
    )
}
function BigButton({children,onClick,icon}){
    return(
        <BigButtonWrapper  onClick={onClick}>
           <div>
           {icon}
           </div>
           <div>
           {children}
           </div>
        
        </BigButtonWrapper>
    )
    
}

function Month({children,onClick}){
    return(
        <MonthWrapper onClick={onClick}>
            {children}
        </MonthWrapper>
    )
}

function Side({children,color}){
    return(
    <SideWrapper color={color}>{children}</SideWrapper>
    )
}
function Transaction({obj,onClick}){
    let {operation,description,amount,createdAt}=obj
    const newAmount=((amount/100).toFixed(2)).toString().replace('.', ',')
    return(
    <TransactionPa>
        <div>
            <TransactionP color='#C6C6C6'>{dayjs(createdAt).format('DD/MM')}</TransactionP>
            <Space></Space>
            <TransactionP onClick={onClick} color='#000000'>{description}</TransactionP>
         </div>
        <TransactionP type={operation}>{newAmount}</TransactionP>
    </TransactionPa>)
}

const BigButtonWrapper = styled.div`
    width: 155px;
    height: 114px;
    border-radius: 5px;
    background-color: #A328D6;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
    position: relative;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    padding-left:10px;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #A328D6;
        position: absolute;
        bottom:10px;
        left:10px;
    }
   

`
const Space=styled.div`
    width: 12px;
`
const MonthWrapper=styled.div`
    display: flex;
    justify-content: center;    
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color:white;
    width:60px;
    
`;

const TransactionP=styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    background-color: #FFFFFF;
    color:${(props)=>
        props.color?(props.color):(props.type==='POSITIVE'?("#03AC00"):("#C70000"))
    };
    
`
const TransactionPa=styled.div`
    display: flex;
    background-color: #FFFFFF;
    justify-content: space-between;
    div{
        display: flex;
        background-color: #FFFFFF;
    }
`

const InputWrapper =styled.input`
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;    
    color: #000000;
    margin-bottom: 13px;
    
`
const ButtonWrapper =styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    margin-bottom:35px;
`
const AddButtonWrapper = styled(ButtonWrapper)`
    width:100%;
    
`;

const AddInputWrapper = styled(Input)`
    width:100%;
`;

const PWrapper=styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
`
const CenterWrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const SideWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color:${(props)=>
        props.color?(props.color):("#8C11BE")
    };

`
const H1Wrapper=styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`

export {Month,Input,Button,P,Center,H1,BigButton,Side,Transaction,TransactionP,AddButton,AddInput}