import { combineReducers, createStore } from "redux";
import foodReducer from "./Reducer/foodReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    foods: foodReducer,
})
export const store = createStore(combinedReducer, composeWithDevTools())