import React from "react";

const SideBar = () => {
    return (
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-lg p-4 h-[100vh] overflow-y-auto">
                <h1 className="text-lg font-semibold text-gray-800 mb-6">SyncxUp</h1>
                <button className="w-full bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 mb-8">
                    Create New Standup
                </button>
                <div>
                    <h2 className="text-sm font-medium text-gray-500 mb-4">Your Standups</h2>
                    <ul className="space-y-4">
                        {["EC Standup", "Amazon Standup", "Courier Service"].map((standup, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50 text-gray-700 hover:bg-indigo-100 cursor-pointer"
                            >
                                <div className="w-8 h-8 bg-indigo-500 text-white font-semibold rounded-full flex items-center justify-center">
                                    {standup.split(" ")[0][0]}
                                    {standup.split(" ")[1]?.[0] || ""}
                                </div>
                                <div>
                                    <p className="font-medium">{standup}</p>
                                    <span className="text-sm text-gray-500">0 out of 3</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
    )};

    export default SideBar;