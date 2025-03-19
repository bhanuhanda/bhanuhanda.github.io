import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </StrictMode>
);
