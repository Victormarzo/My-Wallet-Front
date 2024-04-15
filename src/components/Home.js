import { BigButton, H1, Center, Side, Transaction, TransactionP, Month } from "./Components";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTransaction, filterByMonth, getTransactions, deleteSession } from "../services/mywallet";
import { FaAngleDown, FaArrowRightFromBracket, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import dayjs from "dayjs";

export default function Home() {

    const localName = JSON.parse(localStorage.getItem('mywallet'));
    const name = localName.name;
    const navigate = useNavigate();
    const [transactionList, setTransactionList] = useState([])
    const [result, setResult] = useState([])
    const [months, setMonths] = useState();
    const [filter, setFilter] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false)
    const [isRemoved, setIsRemoved] = useState(false)

    useEffect(() => {
        allTransactions()


    }, [isRemoved]);

    function goToAdd(operation) {
        navigate("/add", { state: operation })
    }

    function allTransactions() {
        getTransactions()
            .then((answer) => {
                setTransactionList(answer.data.transactions);
                setResult(answer.data.total);
                setMonthList(answer.data.transactions)
                setIsFiltered(false)
            })
            .catch((error) => {
                alert(error)
            });
    }
    function goToEdit(value) {
        navigate("/edit", { state: value })
    }

    function setMonthList(monthList) {
        let list = []

        for (let i = 0; i < monthList.length; i++) {
            let month = dayjs(monthList[i].date).format('MM/YY')
            if (!(list.includes(month))) list.push(month)
        }
        setMonths(list)
    }

    function removeTransaction(transaction) {
        if (window.confirm("Apagar transação?")) {
            deleteTransaction(transaction.id)
                .then((answer) => {
                    setIsRemoved(!isRemoved)
                })

        }
    }

    function logOut() {
        deleteSession()
            .then(() => {
                navigate("/")
                localStorage.clear()
            })
            .catch((error) => {
                alert(error)
            });
    }

    function useFilter() {
        setFilter(!filter)
    }
    function setFilterFalse() {
        if (filter) setFilter(false)
    }
    function filterMonth(id) {
        filterByMonth(id)
            .then((answer) => {
                setTransactionList(answer.data.transaction);
                setResult(answer.data.total);
                setFilter(!filter)
                setIsFiltered(!isFiltered)
            })
    }

    let filters;
    if (!filter) {
        filters = <></>
    } else {
        filters =
            <FilterBox>
                {months.map((mon) =>
                    <Month
                        key={mon}
                        onClick={() => filterMonth(mon)}>{mon}</Month>
                )}
            </FilterBox>
    }

    return (
        <>
            {<><Side>
                <H1>Olá, {name}</H1>
                <FaArrowRightFromBracket color="white" size="30px" onClick={logOut} />

            </Side>
                <Center>

                    <Transactions onClick={setFilterFalse}>

                        <Filterdiv>
                            <div>
                                <p>Data</p>
                                {isFiltered ? (<Xp onClick={allTransactions}>x</Xp>) : (<FaAngleDown onClick={useFilter} size="15px" />)}


                                <Space />
                                <p>Descrição</p>
                            </div>

                            <p>Valor</p>

                        </Filterdiv>
                        {filters}
                        {transactionList ? (transactionList.length > 0 ?
                            (<>
                                {transactionList.map((value) =>
                                    <Transaction
                                        onClick={() => goToEdit(value)}
                                        remove={() => removeTransaction(value)}
                                        obj={value}
                                        key={value.id}>
                                    </Transaction>)}

                            </>)
                            :
                            (<CenterP>Não há registros de <br></br>entrada ou saída</CenterP>)) : (<></>)}

                    </Transactions>
                    <Balance>
                        <Side color={'#FFFFFF'}>
                            <h1>SALDO</h1>
                            {transactionList ? (<TransactionP type={result.operation}>{((result.sum / 100).toFixed(2)).toString().replace('.', ',')}</TransactionP>) : (<>a</>)}
                        </Side>
                    </Balance>
                </Center>
                <Side>
                    <BigButton icon={<FaCirclePlus color="white" size="30px" />} onClick={() => { goToAdd("POSITIVE") }}>

                        <p>Nova<br></br>entrada</p>
                    </BigButton>
                    <BigButton icon={<FaCircleMinus color="white" size="30px" />} onClick={() => { goToAdd("NEGATIVE"); }}>

                        <p>Nova<br></br>saída</p>
                    </BigButton>

                </Side></>}

        </>
    )

}

const Xp = styled.p`
    margin-left:4px;
    font-weight: 500;
`
const FilterBox = styled.div`
    width: 60px;
    background-color:#FE4155;
    align-items: center;
    display: flex;
    justify-content: center;
    position:absolute;
    flex-direction:column;
    border-radius:3px;
    
`
const Space = styled.div`
    width: 8px;
`
const Balance = styled.div`
    bottom:10px;
    width: 100%;
    margin-bottom: 24px;
    background: #FFFFFF;
    padding-left:10px;
    padding-right:10px;
    border-radius:3px;
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
const CenterP = styled.p`
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
const Transactions = styled.div`
    width: 100%;
    height: 500px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 24px;
    margin-bottom: 24px;
    padding-top: 15px;
    padding-left:12px;
    padding-right:12px;
    position: relative;
    overflow-y: auto;
`

const Filterdiv = styled.div`
    display: flex;
    background: #FFFFFF;
    justify-content: space-between;
    p{
        background-color: #FFFFFF;
    }
    margin-bottom:10px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    div{
        display: flex;
        align-items: center;
    }
`