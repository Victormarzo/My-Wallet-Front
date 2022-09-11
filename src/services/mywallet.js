import axios from 'axios' 

const BASE_URL = "http://localhost:5000";

function postSignUp(body){
    const promise=axios.post(`${BASE_URL}/signup`,body);
    return promise;
}
function postLogin(body){
    
    const promise=axios.post(`${BASE_URL}/`,body);
     return promise;
}

function newTransaction(body){
    const config=createHeaders();
    const promise=axios.post(`${BASE_URL}/add`,body,config);
    
    return promise;
}

function getTransactions(){
    const config=createHeaders();
    const promise=axios.get(`${BASE_URL}/home`,config);
    return promise;

}
function createHeaders(){
    const auth=JSON.parse(localStorage.getItem('mywallet'));
    const config={
        headers:{
            Authorization:`Bearer ${auth.token}`
    }};
    return config;
}

export {postSignUp,postLogin,newTransaction,getTransactions}