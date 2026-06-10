import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../logo.jpg";

export const Layout = () => {
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
            <Link
              to="/user"
              className="ml-5 px-3 py-1 rounded-xl font-semibold bg-gray-400 text-gray-800 cursor-pointer"
            >
              Dark Mode
            </Link>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </>
  );
};