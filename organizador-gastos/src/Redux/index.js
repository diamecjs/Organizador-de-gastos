import { configureStore } from "@reduxjs/toolkit";
import expensesSlices from "./Expenses/expensesSlices";
import userSlice from "./Register/userSlice";

const rootReducer = {
  expenses: expensesSlices,
  user: userSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
