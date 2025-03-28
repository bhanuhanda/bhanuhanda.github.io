import { getImageURL } from "../utils/helper";

export default function ExperienceDetailCard({ details }) {
    console.log(getImageURL(details.imgName));
    return (
        <div className="bg-white shadow-md dark:bg-gray-900 rounded-xl">
            <div className="mx-auto grid md:grid-cols-5 gap-x-8 gap-y-16 px-4 py-12 lg:min-w-full  lg:px-8">
                {/* Left Column */}
                <div className="col-span-3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {details.title}
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        {details.subTitle}
                    </p>

                    <dl className="pt-6">
                        {Object.entries(details.content).map(
                            ([itemName, itemDetails]) => (
                                <div key={itemName} className="py-6">
                                    <dt className="font-medium w-1/3 text-gray-900 dark:text-white pb-2 border-b-1  border-gray-400 dark:border-gray-600">
                                        {itemName}
                                    </dt>
                                    <dd className="mt-3 text-sm text-gray-600 dark:text-gray-300">
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
                </div>

                {/* Right Column (Images) */}
                <div className="col-span-2 flex flex-col">
                    <div className="flex gap-6 w-full justify-end">
                        {details.domain.map((d) => (
                            <span className="font-medium bg-blue-200 py-2 m-4 px-8 border-1 border-gray-200 shadow-md shadow-gray-200 rounded-full">
                                {d}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <img
                            alt={details.title}
                            src={getImageURL(details.imgName)}
                            className="rounded-3xl bg-gray-100 dark:bg-gray-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
