import React from "react";
import { experiences } from "../utils/constants";
import ExperienceDetailCard from "../components/ExperienceDetailCard";

const Experience = () => {
    return (
        <>
            <div className="bg-gray-200 dark:bg-gray-800 min-h-full w-full pt-8 pb-16">
                <ul
                    role="list"
                    className="mx-auto max-w-7xl px-3 dark:bg-gray-800"
                >
                    {experiences.map((item) => (
                        <li key={item.id} className="pt-8">
                            <ExperienceDetailCard details={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Experience;
