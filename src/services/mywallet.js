import axios from 'axios' 

const BASE_URL = "http://localhost:5000";

function postSignUp(body){
    const promise=axios.post(`${BASE_URL}/signup`,body);
    console.log('chegou aqui')
    return promise;
}
function postLogin(body){
    const promise=axios.post(`${BASE_URL}/`,body);
    console.log('chegou aqui2')
    return promise;
}

function newTransaction(body){
    const promise=axios.post(`${BASE_URL}/add`,body);
    console.log('chegou aqui3')
    return promise;
}

export {postSignUp,postLogin,newTransaction}