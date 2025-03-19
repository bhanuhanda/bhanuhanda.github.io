import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
// tech icons
import htmlLight from "../assets/tech-svgs/html-light.svg";
import htmlDark from "../assets/tech-svgs/html-dark.svg";
import cssLight from "../assets/tech-svgs/css-light.svg";
import cssDark from "../assets/tech-svgs/css-dark.svg";
import js from "../assets/tech-svgs/js.svg";
import ts from "../assets/tech-svgs/ts.svg";
import psql from "../assets/tech-svgs/psql.svg";
import nodeLight from "../assets/tech-svgs/nodejs-light.svg";
import nodeDark from "../assets/tech-svgs/nodejs-dark.svg";
import docker from "../assets/tech-svgs/docker.svg";
import graphql from "../assets/tech-svgs/graphql.svg";
import reactLogo from "../assets/tech-svgs/react.svg";
// import gitlab from "../assets/tech-svgs/gitlab.svg";

export default function About() {
    const { darkModeEnabled } = useContext(ThemeContext);
    return (
        <div className="w-full relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg
                        x="50%"
                        y={-1}
                        className="overflow-visible fill-gray-50 dark:fill-gray-800"
                    >
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                    />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-400">
                                A Developer
                            </p>
                            <h1 className="mt-2 font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-3xl">
                                Bringing Impact by Building Products
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
                                I have worked extensively on developing
                                scalable, high-performance web applications
                                across Ed-Tech, Fin-Tech and Supply Chain
                                domains, implementing performance optimisation
                                features while prioritising accessibility.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <div className="sm:py-4 lg:py-16">
                        <div className="mx-auto max-w-2xl px-6 lg:px-8">
                            <div className="mx-auto mt-10 grid max-w-lg items-center gap-x-4 gap-y-24 sm:max-w-xl sm:grid-cols-3 sm:gap-x-4">
                                <img
                                    alt="React"
                                    src={reactLogo}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="JS"
                                    src={js}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="HTML"
                                    src={darkModeEnabled ? htmlDark : htmlLight}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="CSS"
                                    src={darkModeEnabled ? cssDark : cssLight}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="Node"
                                    src={darkModeEnabled ? nodeDark : nodeLight}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="TS"
                                    src={ts}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />

                                <img
                                    alt="PSQL"
                                    src={psql}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="DOCKER"
                                    src={docker}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                                <img
                                    alt="GQL"
                                    src={graphql}
                                    className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 dark:text-gray-300 lg:max-w-lg">
                            <p>
                                One of my proud projects is a cutting-edge
                                educational platform that runs in US district
                                schools, enhancing the learning experience for
                                teachers and students in K-5 and middle schools
                                by developing key modules—such as assignments,
                                resources, glossaries, and dashboards—that
                                supports millions of active user base of
                                teachers and students.
                            </p>

                            {/* <p className="mt-8">
                                I have a strong track record of collaborating
                                with Product, Design, and Architecture teams to
                                brainstorm and execute innovative solutions.
                            </p> */}
                            <ul
                                role="list"
                                className="mt-8 space-y-8 text-gray-600 dark:text-gray-300"
                            >
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900 dark:text-white">
                                            Data Driven Components
                                        </strong>{" "}
                                        My current project involves developing a
                                        bespoke components library for building
                                        dynamic financial dashboards, further
                                        broadening my expertise in delivering
                                        intuitive, data-driven experiences.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900 dark:text-white">
                                            Collaborative
                                        </strong>{" "}
                                        I have a strong track record of
                                        collaborating with Product, Design, and
                                        Architecture teams to brainstorm and
                                        execute innovative solutions.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon
                                        aria-hidden="true"
                                        className="mt-1 size-5 flex-none text-indigo-600"
                                    />
                                    <span>
                                        <strong className="font-semibold text-gray-900 dark:text-white">
                                            Scalabale & Maintainable Coding
                                            Practices
                                        </strong>{" "}
                                        I have built robust React applications
                                        capable of handling millions of records,
                                        multi-step forms, and complex data
                                        tables, as well as creating custom
                                        component libraries.
                                    </span>
                                </li>
                            </ul>
                            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                No server? No problem.
                            </h2>
                            <p className="mt-6">
                                Id orci tellus laoreet id ac. Dolor, aenean leo,
                                ac etiam consequat in. Convallis arcu ipsum urna
                                nibh. Pharetra, euismod vitae interdum mauris
                                enim, consequat vulputate nibh. Maecenas
                                pellentesque id sed tellus mauris, ultrices
                                mauris. Tincidunt enim cursus ridiculus mi.
                                Pellentesque nam sed nullam sed diam turpis
                                ipsum eu a sed convallis diam.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
