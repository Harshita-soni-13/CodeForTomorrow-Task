import { configureStore } from "@reduxjs/toolkit";
import { api } from "./CardApiSlice";
import cardsReducer from "./CardSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;