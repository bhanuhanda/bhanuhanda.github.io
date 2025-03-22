import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const toggleDarkMode = () => {
        setDarkModeEnabled((prev) => !prev);
    };

    useEffect(() => {
        if (darkModeEnabled) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkModeEnabled]);

    return (
        <ThemeContext.Provider value={{ darkModeEnabled, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
