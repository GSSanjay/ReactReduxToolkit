import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  entities: [],
  loading: false,
};

export const getPosts = createAsyncThunk(
  //action type string
  "posts/getPosts",
  // callback function
  async (thunkAPI) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (data) => data.json()
    );
    return res;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
export const postReducer = postSlice.reducer;
