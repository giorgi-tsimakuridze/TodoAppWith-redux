// src/redux/index.js

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
