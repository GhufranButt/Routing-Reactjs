import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  // const storedCredentials = JSON.parse(localStorage.getItem("credentials"));
  const storedisLoggedIn = localStorage.getItem("isLoggedIn");

  // console.log("--->", storedCredentials);

  if (!storedisLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default PublicRoutes;
