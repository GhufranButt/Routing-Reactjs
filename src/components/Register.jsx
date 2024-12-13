import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  const isLoggedin = localStorage.getItem("isLoggedIn");

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    Name: "",
    EmailAddress: "",
    Role: "",
    Password: "",
  });
  const [credentials, setCredentials] = useState({
    Name: "",
    EmailAddress: "",
    Role: "",
    Password: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!credentials.Name) {
      formErrors.Name = "Please enter your name.";
    }
    if (!validateEmail(credentials.EmailAddress)) {
      formErrors.EmailAddress = "Please enter a valid email address.";
    }
    if (!credentials.Role) {
      formErrors.Role = "Please select a role.";
    }
    if (!validatePassword(credentials.Password)) {
      formErrors.Password = "Password must be at least 8 characters long.";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    localStorage.setItem("credentials", JSON.stringify(credentials));
    setSuccessMessage("Registration successful! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  // useEffect(() => {
  //   if (isLoggedin) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Signup
        </h2>
        {successMessage && (
          <div className="mb-4 p-3 text-center text-green-700 bg-green-100 border border-green-300 rounded-lg">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nameInput"
              className="block text-gray-600 font-semibold mb-1"
            >
              Name
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.Name ? "border-red-500" : "focus:ring-blue-500"
              }`}
              id="nameInput"
              placeholder="Enter your name"
              value={credentials.Name}
              onChange={(e) =>
                setCredentials({ ...credentials, Name: e.target.value })
              }
            />
            {errors.Name && (
              <div className="mt-2 text-sm text-red-600">{errors.Name}</div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="emailInput"
              className="block text-gray-600 font-semibold mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.EmailAddress ? "border-red-500" : "focus:ring-blue-500"
              }`}
              id="emailInput"
              placeholder="Enter email"
              value={credentials.EmailAddress}
              onChange={(e) =>
                setCredentials({ ...credentials, EmailAddress: e.target.value })
              }
            />
            {errors.EmailAddress && (
              <div className="mt-2 text-sm text-red-600">
                {errors.EmailAddress}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="roleSelect"
              className="block text-gray-600 font-semibold mb-1"
            >
              Role
            </label>
            <select
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.Role ? "border-red-500" : "focus:ring-blue-500"
              }`}
              id="roleSelect"
              value={credentials.Role}
              onChange={(e) =>
                setCredentials({ ...credentials, Role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            {errors.Role && (
              <div className="mt-2 text-sm text-red-600">{errors.Role}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="passwordInput"
              className="block text-gray-600 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.Password ? "border-red-500" : "focus:ring-blue-500"
              }`}
              id="passwordInput"
              placeholder="Enter password"
              value={credentials.Password}
              onChange={(e) =>
                setCredentials({ ...credentials, Password: e.target.value })
              }
            />
            {errors.Password && (
              <div className="mt-2 text-sm text-red-600">{errors.Password}</div>
            )}
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
          onClick={handleClick}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
