import { configureStore } from "@reduxjs/toolkit";

import { jikanMoeApi } from "./services/jikanMoeApi";

export const store = configureStore({
  reducer: {
    [jikanMoeApi.reducerPath]: jikanMoeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jikanMoeApi.middleware),
});
