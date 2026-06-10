"use client"
import { useNavigate } from "react-router-dom" // ✅ Zdna import
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, CreditCard, Settings, Users, Mail, LogOut, Github, LifeBuoy, Plus } from "lucide-react"

import React, { useContext } from "react";

// ✅ Khass t-importi hado (check l-paths 3ndk)
import StudentApi from "../../Service/Api/Student/StudentApi" 
import { UserStateContext } from "../../Context/UserContext"
import { LOGIN_ROUTE } from "../../assets/router/Index.jsx"

function StudentDropDown() {
const { user: student } = useContext(UserStateContext);
  const navigate = useNavigate()
  const { logout: contextLogout } = React.useContext(UserStateContext)

  const logout = async () => {
    try {
      // Hna StudentApi() ila kant function, aw StudentApi direct ila kant object
      await StudentApi.logout() 
      contextLogout() // ✅ Zdna l-9was () bach t-executa
      navigate(LOGIN_ROUTE)
    } catch (error) {
      console.error("Logout error:", error)
      // Hta ila fchel l-API, dima khrej l-user
      contextLogout()
      navigate(LOGIN_ROUTE)
    }
  }
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer">{student?.name}</Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-56 z-50 bg-white shadow-md border" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="cursor-pointer">
              <Mail className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-white border shadow-md">
                <DropdownMenuItem className="cursor-pointer">Email</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          
          <DropdownMenuItem className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer">
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600" 
          onSelect={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StudentDropDown