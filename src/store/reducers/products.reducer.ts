import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../App";

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

export const ProductSlice = createSlice({
    name: "productInfo",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
