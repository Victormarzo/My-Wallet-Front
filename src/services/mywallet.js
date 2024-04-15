import axios from 'axios'

const BASE_URL = "http://localhost:5001";

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/user/`, body);
    return promise;
}
function postLogin(body) {

    const promise = axios.post(`${BASE_URL}/user/login`, body);
    return promise;
}

function newTransaction(body) {
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/transaction/`, body, config);

    return promise;
}
function editTransaction(body) {
    const config = createHeaders();
    const promise = axios.put(`${BASE_URL}/transaction/`, body, config);
    return promise;
}
function getTransactions() {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/transaction/`, config);
    return promise;

}
function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('mywallet'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };
    return config;
}

function deleteSession() {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/user`, config);
    return promise;

}

function filterByMonth(month) {
    const newMonth = month.replace("/", '-')
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/transaction/${newMonth}`, config);
    return promise;
}

function deleteTransaction(id) {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/transaction/${id}`, config);
    return promise;
}
export { deleteTransaction, editTransaction, postSignUp, postLogin, newTransaction, getTransactions, deleteSession, filterByMonth }