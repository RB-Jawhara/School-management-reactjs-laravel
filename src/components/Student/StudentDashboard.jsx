import React, { useEffect, useState } from 'react';
import StudentApi from '../../Service/Api/Student/StudentApi';
import { useUserContext } from '../../Context/UserContext'; 

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  
  const { role } = useUserContext(); 
  const { getUser } = StudentApi;

  useEffect(() => {
    getUser()
      .then(({ data }) => {
        setStudent(data);
      })
      .catch((err) => {
        console.error("Error fetching student:", err);
        setError("فشل تحميل البيانات. حاول مرة أخرى.");
      })
      .finally(() => {
        setLoading(false);  
           });
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center p-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500 font-medium">{error}</div>
    );
  }

  if (!student) {
    return <div className="p-10 text-muted-foreground">ما لقينا تا data.</div>;
  }

  // ✅ role-based content منظم
  const getRoleBadge = () => {
    const roles = {
      admin:   { label: "Admin Dashboard",   style: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" },
      teacher: { label: "Teacher Dashboard", style: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" },
      student: { label: "Student Dashboard", style: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" },
    };
    const current = roles[role] ?? roles.student;
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${current.style}`}>
        {current.label}
        </span>
    );
  

    
     
      
  

  }

  return (

    <div className="p-10 bg-background text-foreground transition-colors space-y-6">
    
      
      {/* Header */}
     
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          مرحباً، {student.name} 👋
        </h1>
        {getRoleBadge()}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm text-left text-muted-foreground">
          <thead className="text-xs uppercase bg-muted text-muted-foreground">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-card border-b border-border hover:bg-accent/50 transition-colors">
              <td className="px-6 py-4 font-medium text-foreground">{student.id}</td>
              <td className="px-6 py-4 text-foreground">{student.name}</td>
              <td className="px-6 py-4 text-foreground">{student.email}</td>
              <td className="px-6 py-4 text-xs text-muted-foreground/70">
                {new Date(student.created_at).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}