import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DataTableColumnsHeader } from "./DataTableColumnsHeader";
import { Alertdiaglog } from "../Alertdiaglog";
import SheetEdite  from "../SheetEdite";

export const AdminParentsColumns = (onDelete,onRefresh) => [
  {
    accessorKey: "firstname",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },

  {
    accessorKey: "lastname",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },

  {
    accessorKey: "gender",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Gender
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue("gender") === "M" ? "Male" : "Female"}</div>
    ),
  },

  {
    accessorKey: "phone_number",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Phone Number
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>+212 {row.getValue("phone_number")}</div>
    ),
  },

  {
    accessorKey: "address",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Address
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },

  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>{row.getValue("email")}</div>
    ),
  },

  {
    accessorKey: "updated_at",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Updated At
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>

    ),
    cell: ({ row }) => {
      const formatted = new Date(
        row.getValue("updated_at")
      ).toLocaleDateString();

      return <div>{formatted}</div>;
    },
  },
    
  {
  id: "actions",
  header: "Actions",
  cell: ({ row}) => {
     const { id, firstname, lastname, email, phone_number, address, gender, blood_type, date_of_birth } = row.original;
   


   

      
      return (
        <>
        <Alertdiaglog  id={id}
        firstname={firstname}
        lastname={lastname}
        onDelete={onDelete}  
        
        />
        <SheetEdite id={id}
        firstname={firstname}
          lastname={lastname}
          email={email}
          phone_number={phone_number}
          address={address}
          gender={gender}
          blood_type={blood_type}
          date_of_birth={date_of_birth}
          onRefresh={onRefresh}
        
        
        />
        </>
        
        
      )
    },

  },
 
]
;