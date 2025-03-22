import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.svg";

const NotFoundPage = () => {
    return (
        <main className="grid w-full min-h-full place-items-center bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <img alt="GQL" src={pageNotFound} className="h-100 w-100" />
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    to="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Go back home <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;
