import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import StickyDarkModeToggle from "../components/StickyDarkModeToggle";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 flex">
                <Outlet />
            </div>
            <StickyDarkModeToggle />
        </div>
    );
};

export default Layout;
