import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

interface UserState {
  name: string;
  age: number;
  isAdmin: boolean;
  user: User | null;
}

const initialState: UserState = {
  name: "",
  age: 0,
  isAdmin: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setUser: (state) => {
      state.user = {
        name: state.name,
        age: state.age,
        isAdmin: state.isAdmin,
      };

      state.name = "";
      state.age = 0;
      state.isAdmin = false;
    },
  },
});

export const { setName, setAge, setIsAdmin, setUser } = userSlice.actions;
export default userSlice.reducer;
