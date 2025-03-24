import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
} from "@heroicons/react/20/solid";
import BackgroundSVG from "./BackgroundSVG";
import TechLogosGrid from "./TechLogosGrid";

export default function About() {
    return (
        <div className="w-full relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <BackgroundSVG />
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
                <TechLogosGrid />
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
