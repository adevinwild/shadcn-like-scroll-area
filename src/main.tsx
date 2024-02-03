import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const Adevinwild = () => (
  <span className="fixed bottom-2 text-xs left-1/2 -translate-x-1/2 mix-blend-difference underline">
    <a
      href="https://github.com/adevinwild"
      className="text-white mix-blend-difference"
    >
      adevinwild
    </a>
  </span>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Adevinwild />
  </React.StrictMode>
);
