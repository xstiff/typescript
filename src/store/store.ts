import { configureStore } from "@reduxjs/toolkit";
import aboutItemReducer from "./reducers/aboutItem.reducer";
import aboutViewReducer from "./reducers/aboutView.reducer";
export const store = configureStore({
    reducer: {
        aboutView: aboutViewReducer,
        aboutItem: aboutItemReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
