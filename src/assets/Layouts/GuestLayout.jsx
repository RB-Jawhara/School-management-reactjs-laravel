import React, { useEffect, useContext } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom"; // ✅ زيد useLocation
import logo from "../logo.jpg";
import {
  STUDENT_DASHBOARD_ROUTE,
  ADMIN_DASHBOARD_ROUTE,
  TEACHER_DASHBOARD_ROUTE,
} from "../router/Index.jsx";
import { UserStateContext } from "../../Context/UserContext.jsx";

export const GuestLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅
  const { authenticated, loading, role } = useContext(UserStateContext);

  useEffect(() => {
    if (loading) return;
    if (!authenticated) return; // ✅ مشي authenticated — ما دير والو

    // ✅ redirect حسب role
    if (role === "student") {
      navigate(STUDENT_DASHBOARD_ROUTE, { replace: true });
    } else if (role === "admin") {
      navigate(ADMIN_DASHBOARD_ROUTE, { replace: true });
    } else if (role === "teacher") {
      navigate(TEACHER_DASHBOARD_ROUTE, { replace: true });
    }
  }, [authenticated, loading, role]); // ✅ حذف navigate من dependency array

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (authenticated) return null; // ✅ ما ترندريش Guest UI

  return (
    <>
      <div className="flex items-center bg-gray-800 text-white p-4 shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <span className="text-xl font-semibold ml-4">
            School Management System
          </span>
        </div>

        <nav className="ml-auto">
          <ul className="flex gap-16 text-xl mr-20">
            <Link to="/" className="hover:text-blue-500 cursor-pointer">
              Home Page
            </Link>
            <Link to="/login" className="hover:text-blue-500 cursor-pointer">
              Login
            </Link>
            <Link to="/register" className="hover:text-blue-500 cursor-pointer">
              Register
            </Link>
            <Link to="/users" className="hover:text-blue-500 cursor-pointer">
              Users
            </Link>
            <button className="ml-5 px-3 py-1 rounded-xl font-semibold bg-gray-400 text-gray-800 cursor-pointer">
              Dark Mode
            </button>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="p-4 text-center border-t">footer</footer>
    </>
  );
};