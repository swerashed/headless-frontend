"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import useSendMail from "@/hooks/useSendEmail";
import SubmitButton from "../buttons/SubmitButton";


function ContactUsForm() {
  const { sendMail, loading, message, error, setMessage, setError } = useSendMail();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    inquiry: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquiry: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      await sendMail(formData);
      setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      inquiry: "",
      message: "",
    });
    } catch (err) {
      console.error("Mail send error:", err);
    }
  };

  return (
    <div data-aos="fade-up" className="flex w-full flex-col">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 font-inter md:grid-cols-2 md:gap-5"
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="firstName">First Name <span className="text-[#ED1B24]">*</span></Label>
          <Input
            required
            id="firstName"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="lastName">Last Name <span className="text-[#ED1B24]">*</span></Label>
          <Input
            required
            id="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="phone">Phone <span className="text-[#ED1B24]">*</span></Label>
          <Input
            required
            id="phone"
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email <span className="text-[#ED1B24]">*</span></Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-1 flex flex-col gap-1 md:col-span-2">
          <Label htmlFor="inquiry">Inquiry Type <span className="text-[#ED1B24]">*</span></Label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="barishal">Barishal</SelectItem>
                <SelectItem value="rajshahi">Rajshahi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-1 flex flex-col gap-1 md:col-span-2">
          <Label htmlFor="message">Message <span className="text-[#ED1B24]">*</span></Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <SubmitButton
       
          disabled={loading}
          className={cn(
            "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-blue py-3 text-base font-semibold text-white transition-all duration-300 sm:w-fit md:-mt-1",
            loading ? "opacity-50 cursor-not-allowed" : ""
          )}
        >
          {loading ? "Sending..." : "Submit Now"}
        </SubmitButton>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}

export default ContactUsForm;
