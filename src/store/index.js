import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer";
import { postReducer } from "../reducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
