import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:1337/api/";
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const { data } = await axios.get(`${baseUrl}categories?populate=*`);
    return data.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default categorySlice.reducer;
