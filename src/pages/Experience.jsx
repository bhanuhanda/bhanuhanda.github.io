import React from "react";
import ExperienceDetailCard from "../components/ExperienceDetailCard";
import ComingSoon from "../components/ComingSoon";

const Experience = () => {
    const experiences = [
        {
            id: "1",
            imgName: "twig.png",
            title: "Twig Education",
            subTitle:
                "An E-classroom application with NGSS curriculum for US district schools",
            domain: ["E-learning", "LMS"],
            content: {
                impacts: [
                    "Built robust, performant & accessible customer-facing features in a web app with millions of active users for K-5 & Middle school grades",
                    "Optimized react app’s bundle size, implementing lazy loading - achieving <2s page load metrics & rewrote ORM queries resulting in 10x faster page load times.",
                    "Improved load times with smaller resolution image thumbnails fetched from Cloudfront for landing page's list.",
                ],
                learnings: [
                    "Developed Dashboards, Assignment & Grading workflows, Digital Glossary & Resources Hub.",
                ],
                techStack: [
                    "Amazon Opensearch",
                    "CDN",
                    "Feature Flags",
                    "MFEs",
                    "Test-Driven Development",
                ],
            },
        },
    ];
    return (
        <>
            <ComingSoon />
            {/*<div className="bg-gray-200 dark:bg-gray-800 min-h-full w-full">
            <ul
                role="list"
                className="mx-auto max-w-7xl px-3 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
            >
                {experiences.map((item) => (
                    <li key={item.id} className="py-6">
                        <ExperienceDetailCard details={item} />
                    </li>
                ))}
            </ul>
        </div>*/}
        </>
    );
};

export default Experience;
