import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

import reactLogo from "../../assets/tech-svgs/react.svg";
import js from "../../assets/tech-svgs/js.svg";
import htmlLight from "../../assets/tech-svgs/html-light.svg";
import htmlDark from "../../assets/tech-svgs/html-dark.svg";
import cssLight from "../../assets/tech-svgs/css-light.svg";
import cssDark from "../../assets/tech-svgs/css-dark.svg";
import ts from "../../assets/tech-svgs/ts.svg";
import psql from "../../assets/tech-svgs/psql.svg";
import nodeLight from "../../assets/tech-svgs/nodejs-light.svg";
import nodeDark from "../../assets/tech-svgs/nodejs-dark.svg";
import docker from "../../assets/tech-svgs/docker.svg";
import graphql from "../../assets/tech-svgs/graphql.svg";

export default function TechLogosGrid() {
    const { darkModeEnabled } = useContext(ThemeContext);

    return (
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="sm:py-4 lg:py-16">
                <div className="mx-auto max-w-2xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-lg items-center gap-x-4 gap-y-24 sm:max-w-xl sm:grid-cols-3 sm:gap-x-4">
                        <img
                            alt="React"
                            src={reactLogo}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="JS"
                            src={js}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="HTML"
                            src={darkModeEnabled ? htmlDark : htmlLight}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="CSS"
                            src={darkModeEnabled ? cssDark : cssLight}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="Node"
                            src={darkModeEnabled ? nodeDark : nodeLight}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="TS"
                            src={ts}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="PSQL"
                            src={psql}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="DOCKER"
                            src={docker}
                            className="about-page-tech-logos-grid-svg"
                        />
                        <img
                            alt="GQL"
                            src={graphql}
                            className="about-page-tech-logos-grid-svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
