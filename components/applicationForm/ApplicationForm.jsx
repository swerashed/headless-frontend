"use client";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import DropZone from "../shared/DropZone";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import useApplyJob from "@/hooks/useApplyJob";

function ApplicationForm({ data }) {
  const { sendMail, loading, message, error, setMessage, setError } = useApplyJob();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    file: null, 
  });
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Handle file selection from DropZone
  const handleFileUpload = (file) => {
    console.log("File selected:", file);
    if (file && file instanceof File) {
      setFormData((prev) => ({ ...prev, file }));
    } else {
      console.error("Invalid file selected:", file);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
  
    // Validate fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.file) {
      setError("All fields, including the file, are required.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
  
    // Append the file
    if (formData.file && formData.file instanceof File) {
      console.log("Appending file:", formData.file);
      formDataToSend.append("file", formData.file);
    } else {
      console.error("File is missing or invalid");
      setError("The file is missing or invalid.");
      return;
    }
  
    try {
      // Log the FormData entries for debugging
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      console.log("Sending formDataToSend:", formDataToSend);
      await sendMail(formDataToSend);
    } catch (err) {
      setError("Failed to send email. Please try again.");
      console.error("Mail send error:", err);
    }
  };
  
  
  return (
    <div data-aos="fade-up" className="flex w-full flex-col">
      <p className="mb-4 border-y border-dark/10 py-3 text-base font-normal leading-[26px] text-dark/80">
        <span className="font-semibold text-dark">Position:</span> {data?.title}
      </p>

      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="grid grid-cols-1 gap-4 font-inter md:grid-cols-2 md:gap-5">
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="firstName" className="text-base font-normal capitalize leading-[26px] text-dark">
            First Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.firstName}
            onChange={handleChange}
            required
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="lastName" className="text-base font-normal capitalize leading-[26px] text-dark">
            Last Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.lastName}
            onChange={handleChange}
            required
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="phone" className="text-base font-normal capitalize leading-[26px] text-dark">
            Phone <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.phone}
            onChange={handleChange}
            required
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label htmlFor="email" className="text-base font-normal capitalize leading-[26px] text-dark">
            Email <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.email}
            onChange={handleChange}
            required
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* File Upload */}
        <div className="mt-2 md:col-span-2 md:-mt-1">
          <DropZone onFileSelect={handleFileUpload} className="group flex h-[110px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-dark/80 bg-gradient-to-t from-[#36F1B91A]/10 to-[#3484A41A]/10 transition-all duration-300 hover:border-green" />
          <p className="mt-2 font-inter text-sm font-normal leading-[22px] text-dark/80">
            Upload file size max 5MB. Accept file (.pdf)
          </p>
        </div>

        {/* Submit Button */}
        <SubmitButton
          type="submit"
          disabled={loading}
          className={cn(
            "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-blue py-3 text-base font-semibold text-white transition-all duration-300 sm:w-fit md:-mt-1",
            loading ? "opacity-50 cursor-not-allowed" : ""
          )}
        >
          {loading ? "Sending..." : "Submit Now"}
        </SubmitButton>
      </form>

      {/* Success/Error Messages */}
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}

export default ApplicationForm;
