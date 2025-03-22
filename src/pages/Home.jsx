import { Link } from "react-router-dom";
import CodeSnippet from "../components/CodeSnippet";
import bentoSecurity from "../assets/bento-03-security.png";
import bentoPerformance from "../assets/bento-03-performance.png";

const ButtonWithLinkTag = ({ btnText = "Button", to = "/" }) => {
    return (
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Link to={to}>{btnText}</Link>{" "}
        </button>
    );
};

export default function Home() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 sm:py-20 w-full">
            <div className="mx-auto max-w-2xl px-6 md:max-w-7xl md:px-8">
                <h2 className="text-center text-2xl tracking-wide text-indigo-600 dark:text-indigo-400">
                    Hi there,
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-light text-balance text-gray-950 dark:text-white sm:text-5xl">
                    I'm a software engineer with 5 years of experience
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-3">
                    {/* bento grid left */}
                    <div className="relative">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 md:rounded-l-[2rem]"></div>
                        <div className="bento-grid-card-outer-container">
                            <div className="bento-grid-card-inner-container">
                                <p className="bento-grid-card-heading">
                                    Knack for perfection
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-md:text-center">
                                    Discover my passion for technology and learn
                                    more about my background.
                                </p>
                                <div className="flex flex-1 items-center justify-center my-8 px-8 py-4 max-md:pt-10 max-md:pb-12 sm:px-10 md:pb-2">
                                    <img
                                        className="w-full max-md:max-w-xs"
                                        src={bentoPerformance}
                                        alt=""
                                    />
                                </div>
                                <div className="flex justify-center pt-4">
                                    <ButtonWithLinkTag
                                        btnText="About me"
                                        to="/about"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/1 dark:ring-white/15 md:rounded-l-[2rem]"></div>
                    </div>
                    {/* bento grid middle */}
                    <div className="relative">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800"></div>
                        <div className="bento-grid-card-outer-container rounded-[calc(var(--radius-lg)+1px)] max-md:rounded-t-[calc(2rem+1px)]">
                            <div className="bento-grid-card-inner-container">
                                <p className="bento-grid-card-heading">
                                    Performance & Scalability
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-md:text-center">
                                    Dive into blog posts covering system
                                    architecture, design, and innovative tools.
                                </p>
                                <div className="@container flex flex-1 items-center px-4 max-md:py-6 my-8 md:pb-2">
                                    <img
                                        className="h-[min(152px,40cqw)] object-cover"
                                        src={bentoSecurity}
                                        alt=""
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <ButtonWithLinkTag
                                        btnText="My Blogs"
                                        to="/blog"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/1 dark:ring-white/15 max-md:rounded-t-[2rem]"></div>
                    </div>
                    {/* bento grid right */}
                    <div className="relative">
                        <div className="absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-md:rounded-b-[2rem] md:rounded-r-[2rem]"></div>
                        <div className="bento-grid-card-outer-container rounded-[calc(var(--radius-lg)+1px)] max-md:rounded-b-[calc(2rem+1px)] md:rounded-r-[calc(2rem+1px)]">
                            <div className="bento-grid-card-inner-container">
                                <p className="bento-grid-card-heading">
                                    Work Experience
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-md:text-center">
                                    Explore my professional experience and
                                    projects that demonstrate my skills.
                                </p>
                                <CodeSnippet />
                                <div className="flex justify-center">
                                    <ButtonWithLinkTag
                                        btnText="Projects"
                                        to="/experience"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/1 dark:ring-white/15 max-md:rounded-b-[2rem] md:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
