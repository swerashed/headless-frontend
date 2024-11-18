"use client";

import { useEffect, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  location: z.string(),
  department: z.string(),
});

function JobFilterForm({ data, onSubmit }) {
  const [locations, setLocations] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    if (data) {
      setLocations(["all", ...data.locations]);
      setDepartments(["all", ...data.departments]);
    }
  }, [data]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "all",
      department: "all",
    },
  });

  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-[10px] sm:flex-row xl:flex-row xl:items-center xl:justify-end"
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.handleSubmit(handleSubmit)();
                }}
              >
                <FormControl>
                  <SelectTrigger className="w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus:border focus:border-blue focus:ring-0 sm:w-[292px]">
                    <SelectValue placeholder="All Location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-[5px] bg-white">
                  {locations.map((location) => (
                    <SelectItem
                      className="px-5 py-[10px]"
                      key={location}
                      value={location}
                    >
                      {location.charAt(0).toUpperCase() + location.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.handleSubmit(handleSubmit)();
                }}
              >
                <FormControl>
                  <SelectTrigger className="w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus:border focus:border-blue focus:ring-0 sm:w-[292px]">
                    <SelectValue placeholder="All Department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-[5px] bg-white">
                  {departments.map((department) => (
                    <SelectItem
                      className="px-5 py-[10px]"
                      key={department}
                      value={department}
                    >
                      {department.charAt(0).toUpperCase() + department.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default JobFilterForm;
