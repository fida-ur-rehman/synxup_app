import React, { useState } from "react";

import Button from "../../components/Button/Button";
import InputField from "../../components/Fields/InputField";
import Header from "../../components/Header/Header";
import SelectField from "../../components/Fields/SelectField";



const CreateOrganizationPage = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const options = [
        { value: "plan1", label: "Plan 1" },
        { value: "plan2", label: "Plan 2" },
        { value: "plan3", label: "Plan 3" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-6 py-12">
                <div className="flex flex-wrap gap-8 max-w-6xl w-full">
                    {/* Create Organization Section */}
                    <div className="flex-1 bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Create Organization</h2>
                        <InputField label="Organization Name" placeholder="Enter organization name" />
                        <InputField label="Your Designation" placeholder="Enter your designation" />
                        <SelectField id="plans"
                            label="Select Plan"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                            options={options}
                            variant="primary" />
                        <a
                            href="#"
                            className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Check All Plans Details
                        </a>
                        <Button className="w-full mt-4">Create</Button>
                    </div>

                    {/* Divider with OR Label for large device vertical */}
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="w-px bg-gray-300 h-full"></div>
                        <span className="absolute bg-gray-50 px-4 py-0.5 text-gray-500 text-sm font-medium">
                            OR
                        </span>
                    </div>

                    {/* Divider with OR Label for small device horizontal */}
                    <div className="relative flex items-center md:flex-col justify-center w-full md:w-auto">
                        <div className="h-px w-full bg-gray-300 md:w-px md:h-full"></div>
                        <span className="absolute md:static bg-gray-50 px-4 py-0.5 text-gray-500 text-sm font-medium">
                            OR
                        </span>
                    </div>



                    {/* Join Organization Section */}
                    <div className="flex-1 bg-white shadow-md rounded-lg p-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Join Organization</h2>
                        <InputField label="Code" placeholder="Enter code" />
                        <Button className="w-full mt-4">Join</Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateOrganizationPage;
