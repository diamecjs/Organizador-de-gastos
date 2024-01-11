import axios from "axios";
import { addexpenses, getAllExpensess } from "./expensesSlices";


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