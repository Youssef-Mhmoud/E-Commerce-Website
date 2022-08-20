import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store  from "./redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <ToastContainer/>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
