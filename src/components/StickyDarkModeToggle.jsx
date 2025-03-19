import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const StickyDarkModeToggle = () => {
    const { darkModeEnabled, toggleDarkMode } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow focus:outline-none"
        >
            <span className="sr-only">Toggle dark mode</span>
            {darkModeEnabled ? (
                <SunIcon
                    className="h-6 w-6 text-yellow-500"
                    aria-hidden="true"
                />
            ) : (
                <MoonIcon
                    className="h-6 w-6 text-gray-900"
                    aria-hidden="true"
                />
            )}
        </button>
    );
};

export default StickyDarkModeToggle;
