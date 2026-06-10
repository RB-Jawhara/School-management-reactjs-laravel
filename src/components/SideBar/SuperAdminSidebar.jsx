import {
  Sidebar, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar.jsx";
import { LayoutDashboard, User, LogOut, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserStateContext } from "../../Context/UserContext.jsx"
import { ADMIN_MANAGE_USERS_ROUTE } from "../../assets/router/Index.jsx"

function SuperAdminSidebar() {
  const { logout } = useContext(UserStateContext)

  return (
    <Sidebar>
      <SidebarHeader className="p-4 font-bold text-xl border-b">
        🏫 School System
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/dashboard" className="flex items-center gap-3">
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/profile" className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="flex items-center justify-between">
                <SidebarMenuButton asChild>
                  <Link to={ADMIN_MANAGE_USERS_ROUTE} className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span>Manage Parents</span>
                  </Link>
                </SidebarMenuButton>
                <button className="flex items-center gap-1 px-3 py-1 bg-blue-900 text-white rounded-full hover:bg-blue-500 transition-colors text-sm">
                  <Plus className="w-4 h-4" />
                  <span>Create</span>
                </button>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
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

export default SuperAdminSidebar