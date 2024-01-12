import axios from "axios";
import { addexpenses, getAllExpensess, getExpensesById, deleteExpenses, changeExpenses } from "./expensesSlices";


export const postExpenses = (value) => (dispatch) => {
    axios
        .post("http://localhost:3001/expenses", value)
        .then((res) => dispatch(addexpenses(res.data.expenses)))
        .catch((e) => console.log(e));
};

export const getExpenses = () => (dispatch) => {
    axios("http://localhost:3001/expenses")
        .then((res) => dispatch(getAllExpensess(res.data.expenses)))
        .catch((e) => console.log(e));
};

export const getExpensesId = (id) => (dispatch) => {
    axios.get(`http://localhost:3001/expenses/${id}`)
        .then((res) => dispatch(getExpensesById(res.data)))
        .catch((e) => console.log(e));
};

export const Delete = (id) => (dispatch) => {
    axios
        .delete(`http://localhost:3001/expenses/${id}`)
        .then((res) => {
            dispatch(deleteExpenses(res));
        })
        .catch((e) => console.log(e));
};

export const updatedExpenses = (expensesData, callback) => (dispatch) => {
    console.log("expensesData", expensesData);
    axios
        .put(`http://localhost:3001/expenses/${expensesData.id}`, expensesData)
        .then((res) => {
            dispatch(changeExpenses(res.data));
            callback();
        })
        .catch((e) => console.log(e));
};
