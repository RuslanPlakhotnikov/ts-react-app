import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user"
import uiReducer from "./reducers/ui"

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
