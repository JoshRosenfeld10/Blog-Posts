import { createSlice } from "@reduxjs/toolkit"
import PostModel from "../../models/postModel";

export interface editReducerState {
    editing: boolean,
    selectedPost?: PostModel
}
const initialState: editReducerState = {
    editing: false,
}

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        toggleEdit: (state) => {
            state.editing = !state.editing;
        },
        setEditingPost: (state, action) => {
            state.selectedPost = action.payload;
        }
    }
});

export const { toggleEdit, setEditingPost } = editSlice.actions;
export default editSlice.reducer;
