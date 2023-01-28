import { createSlice } from "@reduxjs/toolkit";

interface tablePagesState {
    current_page: number;
    page_amount: number;
    total_items: number;
}

const initialState: tablePagesState = {
    current_page: 1,
    page_amount: 3,
    total_items: 12,
};

export const tableSlice = createSlice({
    name: "tablePages",
    initialState,
    reducers: {
        nextPage: (state) => {
            console.log("Runnig next page " + state.current_page);
            state.current_page++;
            if (state.current_page > state.page_amount) {
                state.current_page = 1;
            }
        },
        prevPage: (state) => {
            console.log("Runnig prev page");

            if (state.current_page - 1 > 0) {
                state.current_page--;
            } else state.current_page = 3;
        },
        setCurrentPage: (state, action) => {
            state.current_page = action.payload;
        },
        setPageAmout: (state, action) => {
            state.page_amount = action.payload;
        },
        goToFirst: (state) => {
            state.current_page = 1;
        },
    },
});

export const { setCurrentPage, setPageAmout, nextPage, prevPage, goToFirst } =
    tableSlice.actions;

export default tableSlice.reducer;
