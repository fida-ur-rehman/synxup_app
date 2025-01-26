import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import VerifyEmail from "./pages/CreateAccount/VerifyEmail";
import CreateOrganization from "./pages/Organization/CreateOrganization";
import CreateOrganizationPage from "./pages/Organization/CreateOrganizationpage";
import Dashboard from "./pages/Workspace/Dashboard";
import CreateStandup from "./pages/Workspace/CreateStandup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/create-organization" element={<CreateOrganization />} />
        <Route path="/create-organization-page" element={<CreateOrganizationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-standup" element={<CreateStandup />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
