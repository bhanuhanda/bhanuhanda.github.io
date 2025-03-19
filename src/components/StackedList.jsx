import { people } from "../utils/mockData";

export default function StackedList({ list = people }) {
    return (
        <ul
            role="list"
            className="mx-auto md:max-w-3xl px-3 divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800"
        >
            {list.map((person) => (
                <li
                    key={person.email}
                    className="flex justify-between gap-x-6 py-5"
                >
                    <div className="flex min-w-0 gap-x-4">
                        <img
                            alt=""
                            src={person.imageUrl}
                            className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800"
                        />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                {person.name}
                            </p>
                            <p className="mt-1 truncate text-xs/5 text-gray-500 dark:text-gray-400">
                                {person.email}
                            </p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm/6 text-gray-900 dark:text-white">
                            {person.role}
                        </p>
                        {person.lastSeen ? (
                            <p className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">
                                Last seen{" "}
                                <time dateTime={person.lastSeenDateTime}>
                                    {person.lastSeen}
                                </time>
                            </p>
                        ) : (
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="size-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs/5 text-gray-500 dark:text-gray-400">
                                    Online
                                </p>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
