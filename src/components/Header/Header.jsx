import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current path is the login page
  const isLoginPage = location.pathname === "/";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div
        className="text-xl font-bold text-gray-800 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Sync<span className="text-indigo-600">x</span>Up
      </div>

      {/* Log In Button (only render if not on the login page) */}
      {!isLoginPage && (
        <button
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
      )}
    </header>
  );
};

export default Header;
