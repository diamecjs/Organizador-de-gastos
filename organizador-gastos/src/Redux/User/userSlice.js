import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.user = action.payload;
    },
    addusers: (state, action) => {
      state.user.push(action.payload);
    },
    getUserForId: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getAllUsers, addusers, getUserForId } = userSlice.actions;
export default userSlice.reducer;
