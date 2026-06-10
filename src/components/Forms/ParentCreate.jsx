"use client";
// TOAST hiya li katl3 dik prompt fiha message w katb9a tban 3la l-screen 3la wa9t m3yn, hna kanst3mloha bach n3rfo wach l-parent t-create b-najah wla la


import React, { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { STUDENT_DASHBOARD_ROUTE } from "../../assets/router/Index.jsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ParentApi from "../../../src/Service/Api/ParentApi.jsx";

const formSchema = z.object({
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
  date_of_birth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Please select a gender"),
  blood_type: z.string().min(1, "Please select a blood type"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(1, "Phone number is required"),
});

function ParentCreate() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "", lastname: "", date_of_birth: "",
      gender: "", blood_type: "", address: "", email: "", phone_number: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("Data sent:", values);
    await ParentApi.create(values)
      .then(({ status, data }) => {
        if (status === 200 || status === 201) {
          toast.success("Parent created successfully!");
          navigate(STUDENT_DASHBOARD_ROUTE);
        }
      })
      .catch((err) => {
        Object.entries(err.response.data.errors).forEach(([key, value]) => {
          setError((prev) => prev + `${key}: ${value}\n`);
        });
      });
  };

  return (
    <Card className="w-full sm:max-w-md mx-auto mt-10 shadow-lg">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create Parent</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm whitespace-pre-line">
                {error}
              </div>
            )}

            <FormField control={form.control} name="firstname" render={({ field }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" placeholder="Firstname" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="lastname" render={({ field }) => (
              <FormItem>
                <FormLabel>Lastname</FormLabel>
                <FormControl><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" placeholder="Lastname" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="date_of_birth" render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl><input type="date" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="gender" render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="blood_type" render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="address" render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" placeholder="Address" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" placeholder="Email" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="phone_number" render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl><input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm" placeholder="Phone" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <div className="flex justify-between pt-4 gap-4">
              <Button variant="outline" className="flex-1" type="button" onClick={() => { form.reset(); setError(""); }}>
                Reset
              </Button>
              <Button type="submit" className="flex-1">
                Create Parent
              </Button>
            </div>

          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ParentCreate;