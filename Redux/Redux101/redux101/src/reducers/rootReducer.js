// This is the root reducers it is the store manager for all the reducers
// to make a root reducers
//1. Get a method from redux, called combine Reducers
import { combineReducers } from "redux"; 
//2. Get each individual reducers
import frozenReducer from "./frozenReducer";
import meatReducer from "./meatReducer";
//3. Call Combine reducers and hand it an obj
//each key in combinereducers will be a piece of state in the redux store
//each value, will be the value of that piece of state in the redux store
const rootReducer = combineReducers({
    frozen : frozenReducer,
    meat : meatReducer
})

export default rootReducer;