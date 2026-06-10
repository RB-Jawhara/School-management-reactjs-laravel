import {
  Sidebar, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar.jsx";
import { LayoutDashboard, User } from "lucide-react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserStateContext } from "../../Context/UserContext.jsx"
import { LogOut } from "lucide-react"

function TeacherSidbar() {
  const { logout } = useContext(UserStateContext)

  return (
    <Sidebar>
      <SidebarHeader className="p-4 font-bold text-xl border-b">
       Teacher
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  {/* ✅ Route s7i7a - bla h kifkif l-fichier */}
                  <Link to="/Teacher/TeacherDashboard" className="flex items-center gap-3">
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard Teacher</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/Teacher/profile" className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span>Profile Super Admin</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        {/* ✅ Logout s7i7 - machi Link */}
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm w-full mb-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
        <p className="text-xs text-gray-500 text-center">© 2026 School System</p>
      </SidebarFooter>
    </Sidebar>
  )
}

export default TeacherSidbar