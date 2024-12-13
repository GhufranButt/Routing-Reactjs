import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedRoutes = ({ allowedRoles }) => {
  const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

  if (!storedCredentials || !storedCredentials.Role) {
    return <Navigate to="/register" />;
  }

  const userRole = storedCredentials.Role;

  if (allowedRoles.includes(userRole)) {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  } else {
    return userRole === "Admin" ? (
      <Navigate to="/adminhome" />
    ) : (
      <Navigate to="/" />
    );
  }
};

export default ProtectedRoutes;
