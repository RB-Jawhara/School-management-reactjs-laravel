import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../logo.jpg";
import { LOGIN_ROUTE } from "../router/Index.jsx";
import AxiosClient from "../../api/axios";
import { UserStateContext } from "../../Context/UserContext.jsx";
import StudentDropDown from "../../components/Student/StudentDropDown.jsx";
import TeacherSidbar from "../../components/SideBar/TeacherSidbar.jsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.jsx"; 
 
import ModeToggle from "../../components/Student/ModeToggle";

const TeacherDashboardLayout = () => {
  const navigate = useNavigate();
  const context = useContext(UserStateContext);
    console.log("🔴 AdminDashboardLayout rendered");
  console.log("🔑 authenticated:", context.authenticated);

useEffect(() => {
    const role = localStorage.getItem("USER_ROLE");
    if (!context.authenticated || role !== "teacher") {
        navigate(LOGIN_ROUTE);
    }
}, [context.authenticated]);

  return (
    <SidebarProvider>
      {/* 1. Zdna dark:bg-slate-950 bach itbeddel l-background l-kbir */}
      <div className="flex h-screen w-full overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        
        <TeacherSidbar />

        <div className="flex flex-col flex-1 overflow-hidden">
          
          {/* 2. Header: Beddel bg-white b dark:bg-slate-900 w dark:border-slate-800 */}
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
              
              {/* 3. Had l-div l-i khwa hna makanch khassou ikoun (msstou) */}
              <ModeToggle />
            </nav>
          </header>

          {/* 4. Main content: text-black dark:text-white darouri bach l-ktiba tban */}
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
export default TeacherDashboardLayout;