import { createSlice } from "@reduxjs/toolkit";

interface AboutViewState {
    isVisible: boolean;
}

const initialState: AboutViewState = {
    isVisible: false,
};

export const aboutViewSlice = createSlice({
    name: "aboutView",
    initialState,
    reducers: {
        showAboutView: (state) => {
            state.isVisible = true;
        },
        hideAboutView: (state) => {
            state.isVisible = false;
        },
    },
});

export const { showAboutView, hideAboutView } = aboutViewSlice.actions;

export default aboutViewSlice.reducer;
