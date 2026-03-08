import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Styles/global.css";
import "./Utils/translations/translation";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);