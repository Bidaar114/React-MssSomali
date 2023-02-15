import {configureStore} from "@reduxjs/toolkit";
import competitorReducer from "./features/competitors/competitorSlice";
import modalReducer from "./features/modal/modalSlice";




export const store = configureStore({
    reducer:{
modal: modalReducer,
competitor: competitorReducer
    }
});