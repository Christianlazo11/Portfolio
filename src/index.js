import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';
import App from "./App";
import { GlobalProvider } from "./context/GlobalProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
