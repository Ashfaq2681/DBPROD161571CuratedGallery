import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Payments from "./payment5";
import Payments2 from "./payment2";
import Payments3 from "./payment3";
import Payments4 from "./payment4";
import Payments5 from "./payment5";
import Content from "./content";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />*/}
    {/* <Payments2 /> */}
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
