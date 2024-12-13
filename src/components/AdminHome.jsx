import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/settings");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-extrabold text-blue-600 shadow-md p-4 rounded-lg border-2 border-blue-300 bg-white">
          Home Page
        </h1>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Move to Settings Page
        </button>
      </div>
    </div>
  );
}

export default AdminHome;
