import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainRouter from "./utilities/hooks/auth/MainRouter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/">
        <MainRouter />
      </Router>
      <ToastContainer toastStyle={{ background: "#db5b1b", color: "white" }} />
    </Provider>
  );
};

export default App;
