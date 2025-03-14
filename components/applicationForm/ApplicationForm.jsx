"use client";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import DropZone from "../shared/DropZone";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import useApplyJob from "@/hooks/useApplyJob";
import { toast } from "sonner";

function ApplicationForm({ data }) {
  const { sendMail, loading, message, error, setMessage, setError } =
    useApplyJob();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    file: null,
  });

  const [file, setFile] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection from DropZone
  const handleFileUpload = (file) => {
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

    // Check if all required fields are filled
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.file
    ) {
      setError("All fields, including the file, are required.");
      toast.error("All fields, including the file, are required."); // Show error toast
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("job_title", data?.title || "");
    formDataToSend.append("resume", formData.file); // Match backend key

    try {
      // Call the sendMail function
      await sendMail(formDataToSend);

      // Clear form fields upon success
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        file: null,
      });
      setFile(null);

      // Show success toast using message from useApplyJob
      if (message) {
        toast.success(message); // Use the message from useApplyJob
      } else {
        toast.success("Application successfully sent. Thank you!"); // Fallback message
      }
    } catch (err) {
      setError("Failed to send email. Please try again.");
      console.error("Mail send error:", err);

      // Show error toast using error from useApplyJob
      if (error) {
        toast.error(error); // Use the error message from useApplyJob
      } else {
        toast.error("Something went wrong. Try again!"); // Fallback error message
      }
    }
  };

  return (
    <div data-aos="fade-up" className="flex w-full flex-col">
      <p className="mb-4 border-y border-dark/10 py-3 text-base font-normal leading-[26px] text-dark/80">
        <span className="font-semibold text-dark">Position:</span> {data?.title}
      </p>

      <form
        onSubmit={handleSubmit}
        method="POST"
        encType="multipart/form-data"
        className="grid grid-cols-1 gap-4 font-inter md:grid-cols-2 md:gap-5"
      >
        {/* First Name */}
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="firstName"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            First Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.firstName}
            onChange={handleChange}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="lastName"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Last Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.lastName}
            onChange={handleChange}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="phone"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Phone <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.phone}
            onChange={handleChange}
            id="phone"
            name="phone"
            type="tel"
            pattern="[0-9]*"
            placeholder="Phone"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="email"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Email <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            value={formData.email}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        {/* File Upload */}
        <div className="mt-2 md:col-span-2 md:-mt-1">
          <DropZone
            file={file}
            setFile={setFile}
            onFileSelect={handleFileUpload}
            className="group flex h-[110px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-dark/80 bg-gradient-to-t from-[#36F1B91A]/10 to-[#3484A41A]/10 transition-all duration-300 hover:border-green"
          />
          <p className="mt-2 font-inter text-sm font-normal leading-[22px] text-dark/80">
            Upload file size max 5MB. Accept file (.pdf)
          </p>
        </div>

        {/* Submit Button */}
        <SubmitButton
          type="submit"
          disabled={loading}
          className={cn(
            "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-blue stroke-white py-3 text-base font-semibold text-white transition-all duration-300 sm:w-fit md:-mt-1",
            loading ? "cursor-not-allowed opacity-50" : "",
          )}
        >
          {loading ? "Sending..." : "Submit Now"}
        </SubmitButton>
      </form>
    </div>
  );
}

export default ApplicationForm;
