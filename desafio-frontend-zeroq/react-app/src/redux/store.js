import { configureStore } from "@reduxjs/toolkit";

import { desafioFrontEndApi } from "./services/desafioFrontEnd";

export const store = configureStore({
  reducer: {
    [desafioFrontEndApi.reducerPath]: desafioFrontEndApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(desafioFrontEndApi.middleware),
});
