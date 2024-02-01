import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
const root = createRoot(document.getElementById("root"));

const theStore = store;
const persistor = persistStore(theStore);
root.render(
  <Provider store={theStore}>
    <PersistGate loading={<div>Loading</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
