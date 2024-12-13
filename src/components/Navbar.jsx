import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  const storedCredentials = JSON.parse(localStorage.getItem("credentials"));
  const islogin = localStorage.getItem("isLoggedIn");
  const isLoggedIn = storedCredentials && storedCredentials.Role;
  const userRole = isLoggedIn ? storedCredentials.Role : null;
  // console.log("object", islogin);
  // console.log("9090", userRole);
  // console.log("----->", isLoggedIn);
  const navigate = useNavigate();

  const logout = () => {
    // localStorage.removeItem("credentials");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-center">
          <ul className="flex space-x-6">
            {!islogin ? (
              <>
                {/* <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    About
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            ) : islogin && userRole === "Admin" ? (
              // Admin Navigation
              <>
                <li>
                  <NavLink
                    to="adminhome"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboared"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/registerUsers"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Registered Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Settings
                  </NavLink>
                </li>
              </>
            ) : islogin && userRole === "User" ? (
              // User Navigation
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/userdetails"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    User Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-white text-lg ${
                        isActive ? "text-orange-700" : "text-yellow-400"
                      } hover:text-yellow-400 transition duration-300`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </nav>
      {islogin && (
        <button
          onClick={logout}
          className="absolute top-20 right-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition duration-300"
        >
          Logout
        </button>
      )}
      <Outlet />
    </>
  );
}

export default Navbar;
