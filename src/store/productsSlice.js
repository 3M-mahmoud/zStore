import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const url = "https://zstore-api.x10.mx/products/show-prod.php";
    try {
      const res = await axios.get(url)
      return res.data;
    } catch (error) {
        console.log(error);
    //     const message = error.response.data.error;
    //   showAlert(message, "error");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsData: [],
    loading: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsData = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
    });
  },
});

export default productsSlice.reducer;
