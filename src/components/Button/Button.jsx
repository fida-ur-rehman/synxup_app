import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", onClick, children, variant = "primary", className = "", disabled = false }) => {
    // Define styles for different button variants
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    const buttonClass = `${variants[variant]} py-2 px-4 rounded-lg focus:outline-none focus:ring ${disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClass}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "danger", "outline"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
