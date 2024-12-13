import React from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/adminhome");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-extrabold text-green-600 shadow-md p-4 rounded-lg border-2 border-green-300 bg-white">
          Settings Page
        </h1>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
        >
          Move to Home Page
        </button>
      </div>
    </div>
  );
}

export default Settings;
