import { getImageURL } from "../utils/helper";

export default function ExperienceDetailCard({ details }) {
    return (
        <div className="bg-white shadow-md dark:bg-gray-900 rounded-xl">
            <div className="mx-auto grid md:grid-cols-5 gap-x-8 gap-y-16 px-4 pt-12 pb-6 lg:min-w-full lg:px-8">
                {/* Left Column */}
                <div className="col-span-3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {details.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        {details.subTitle}
                    </p>

                    <dl className="pt-12">
                        {Object.entries(details.content).map(
                            ([itemName, itemDetails]) => (
                                <div key={itemName} className="pb-8">
                                    <dt className="font-semibold text-sm w-1/3 text-indigo-500 dark:text-indigo-300 pb-1 border-b-1  border-gray-400 dark:border-gray-600">
                                        {itemName.toUpperCase()}
                                    </dt>
                                    <dd className="mt-2 text-md pl-4 text-gray-600 dark:text-gray-300">
                                        <ul className="list-disc">
                                            {itemDetails.map((item, idx) => (
                                                <li key={idx} className="mb-2">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            )
                        )}
                    </dl>

                    <div className="pb-6">
                        <div className="font-semibold text-indigo-500 dark:text-indigo-300 text-sm w-1/3  pb-1 border-b-1  border-gray-400 dark:border-gray-600">
                            {"TECH STACK"}
                        </div>
                        <div className="mt-2 text-md pl-2 text-gray-600 dark:text-gray-300">
                            {details.techStack.join(", ")}
                        </div>
                    </div>
                </div>

                {/* Right Column (Images) */}
                <div className="col-span-2 flex flex-col">
                    <div className="flex gap-6 w-full justify-end">
                        {details.domain.map((d) => (
                            <span className="text-lg font-medium tracking-wider bg-indigo-200 dark:bg-indigo-300 py-2 m-4 mt-1 px-6 border-1 border-gray-300 shadow-sm shadow-gray-300 rounded-md">
                                {d}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-center h-full ">
                        <img
                            alt={details.title}
                            src={getImageURL(details.imgName)}
                            className="rounded-lg w-5/6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
