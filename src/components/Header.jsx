import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { HiOutlineMail } from "react-icons/hi";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import signDark from "../assets/sign-dark.png";
import signLight from "../assets/sign-light.png";
import ThemeContext from "../context/ThemeContext";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Header = () => {
    const { darkModeEnabled } = useContext(ThemeContext);

    return (
        <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Mobile menu toggle + Logo */}
                    <div className="flex items-center">
                        {/* Mobile menu button (visible on mobile) */}
                        <Disclosure.Button className="sm:hidden mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </Disclosure.Button>
                        {/* Logo */}
                        <Link to="/">
                            <img
                                alt="Bhanu Handa"
                                src={darkModeEnabled ? signDark : signLight}
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation links (only on sm and above) */}
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    end
                                    className={({ isActive }) =>
                                        classNames(
                                            isActive
                                                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
                                            "rounded-md px-3 py-1.5 text-base tracking-wider"
                                        )
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Right: Get in Touch Icons (always visible) */}
                    <div className="flex items-center space-x-6">
                        <a
                            href="https://github.com/bhanuhanda"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <FiGithub
                                className="text-2xl"
                                style={{
                                    color: darkModeEnabled
                                        ? "F3F4F6"
                                        : "#181717",
                                }}
                            />
                        </a>
                        <a
                            href="https://linkedin.com/in/bhanu-handa-1607"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <FiLinkedin
                                className="text-2xl"
                                style={{ color: "#0077B5" }}
                            />
                        </a>
                        <button
                            type="button"
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none hover:cursor-pointer"
                            data-tally-open="n0aEqP"
                            data-tally-layout="popup"
                            data-tally-width="376"
                            data-tally-overlay="1"
                            data-tally-emoji-text="👋"
                            data-tally-emoji-animation="wave"
                        >
                            <HiOutlineMail
                                className="text-3xl"
                                style={{ color: "#D93025" }}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation panel for nav links */}
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as={NavLink}
                            to={item.href}
                            end
                            className={({ isActive }) =>
                                classNames(
                                    isActive
                                        ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
                                    "block rounded-md px-3 py-2 text-base font-medium"
                                )
                            }
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default Header;
