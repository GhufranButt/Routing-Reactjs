import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboared from "./components/Dashboared";
import Navbar from "./components/Navbar";
import Param from "./components/Param";
import User from "./components/User";
import NotFound from "./NotFound";
import Userdetails from "./components/Userdetails";
import Products from "./components/Products";
import Registerusers from "./components/Registerusers";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import AdminHome from "./components/AdminHome";
import Settings from "./components/Settings";
// import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
      <Route element={<PublicRoutes />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* Admin Routes */}
      <Route element={<ProtectedRoutes allowedRoles={["Admin"]} />}>
        <Route path="adminhome" element={<AdminHome />} />
        <Route path="settings" element={<Settings />} />
        <Route path="dashboared" element={<Dashboared />} />
        <Route path="registerUsers" element={<Registerusers />} />
      </Route>

      {/* User Routes */}
      <Route element={<ProtectedRoutes allowedRoles={["User"]} />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="userdetails" element={<Userdetails />} />
      </Route>

      {/* Show Error Route */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
