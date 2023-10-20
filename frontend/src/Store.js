import { combineReducers, createStore } from "redux";
import { reducer } from "./Services/Reducres/reducres";


export const store = createStore(reducer);
