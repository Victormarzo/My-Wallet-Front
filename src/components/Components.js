import styled from "styled-components";

function Input({...otherProps}){
    return(
        <InputWrapper {...otherProps}></InputWrapper>
    )
}
function Button({children}){
    return(
        <ButtonWrapper>{children}</ButtonWrapper>
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
    justify-content: center;
    align-items: center;

`
const H1Wrapper=styled.h1`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`

export {Input,Button,P,Center}