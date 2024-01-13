import { createSlice } from "@reduxjs/toolkit";


export const savingSlice = createSlice({
  name: "saving",
  initialState: {
    saving: [],
  },
  reducers: {
    getAllSaving: (state, action) => {
      state.saving = action.payload.savings;
    },
    addsaving: (state, action) => {
      state.saving.push(action.payload);
    },
    getSavingById: (state, action) => {
      state.saving = action.payload;
    },
    deleteSaving: (state, action) => {
      state.saving = state.saving.filter(saving => saving.id !== action.payload);
    },
    changeSaving: (state, action) => {
      const updatedSaving = action.payload;
      for (let i in state.saving) {
        if (state.saving[i].id === updatedSaving.id) {
          state.saving[i] = updatedSaving;
          break;
        }
      }
    }
  }
});

export const {
  addSaving,
  getAllSaving,
  getSavingById,
  changeSaving,
  deleteSaving
} = savingSlice.actions;

export default savingSlice.reducer;