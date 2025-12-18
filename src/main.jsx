import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PersonProvider from "./contexts/PerconContexts.jsx";
PersonProvider;
createRoot(document.getElementById("root")).render(
  <PersonProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PersonProvider>
);
