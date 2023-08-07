import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import GlobalStyles from "./globalStyles";
//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { desafioFrontEndApi } from "./redux/services/desafioFrontEnd";

ReactDOM.render(
  <React.StrictMode>
    {/* <ApiProvider api={desafioFrontEndApi}> */}
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
    {/* </ApiProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
