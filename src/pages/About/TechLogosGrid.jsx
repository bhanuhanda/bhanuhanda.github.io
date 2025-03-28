import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

import { getImageURL } from "../../utils/helper";

export default function TechLogosGrid() {
    const { darkModeEnabled } = useContext(ThemeContext);

    const logoData = [
        {
            altText: "React",
            name: "react.svg",
        },
        {
            altText: "JS",
            name: "js.svg",
        },
        {
            altText: "HTML",
            name: darkModeEnabled ? "htmlDark.svg" : "htmlLight.svg",
        },
        {
            altText: "CSS",
            name: darkModeEnabled ? "cssDark.svg" : "cssLight.svg",
        },
        {
            altText: "Node",
            name: darkModeEnabled ? "nodeJsDark.svg" : "nodeJsLight.svg",
        },
        {
            altText: "TS",
            name: "ts.svg",
        },
        {
            altText: "PSQL",
            name: "psql.svg",
        },
        {
            altText: "Docker",
            name: "docker.svg",
        },
        {
            altText: "GQL",
            name: "graphql.svg",
        },
    ];

    return (
        <div className="sm:py-4 lg:py-16">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg items-center gap-x-4 gap-y-24 sm:max-w-xl sm:grid-cols-3 sm:gap-x-4">
                    {logoData.map((img) => (
                        <img
                            alt={img.altText}
                            src={getImageURL(`${img.name}`)}
                            className="about-page-tech-logos-grid-svg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
