import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoutes = ({ allowedRoles }) => {
  const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

  if (!storedCredentials || !storedCredentials.Role) {
    return <Navigate to="/register" />;
  }

  const userRole = storedCredentials.Role;
  // console.log("user", userRole, allowedRoles);

  if (allowedRoles.includes(userRole)) {
    // console.log("if", userRole);
    // console.log("allowedRoles", allowedRoles);
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
