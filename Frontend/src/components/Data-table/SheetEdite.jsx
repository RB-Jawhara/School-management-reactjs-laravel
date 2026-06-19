import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,

} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React from "react";
import ParentUpsertForm from "../Forms/ParentUpsertForm.jsx";
const SheetEdite = ({lastname,firstname,id,email,phone_number,address,gender,blood_type,date_of_birth,onRefresh}) => {

  
   
    return(
    <>

  <Sheet>
  <SheetTrigger>
   <Button variant="secondary">Edit</Button>
    </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Update parent {firstname} {lastname}</SheetTitle>
      <ParentUpsertForm values={{id,firstname,lastname,email,phone_number,address,gender,blood_type,date_of_birth}} onRefresh={onRefresh}/>
      <SheetDescription>Make change to your parent here .click save when you re done </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </>
  );
}
export default SheetEdite;