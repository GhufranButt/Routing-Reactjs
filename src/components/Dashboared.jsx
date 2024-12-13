import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboared() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-extrabold text-blue-600 shadow-md p-4 rounded-lg border-2 border-blue-300 bg-white">
        Dashboard
      </h1>
      <Outlet />
    </div>
  );
}

export default Dashboared;