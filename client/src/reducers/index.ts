import { combineReducers } from "redux";
import posts from "./postSlice";

export interface reducerState {
    posts: typeof posts
}

/* Combine Reducer turns an object whose values are different "slice reducer" 
functions into a single combined reducer function you can pass to Redux 
Toolkit's configureStore (or the legacy createStore method).
The resulting combined reducer calls every slice reducer any time an action is 
dispatched, and gathers their results into a single state object. This enables 
splitting up reducer logic into separate functions, each managing their own 
slice of the state independently. */
export default combineReducers({
    posts,
})
