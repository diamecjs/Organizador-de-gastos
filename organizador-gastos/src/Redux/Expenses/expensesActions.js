import axios from "axios";
import { addexpenses } from "./expensesSlices";


export const postExpenses = (value) => (dispatch) => {
    axios
        .post("http://localhost:3001/expenses", value)
        .then((res) => dispatch(addexpenses(res.data.expenses)))
        .catch((e) => console.log(e));
};