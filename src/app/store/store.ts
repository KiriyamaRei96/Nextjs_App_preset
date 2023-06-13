import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
const makeStore = () => {
  // 1: Create the middleware
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware];
  const store = configureStore({
    reducer: () => {},
    middleware: middlewares,
  });
  //   @ts-ignore
  store.sagaTask = sagaMiddleware.run();
  return store;
};
export const wrapper = createWrapper(makeStore, {
  debug: false,
});
