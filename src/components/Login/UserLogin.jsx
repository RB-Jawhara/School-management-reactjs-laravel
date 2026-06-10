"use client";

import React, { useState, useContext } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../../Context/UserContext.jsx";
import {
  STUDENT_DASHBOARD_ROUTE,
  ADMIN_DASHBOARD_ROUTE,
  TEACHER_DASHBOARD_ROUTE,
} from "../../assets/router/Index.jsx";
import StudentApi from "../../Service/Api/Student/StudentApi.js";

const formSchema = z.object({
  email: z.string().email("Invalid Email address."),
  password: z.string().min(5, "Password must be at least 5 characters").max(32),
  role: z.string().nonempty("Please select a role"),
});

const CustomInput = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
CustomInput.displayName = "CustomInput";

function UserLogin() {
  // ✅ زيد setRole
  const { setAuthenticated, setToken, setRole } = useContext(UserStateContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "student",
    },
  });

  async function onSubmit(values) {
    setLoginError("");
    localStorage.clear();

    try {
      await StudentApi.getCsrfToken();
      let response;

      if (values.role === "admin") {
        response = await StudentApi.adminLogin(values.email, values.password);
      } else if (values.role === "teacher") {
        response = await StudentApi.teacherLogin(values.email, values.password);
      } else {
        response = await StudentApi.studentLogin(values.email, values.password);
      }

      if (response.status === 200) {
        // ✅ 1. Save Token
        if (response.data.token) {
          setToken(response.data.token);
        }

        // ✅ 2. setRole من context — مشي localStorage مباشرة
        setRole(values.role);

        // ✅ 3. setAuthenticated
        setAuthenticated(true);

        // ✅ 4. Navigate بـ constants صحيحة
        if (values.role === "student") {
          navigate(STUDENT_DASHBOARD_ROUTE, { replace: true });
        } else if (values.role === "admin") {
          navigate(ADMIN_DASHBOARD_ROUTE, { replace: true });
        } else if (values.role === "teacher") {
          navigate(TEACHER_DASHBOARD_ROUTE, { replace: true });
        }
      }
    } catch (err) {
      setLoginError(err.response?.data?.message || "Email aw Password ghalat");
    }
  }

  return (
    <Card className="w-full sm:max-w-md mx-auto mt-10 shadow-lg">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
          Login to School System
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm animate-pulse">
                {loginError}
              </div>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <CustomInput placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Login as:</FormLabel>
                  <select
                    {...field}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <CustomInput
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between pt-4 gap-4">
              <Button
                variant="outline"
                className="flex-1"
                type="button"
                onClick={() => {
                  form.reset();
                  setLoginError("");
                }}
              >
                Reset
              </Button>
              <Button className="flex-1" type="submit">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default UserLogin;