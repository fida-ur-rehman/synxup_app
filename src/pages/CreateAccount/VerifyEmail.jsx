import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const VerifyEmail = () => {
    const navigate = useNavigate();

    // State for countdown
    const [countdown, setCountdown] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        let timer;
        if (isResendDisabled) {
            // Start countdown if the resend button is disabled
            timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev > 1) {
                        return prev - 1;
                    } else {
                        clearInterval(timer);
                        setIsResendDisabled(false); // Enable the button after countdown
                        return 0;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [isResendDisabled]);

    const handleResendCode = () => {
        console.log("Resend code clicked!");
        setIsResendDisabled(true); // Disable the button
        setCountdown(60); // Reset the countdown
    };

    const handleFinish = () => {
        alert("Finish button clicked!");
        console.log("Finish button clicked!");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex min-h-screen items-center justify-center min-h-[calc(100vh-64px)]">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    {/* Back Button */}
                    <button
                        className="text-sm text-indigo-600 hover:text-indigo-500 font-medium mb-4"
                        onClick={() => navigate("/create-account")}
                    >
                        &lt; Back
                    </button>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Verify Email
                    </h2>

                    {/* Instruction */}
                    <p className="mt-2 text-sm text-gray-600 text-center">
                        Please enter the code we sent to{" "}
                        <span className="font-medium text-gray-800">hello.abc@gmail.com</span>
                    </p>

                    {/* OTP Input */}
                    <form className="mt-6">
                        <div className="mb-4">
                            <label
                                htmlFor="otp"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Code
                            </label>
                            <input
                                type="text"
                                id="otp"
                                className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 focus:border-indigo-500 outline-none"
                                placeholder="Enter your code"
                            />
                        </div>

                        {/* Finish Button */}
                        <Button
                            type="submit"
                            onClick={handleFinish}
                            variant="primary"
                            className="w-full mt-4"
                        >
                            Finish
                        </Button>
                    </form>

                    {/* Resend Code */}
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>
                            Didn’t get the code?{" "}
                            <button
                                onClick={handleResendCode}
                                className={`font-medium ${isResendDisabled
                                        ? "text-gray-400 cursor-not-allowed"
                                        : "text-indigo-600 hover:text-indigo-500"
                                    }`}
                                disabled={isResendDisabled}
                            >
                                Resend code
                            </button>{" "}
                            {isResendDisabled && `in ${countdown} seconds`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
