import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { WeatherProviderWrapper } from "./context/WeatherContext";
import "./reset.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <WeatherProviderWrapper>
      <App />
    </WeatherProviderWrapper>
  </Router>
);
