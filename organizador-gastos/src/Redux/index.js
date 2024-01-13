import { configureStore } from "@reduxjs/toolkit";
import expensesSlices from "./Expenses/expensesSlices";
import userSlice from "./Register/userSlice";
import savingSlices from "./Saving/savingSlices";

const rootReducer = {
  expenses: expensesSlices,
  user: userSlice,
  saving: savingSlices,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
