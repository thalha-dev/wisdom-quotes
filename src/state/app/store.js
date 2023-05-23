import { configureStore } from "@reduxjs/toolkit";
import { quotesApi } from "../slice/api/quotesApi";
import favouriteReducer from "../slice/favouriteSlice";

export const store = configureStore({
  reducer: {
    [quotesApi.reducerPath]: quotesApi.reducer,
    favourite: favouriteReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quotesApi.middleware),
});
