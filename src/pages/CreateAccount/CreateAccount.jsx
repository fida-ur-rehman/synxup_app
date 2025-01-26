import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const CreateAccount = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/verify-email");
        console.log("Continue button clicked!");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[calc(100vh-64px)] mt-4 mb-4"> {/* Adjust for header height */}
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg px-8">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Create Account
                    </h2>
                    <form className="mt-6">
                        {/* Full Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Continue Button */}
                        <Button
                            type="submit"
                            onClick={handleContinue}
                            variant="primary"
                            className="w-full mt-4"
                        >
                            Continue
                        </Button>
                    </form>

                    {/* Terms and Privacy */}
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>
                            You agree to our{" "}
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Terms of Use
                            </a>{" "}
                            and{" "}
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-500"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>

                    {/* Log In Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <button
                                className="text-sm text-indigo-600 hover:text-indigo-500 font-medium mb-4"
                                onClick={() => navigate("/")}
                            >
                                Log In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
