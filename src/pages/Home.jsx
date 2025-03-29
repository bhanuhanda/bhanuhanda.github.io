import { Link } from "react-router-dom";
import CodeSnippet from "../components/CodeSnippet";
import bentoSecurity from "../assets/bento-03-security.png";
import bentoPerformance from "../assets/bento-03-performance.png";
import { classNames } from "../utils/helper";
import BackgroundSVG from "./About/BackgroundSVG";

const ButtonWithLinkTag = ({
    btnText = "Button",
    to = "/",
    primary = false,
}) => {
    return (
        <button
            className={classNames(
                primary
                    ? "animate-pulse ring-2 ring-indigo-400 bg-gray-200"
                    : "bg-gray-200",
                " dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md px-5 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            )}
        >
            <Link to={to}>{btnText}</Link>
        </button>
    );
};

const BentoCard = ({ variant = "middle", children }) => {
    // Define variant-specific classes for the overlay, container, and ring.
    const variantStyles = {
        left: {
            overlay:
                "absolute inset-px rounded-lg bg-white dark:bg-gray-800 md:rounded-l-[2rem]",
            container: "bento-grid-card-outer-container",
            ring: "pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/1 dark:ring-white/15 md:rounded-l-[2rem]",
        },
        middle: {
            overlay: "absolute inset-px rounded-lg bg-white dark:bg-gray-800",
            container:
                "bento-grid-card-outer-container rounded-[calc(var(--radius-lg)+1px)] max-md:rounded-t-[calc(2rem+1px)]",
            ring: "pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/1 dark:ring-white/15 max-md:rounded-t-[2rem]",
        },
        right: {
            overlay:
                "absolute inset-px rounded-lg bg-white dark:bg-gray-800 max-md:rounded-b-[2rem] md:rounded-r-[2rem]",
            container:
                "bento-grid-card-outer-container rounded-[calc(var(--radius-lg)+1px)] max-md:rounded-b-[calc(2rem+1px)] md:rounded-r-[calc(2rem+1px)]",
            ring: "pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/1 dark:ring-white/15 max-md:rounded-b-[2rem] md:rounded-r-[2rem]",
        },
    };

    return (
        <div className="relative">
            <div className={variantStyles[variant].overlay}></div>
            <div className={variantStyles[variant].container}>
                <div className="bento-grid-card-inner-container">
                    {children}
                </div>
            </div>
            <div className={variantStyles[variant].ring}></div>
        </div>
    );
};

export default function Home() {
    return (
        <div className=" w-full relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 sm:py-12 lg:overflow-visible lg:px-0">
            <BackgroundSVG />
            <div className="mx-auto max-w-2xl px-6 md:max-w-7xl md:px-8">
                <h2 className="text-center text-2xl tracking-wide text-indigo-600 dark:text-indigo-400">
                    Hi there,
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-light text-balance text-gray-950 dark:text-white sm:text-5xl">
                    I'm a software engineer with 5 years of experience
                </p>
                <div className="mt-10 grid gap-5 sm:mt-16 md:grid-cols-3">
                    {/* Left Bento Card */}
                    <BentoCard variant="left">
                        <p className="bento-grid-card-heading">
                            Knack for perfection
                        </p>
                        <p className="bento-grid-card-subHeading">
                            Discover my passion for technology and learn more
                            about my background.
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
                                primary={true}
                            />
                        </div>
                    </BentoCard>

                    {/* Middle Bento Card */}
                    <BentoCard variant="middle">
                        <p className="bento-grid-card-heading">
                            Performance & Scalability
                        </p>
                        <p className="bento-grid-card-subHeading">
                            Dive into blog posts covering system architecture,
                            design, and innovative tools.
                        </p>
                        <div className="@container flex flex-1 items-center px-4 max-md:py-6 my-8 md:pb-2">
                            <img
                                className="h-[min(152px,40cqw)] object-cover"
                                src={bentoSecurity}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center">
                            <ButtonWithLinkTag btnText="My Blogs" to="/blog" />
                        </div>
                    </BentoCard>

                    {/* Right Bento Card */}
                    <BentoCard variant="right">
                        <p className="bento-grid-card-heading">
                            Work Experience
                        </p>
                        <p className="bento-grid-card-subHeading">
                            Explore my professional experience and projects that
                            demonstrate my skills.
                        </p>
                        <CodeSnippet />
                        <div className="flex justify-center">
                            <ButtonWithLinkTag
                                btnText="Projects"
                                to="/experience"
                            />
                        </div>
                    </BentoCard>
                </div>
            </div>
        </div>
    );
}
