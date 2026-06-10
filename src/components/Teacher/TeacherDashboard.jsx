import React, { useEffect, useState } from 'react';
import StudentApi from '../../Service/Api/Student/StudentApi';


export default function TeacherDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getUser } = StudentApi;
  const useRole = localStorage.getItem("USER_ROLE");


useEffect(() => {
    if (useRole === "admin") {
      window.location.href = "/Admin/AdminDasboard";
    } else if (useRole === "student") {
      window.location.href = "/Student_Dashboard";
    }
  }, []);

  useEffect(() => {
   const fetchData = async () => {
      try {
        let response;
        if (useRole === "admin") {
          response = await StudentApi.getAdmin();
        } else if (useRole === "teacher") {
          response = await StudentApi.getTeacher();
        } else {
          response = await StudentApi.getUser();
        }
        setStudent(response.data);
      } catch (err) {
        console.error("Erreur:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-10">Chargement...</div>;
  if (!student) return <div className="p-10">Ma-lqina ta data.</div>;
  const renderdashbord = () => {
    if (useRole === "admin") {
      return <p>Admin Dashboard</p>;
    } else if (useRole === "teacher") {
      return <p>Teacher Dashboard</p>;
    } else {
      return <p>Student Dashboard</p>;
    }
  };

  return (
    <div className="p-10 bg-background text-foreground transition-colors">
  <div className="overflow-x-auto shadow-md sm:rounded-lg border border-border">
    <table className="w-full text-sm text-left text-muted-foreground">
      <thead className="text-xs uppercase bg-muted text-muted-foreground">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">NAME</th>
          <th className="px-6 py-3">EMAIL</th>
          <th className="px-6 py-3">DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-card border-b border-border hover:bg-accent/50 transition-colors">
          <td className="px-6 py-4 font-medium text-foreground">{student.id}</td>
          <td className="px-6 py-4 text-foreground">{student.firstname}</td>
          <td className="px-6 py-4 text-foreground">{student.email}</td>
          <td className="px-6 py-4 text-xs text-muted-foreground/70">
            {new Date(student.created_at).toLocaleString()}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 
  
  <p className="mt-6 text-foreground font-medium"> {renderdashbord()}</p>
</div>
  );
}