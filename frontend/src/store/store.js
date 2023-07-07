import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./reducers/userReducer";

const userStorageInfo = localStorage.getItem("acc")
  ? JSON.parse(localStorage.getItem("acc"))
  : null;

const initalState = {
  user: { userInfo: userStorageInfo },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },

  preloadedState: initalState,
});

export default store;
