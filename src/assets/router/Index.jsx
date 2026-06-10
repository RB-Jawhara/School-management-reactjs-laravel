import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Login.jsx";
import { Register } from "../Pages/Register.jsx";
import { Users } from "../Pages/Users.jsx";
import Home from "../Pages/Home.jsx";
import { NotFound } from "../Pages/NotFound.jsx";

import { Layout } from "../Layouts/Layout.jsx";
import { GuestLayout } from "../Layouts/GuestLayout.jsx";
import { StudentDashboardLayout } from "../Layouts/StudentDashboardLayout.jsx";
import StudentDashboard from "../../components/Student/StudentDashboard";
import AdminDashboardLayout from "../Layouts/AdminDashboardLayout.jsx";
import AdminDasboard from "../../components/Admin/AdminDasboard.jsx";
import TeacherDashboardLayout from "../Layouts/TeacherDashboardLayout.jsx";
import TeacherDashboard from "../../components/Teacher/TeacherDashboard.jsx";
import ManageParents from "../../components/Admin/ManageParents.jsx";

export const ADMIN_BASE_ROUTE = "/admin";
export const STUDENT_DASHBOARD_ROUTE = "/student/dashboard";
export const ADMIN_DASHBOARD_ROUTE = `${ADMIN_BASE_ROUTE}/dashboard`;
export const ADMIN_MANAGE_USERS_ROUTE = `${ADMIN_BASE_ROUTE}/manage-parents`;
export const TEACHER_DASHBOARD_ROUTE = "/teacher/dashboard";
export const LOGIN_ROUTE = "/login";

const router = createBrowserRouter([

  // ✅ Guest routes
  {
    element: <GuestLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  // ✅ Student routes
  {
    path: "/student",
    element: <StudentDashboardLayout />,
    children: [
      { path: "dashboard", element: <StudentDashboard /> },
    ],
  },

  // ✅ Admin routes — ✅ children واحدة فقط
  {
    path: "/admin",
    element: <AdminDashboardLayout />,
    children: [
      { path: "dashboard", element: <AdminDasboard /> },
      { path: "manage-parents", element: <ManageParents /> }, // Route jdida bach n-managiw l-parents
    ],
  },

  // ✅ Teacher routes
  {
    path: "/teacher",
    element: <TeacherDashboardLayout />,
    children: [
      { path: "dashboard", element: <TeacherDashboard /> },
    ],
  },

  // ✅ Public routes
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "*", element: <NotFound /> },
    ],
  },

]);

export default router;