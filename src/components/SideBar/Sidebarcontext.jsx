import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar.jsx"
import { LayoutDashboard, User, Settings, Home,Plus } from "lucide-react" // Icons zwinin
import { Link } from "react-router-dom"

function Sidebarcontext() {
  return (
    <Sidebar>
      {/* 1. Header: Smiya d l-app */}
      <SidebarHeader className="p-4 font-bold text-xl border-b">
        Admin
      </SidebarHeader>

      {/* 2. Content: Fin kikonu l-Links */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/Student_Dashboard" className="flex items-center gap-3">
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/profile" className="flex items-center gap-3">
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
          
                </SidebarMenuButton>
                  <button className="px-5  bg-blue-900 text-white rounded-full hover:bg-blue-500 transition-colors"> Create Praent
    <Plus className="w-5 h-5" />
  </button>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* 3. Footer: User info aw Logout link */}
      <SidebarFooter className="p-4 border-t">
        <p className="text-xs text-gray-500 text-center">© 2026 School System</p>
      </SidebarFooter>
    </Sidebar>
  )
}

export default Sidebarcontext