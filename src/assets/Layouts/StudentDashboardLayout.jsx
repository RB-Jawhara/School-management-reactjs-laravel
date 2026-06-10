import React, { useEffect, useContext } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../logo.jpg";
import { LOGIN_ROUTE } from "../router/Index.jsx";
import { UserStateContext } from "../../Context/UserContext.jsx";
import StudentDropDown from "../../components/Student/StudentDropDown.jsx";
import Sidebarcontext from "../../components/SideBar/Sidebarcontext.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx";
import ModeToggle from "../../components/Student/ModeToggle";

export const StudentDashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ role جاي مباشرة من context — مشي من user?.role
  const { authenticated, loading, role } = useContext(UserStateContext);

  useEffect(() => {
    if (loading) return;

    if (!authenticated || role !== "student") {
      navigate(LOGIN_ROUTE, { replace: true });
    }
  // ✅ بلا navigate فـ dependency array — هو السبب دال loop
  }, [authenticated, loading, role]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!authenticated || role !== "student") {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        <Sidebarcontext />

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex h-16 items-center border-b bg-white dark:bg-slate-900 dark:border-slate-800 px-6 shadow-sm transition-colors">
            <SidebarTrigger className="mr-4 text-gray-600 dark:text-gray-400" />

            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:block">
                School Management
              </span>
            </div>

            <nav className="ml-auto flex items-center gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <div className="h-6 w-px bg-gray-200 dark:bg-slate-700" />
              <StudentDropDown />
              <ModeToggle />
            </nav>
          </header>

          <main className="flex-1 overflow-y-auto p-8 text-slate-900 dark:text-slate-100">
            <div className="mx-auto max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};