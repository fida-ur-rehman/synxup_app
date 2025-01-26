import React from "react";

const MiniSideBar = () => {
    return (
        <aside className="w-full md:w-1/4 lg:w-min bg-white shadow-lg p-4 flex flex-col justify-between h-screen">
                {/* Top Section */}
                <div>
                    <i className="bi bi-list text-primary mb-4" style={{ fontSize: "1rem" }}></i>
                    <ul className="space-y-4">
                        <li>
                            <i className="bi bi-people text-primary" style={{ fontSize: "1rem" }}></i>
                        </li>
                        <li>
                            <i className="bi bi-bar-chart-fill text-primary" style={{ fontSize: "1rem" }}></i>
                        </li>
                        <li>
                            <i className="bi bi-gear-fill text-primary" style={{ fontSize: "1rem" }}></i>
                        </li>
                    </ul>
                </div>

                {/* Bottom Section */}
                <div>
                    <ul className="space-y-4">
                        <li>
                            <i className="bi bi-person-circle text-primary" style={{ fontSize: "1rem" }}></i>
                        </li>
                    </ul>
                </div>
            </aside>
    )};

    export default MiniSideBar;