import { Link } from "react-router-dom";

export default function ComingSoon() {
    return (
        <main className="grid w-full min-h-full place-items-center bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">
                    Stay Tuned
                </p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
                    Coming Soon
                </h1>
                <p className="mt-6 text-lg tracking-wide text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
                    Thanks for your patience. I'm brewing awesome content for
                    this page meanwhile.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Go back home <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
