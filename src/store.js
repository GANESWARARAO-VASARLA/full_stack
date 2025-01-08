import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Calculation from "./Calculation";


const rootReducer = combineReducers({counter:Calculation})
const store = configureStore({reducer:rootReducer})

export default store