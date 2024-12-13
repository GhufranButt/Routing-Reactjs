import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    EmailAddress: "",
    Password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isLoggedin = localStorage.getItem("isLoggedIn");

  function handleCliclk() {
    navigate("/register");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedCredentials = JSON.parse(localStorage.getItem("credentials"));

    if (!storedCredentials) {
      setErrorMessage("No account found. Please sign up first.");
      return;
    }

    if (storedCredentials.EmailAddress !== credentials.EmailAddress) {
      setErrorMessage("Enter a valid email.");
      return;
    }

    if (storedCredentials.Password !== credentials.Password) {
      setErrorMessage("Password doesn't match.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    setSuccessMessage("Login successful! Redirecting...");

    if (storedCredentials.Role === "Admin") {
      navigate("/dashboared");
    } else if (storedCredentials.Role === "User") {
      navigate("/products");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        {successMessage && (
          <div className="mb-4 p-3 text-center text-green-700 bg-green-100 border border-green-300 rounded-lg">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-3 text-center text-red-700 bg-red-100 border border-red-300 rounded-lg">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="exampleInputEmail1"
              className="block text-gray-600 font-semibold mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={credentials.EmailAddress}
              onChange={(e) =>
                setCredentials({ ...credentials, EmailAddress: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="block text-gray-600 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="exampleInputPassword1"
              placeholder="Enter password"
              value={credentials.Password}
              onChange={(e) =>
                setCredentials({ ...credentials, Password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        <button
          className="w-full mt-4 text-blue-600 hover:text-blue-700 text-center font-medium"
          onClick={handleCliclk}
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
