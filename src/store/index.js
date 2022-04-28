import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, postReducer } from "../reducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
