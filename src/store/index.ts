import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import rootSaga from "./rootSaga";

const makeStore = () => {
  // 1: Create the middleware
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    reducer: reducers,
    middleware: middlewares,
    devTools: process.env.NODE_ENV !== "production",
  });
  //   @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
