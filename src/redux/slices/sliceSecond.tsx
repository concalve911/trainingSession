import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  age: number;
  johnIsAdmin: boolean;
}

const initialState: User = {
  name: "",
  age: 0,
  johnIsAdmin: false,
};

const secondSlice = createSlice({
  name: "johnUser",
  initialState,
  reducers: {
    setJohnIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.johnIsAdmin = action.payload;
    },
  },
});

export const { setJohnIsAdmin } = secondSlice.actions;
export default secondSlice.reducer;
