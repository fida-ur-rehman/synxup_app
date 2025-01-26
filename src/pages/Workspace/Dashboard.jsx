import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import MiniSideBar from "../../components/Sidebar/MiniSideBar";
import SideBar from "../../components/Sidebar/SideBar";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Mini Sidebar */}
            <MiniSideBar />

            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6 ">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">EC Standup</h2>
                        <p className="text-sm text-gray-500">Occurs every week on Monday</p>
                    </div>
                    <nav className="space-x-6">
                        {["Status", "Team", "Tasks", "Export", "Insight", "Settings"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm font-medium text-gray-500 hover:text-gray-800"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Details */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* User Section */}
                    <section className="flex-2 bg-white shadow-lg rounded-lg p-6 h-[80vh] overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-4">You</h3>
                        <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg">
                            <div className="w-10 h-10 bg-indigo-500 text-white font-semibold rounded-full flex items-center justify-center">
                                FK
                            </div>
                            <p className="font-medium text-gray-800">Fida Khan</p>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gray-500 mb-4">You haven't added your status yet.</p>
                            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-600">
                                Add Your Status
                            </button>
                        </div>
                        {/* Received Section */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Received (6)</h3>
                            <ul className="space-y-4">
                                {["Sharjeel", "Hassan", "Ayesha Khan", "Ali Ahmed", "Sara Sheikh", "Zain Malik"].map(
                                    (name, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                                        >
                                            <div className="w-10 h-10 bg-indigo-500 text-white font-semibold rounded-full flex items-center justify-center">
                                                {name.split(" ")[0][0]}
                                                {name.split(" ")[1]?.[0] || ""}
                                            </div>
                                            <p className="font-medium text-gray-800">{name}</p>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        {/* Pending Section */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Pending (6)</h3>
                            <ul className="space-y-4">
                                {["John Doe", "Nida Hassan", "Umer Farooq", "Fatima Ali"].map((name, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                                    >
                                        <div className="w-10 h-10 bg-indigo-500 text-white font-semibold rounded-full flex items-center justify-center">
                                            {name.split(" ")[0][0]}
                                            {name.split(" ")[1]?.[0] || ""}
                                        </div>
                                        <p className="font-medium text-gray-800">{name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Main Section */}
                    <section className="flex-1 bg-white shadow-lg rounded-lg p-6 h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6 bg-indigo-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold">Fida Khan</h3>
                            <h3 className="text-lg font-semibold">Date</h3>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gray-500 mb-4">You haven't added your status yet.</p>
                            <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-600">
                                Add Your Status
                            </button>
                        </div>
                    </section>


                </div>
            </main>
        </div>
    );
};

export default Dashboard;
