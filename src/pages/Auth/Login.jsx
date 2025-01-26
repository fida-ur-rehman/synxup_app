import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Login = () => {
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
                        Welcome back
                    </h2>
                    <form className="mt-6">
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

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* Reusable Button */}
                        <Button
                            type="submit"
                            onClick={handleLogin}
                            variant="primary"
                            className="w-full mt-4"
                        >
                            Log In
                        </Button>
                    </form>

                    {/* Sign Up Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don&apos;t have an account?{" "}
                            <button
                                className="text-sm text-indigo-600 hover:text-indigo-500 font-medium mb-4"
                                onClick={() => navigate("/create-account")}
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
