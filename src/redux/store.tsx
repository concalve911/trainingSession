import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/slice";
import johnUserReducer from "./slices/sliceSecond";

export const store = configureStore({
  reducer: {
    user: userReducer,
    johnUser: johnUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
