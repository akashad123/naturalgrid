import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/tailwind-base.css";
import "./styles/legacy.css";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const app = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  const ssrRoute = rootElement.getAttribute("data-ssr-route");
  const currentPath = window.location.pathname || "/";
  const matchesPrerenderedRoute =
    Boolean(ssrRoute) &&
    rootElement.hasChildNodes() &&
    (ssrRoute === currentPath ||
      (ssrRoute === "/404" && currentPath === "/404"));

  if (matchesPrerenderedRoute) {
    ReactDOM.hydrateRoot(rootElement, app);
  } else {
    ReactDOM.createRoot(rootElement).render(app);
  }
}
