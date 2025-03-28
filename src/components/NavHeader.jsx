import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import signDark from "../assets/sign-dark.png";
import signLight from "../assets/sign-light.png";
import ThemeContext from "../context/ThemeContext";
import { classNames } from "../utils/helper";

// Navigation items
const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
];

// Centralized style definitions
const styles = {
    nav: {
        active: "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100",
        inactive:
            "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",
        desktop: "rounded-md px-3 py-1.5 text-base tracking-wider",
        mobile: "block rounded-md px-3 py-2 text-base font-medium",
    },
    socialLink:
        "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
};

// Reusable NavItem component
const NavItem = ({ item, mobile }) => {
    const baseClasses = mobile ? styles.nav.mobile : styles.nav.desktop;
    return (
        <NavLink
            key={item.name}
            to={item.href}
            end
            className={({ isActive }) =>
                classNames(
                    isActive ? styles.nav.active : styles.nav.inactive,
                    baseClasses
                )
            }
        >
            {item.name}
        </NavLink>
    );
};

// Reusable SocialIcon component for anchor links
const SocialIcon = ({ href, children, customStyle }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink + (customStyle ? ` ${customStyle}` : "")}
    >
        {children}
    </a>
);

// Contact button with Tally attributes
const ContactButton = () => (
    <button
        type="button"
        className={
            styles.socialLink + " focus:outline-none hover:cursor-pointer"
        }
        data-tally-open="n0aEqP"
        data-tally-layout="popup"
        data-tally-width="376"
        data-tally-overlay="1"
        data-tally-emoji-text="👋"
        data-tally-emoji-animation="wave"
    >
        <HiOutlineMail className="text-3xl" style={{ color: "#D93025" }} />
    </button>
);

// Main Header component
const Header = () => {
    const { darkModeEnabled } = useContext(ThemeContext);

    return (
        <Disclosure as="nav" className="bg-white dark:bg-gray-800 shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: Mobile menu toggle + Logo */}
                    <div className="flex items-center">
                        <Disclosure.Button className="sm:hidden mr-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                className="block h-6 w-6"
                                aria-hidden="true"
                            />
                        </Disclosure.Button>
                        <Link to="/">
                            <img
                                alt="Logo"
                                src={darkModeEnabled ? signDark : signLight}
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Center: Navigation links (visible on sm and above) */}
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <NavItem
                                    key={item.name}
                                    item={item}
                                    mobile={false}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Social icons and contact button */}
                    <div className="flex items-center space-x-6">
                        <SocialIcon href="https://github.com/bhanuhanda">
                            <FiGithub
                                className="text-2xl"
                                style={{
                                    color: darkModeEnabled
                                        ? "#F3F4F6"
                                        : "#181717",
                                }}
                            />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com/in/bhanu-handa-1607">
                            <FiLinkedin
                                className="text-2xl"
                                style={{ color: "#0077B5" }}
                            />
                        </SocialIcon>
                        <ContactButton />
                    </div>
                </div>
            </div>

            {/* Mobile navigation panel */}
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <NavItem key={item.name} item={item} mobile={true} />
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
};

export default Header;
