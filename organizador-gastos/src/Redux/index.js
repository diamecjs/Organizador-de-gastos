import { configureStore } from '@reduxjs/toolkit';
import expensesSlices from './Expenses/expensesSlices'; 

const rootReducer = {
  expenses: expensesSlices,

};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
