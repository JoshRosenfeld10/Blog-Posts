import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

export const store = configureStore({ reducer: {
    posts: postSlice
} });

export type AppDispatch = typeof store.dispatch;
