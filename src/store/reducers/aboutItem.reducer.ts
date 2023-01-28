import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../App";
interface AboutItemState {
    selectedProduct: Product;
}

const InitialProduct: Product = {
    id: 9999,
    name: "",
    color: "",
    year: 9999,
    pantone_value: "",
};

const initialState: AboutItemState = {
    selectedProduct: InitialProduct,
};

export const aboutItemSlice = createSlice({
    name: "aboutItem",
    initialState,
    reducers: {
        changeAboutItem: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});

export const { changeAboutItem } = aboutItemSlice.actions;

export default aboutItemSlice.reducer;
