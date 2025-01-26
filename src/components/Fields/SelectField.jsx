import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    id,
    value = "",
    onChange,
    options = [],
    placeholder = "Select an option",
    label = "",
    variant = "default",
    className = "",
    disabled = false,
}) => {
    // Define styles for different select field variants
    const variants = {
        default: "bg-gray-100 border-gray-300 focus:ring-indigo-300 focus:border-indigo-500",
        primary: "bg-white border-indigo-500 focus:ring-indigo-500 focus:border-indigo-600",
        error: "bg-red-100 border-red-500 focus:ring-red-300 focus:border-red-600",
        success: "bg-green-100 border-green-500 focus:ring-green-300 focus:border-green-600",
    };

    const selectClass = `${variants[variant]} w-full px-4 py-2 text-gray-700 border rounded-lg outline-none focus:ring ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={selectClass}
                disabled={disabled}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

SelectField.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.oneOf(["default", "primary", "error", "success"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default SelectField;
