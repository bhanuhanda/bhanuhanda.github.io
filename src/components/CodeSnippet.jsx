import React from "react";

const CodeSnippet = () => {
    return (
        <div className="relative my-4 min-h-[10rem] w-full grow flex justify-center">
            <div className="absolute overflow-hidden rounded-t-2xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            Domains.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                            Learnings.cy
                        </div>
                    </div>
                </div>
                <div className="px-6 pt-6 pb-14 text-amber-50">
                    Explore my projects . . 💻
                </div>
            </div>
        </div>
    );
};

export default CodeSnippet;
