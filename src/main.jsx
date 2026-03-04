import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./config.css";
import App from "./App.jsx";
import { HomePage } from "./views/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { ContactPage } from "./views/ContactPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/old" element={<App />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
