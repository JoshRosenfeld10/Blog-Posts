import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import editReducer from "./slices/editSlice";

export const store = configureStore({ 
    reducer: {
        posts: postReducer,
        editPost: editReducer
    } 
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
