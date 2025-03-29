import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import BackgroundSVG from "./BackgroundSVG";
import TechLogosGrid from "./TechLogosGrid";

export default function About() {
    return (
        <div className="w-full relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 sm:py-12 lg:overflow-visible lg:px-0">
            <BackgroundSVG />
            <div className="mx-auto lg:px-8 grid grid-cols-1 gap-x-8 lg:mx-0 lg:grid-cols-5 lg:items-start lg:gap-y-8">
                <div className="lg:col-span-3">
                    <p className="text-2xl tracking-wide italic text-indigo-500">
                        An Engineer
                    </p>
                    <h1 className="mt-2 font-normal text-pretty text-gray-900 dark:text-white sm:text-4xl">
                        Bringing Impact by learning & building
                    </h1>
                    <p className="mt-4 text-xl/8 text-gray-500">
                        Experienced in developing scalable, accessible &
                        high-performance web applications across Education,
                        Finance and Supply Chain domains.
                    </p>
                </div>
                <div className="lg:sticky lg:col-start-4 lg:col-span-2 lg:row-span-2 lg:overflow-hidden">
                    <TechLogosGrid />
                </div>
                <div className="lg:col-span-3 lg:mx-auto lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="text-lg/7 text-gray-900 dark:text-gray-50">
                            <p>
                                One of my proud projects is an educational
                                platform that runs in US district schools,
                                enhancing the learning experience for teachers
                                and students in K-5 and middle schools by
                                developing key modules—such as assignments,
                                resources, glossary, and dashboards that
                                supports millions of active user base.
                            </p>
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
                                        I have a received appreciation from
                                        stakeholders for my collaborative ways
                                        of working across Product, Design, and
                                        Architects & devs for brainstorming and
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
                                            Scalable & Maintainable Coding
                                            Practices
                                        </strong>{" "}
                                        I have built robust React applications
                                        capable of handling huge number of
                                        records, multi-step forms, and complex
                                        data tables, as well as creating custom
                                        component libraries.
                                    </span>
                                </li>
                            </ul>
                            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Tech Stack
                            </h2>
                            <ul className="mt-6 ml-6 list-disc">
                                <li>
                                    React, Redux, JavaScript, TypeScript, HTML,
                                    CSS
                                </li>
                                <li>
                                    Accessibility, Jest, RTL, Cypress, Webpack,
                                    Babel
                                </li>
                                <li>
                                    NodeJS, GraphQL, Postgres, Prisma,
                                    ElasticSearch
                                </li>
                                <li>Keycloak, SSO, NPM, Eslint, Docker, Git</li>
                                <li>Data Structures & Algorithms, Agile</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
