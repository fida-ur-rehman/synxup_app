import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const CreateOrganization = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("Login button clicked!");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content */}

            <div className="flex min-h-screen items-center justify-center min-h-[calc(100vh-64px)]">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Create Organization
                    </h2>
                    <form className="mt-6">
                        {/* Organization Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="organization"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Organization Name
                            </label>
                            <input
                                type="text"
                                id="organization"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Enter your organization"
                            />
                        </div>

                        {/* Designation Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Your Designation
                            </label>
                            <input
                                type="test"
                                id="designation"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Enter your designation"
                            />
                        </div>

                        {/* Plan Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="plan"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Select Plan
                            </label>
                            <select
                                id="dropdown"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                            >
                                <option value="" disabled selected>
                                    Select an option
                                </option>
                                <option value="option1">Plan 1</option>
                                <option value="option2">Plan 2</option>
                                <option value="option3">Plan 3</option>
                            </select>


                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-start">
                            <a
                                href="#"
                                className="text-sm text-indigo-600 hover:text-indigo-500 font-bold"
                            >
                                Check All Plans Details
                            </a>
                        </div>

                        {/* Reusable Button */}
                        <Button
                            type="submit"
                            onClick={handleLogin}
                            variant="primary"
                            className="w-full mt-4"
                        >
                            Create
                        </Button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CreateOrganization;
