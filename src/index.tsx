import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import "./i18nextInit";

import { Provider } from 'react-redux'
import { store } from './redux/store'
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback="...">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>,
  rootElement
);

reportWebVitals();