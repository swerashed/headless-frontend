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
  const { sendMail, loading, message, error, setMessage, setError } =
    useSendMail();

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
    <div data-aos="fade-up" className="flex w-full flex-col lg:p-[30px]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 font-inter md:grid-cols-2"
      >
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="firstName"
            className="font-inter text-base font-normal leading-[26px] text-dark"
          >
            First Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="firstName"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label
            htmlFor="lastName"
            className="font-inter text-base font-normal leading-[26px] text-dark"
          >
            Last Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label
            htmlFor="phone"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Phone <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="phone"
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        <div className="flex flex-col gap-1">
          <Label
            htmlFor="email"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Email <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        <div className="col-span-1 flex flex-col gap-1 md:col-span-2">
          <Label
            htmlFor="inquiry"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Inquiry Type <span className="text-[#ED1B24]">*</span>
          </Label>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:ring-0 focus-visible:outline-0">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent className="w-full rounded-[5px] bg-white">
              <SelectGroup>
                <SelectItem
                  className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                  value="dhaka"
                >
                  Dhaka
                </SelectItem>
                <SelectItem
                  className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                  value="barishal"
                >
                  Barishal
                </SelectItem>
                <SelectItem
                  className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                  value="rajshahi"
                >
                  Rajshahi
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-1 flex flex-col gap-1 md:col-span-2">
          <Label
            htmlFor="message"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Message <span className="text-[#ED1B24]">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Type your message here."
            value={formData.message}
            onChange={handleChange}
            className="h-[120px] w-full rounded-[10px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>

        <SubmitButton
          disabled={loading}
          className={cn(
            "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-blue stroke-white py-3 text-base font-semibold text-white transition-all duration-300 sm:w-fit md:-mt-1",
            loading ? "cursor-not-allowed opacity-50" : "",
          )}
        >
          {loading ? "Sending..." : "Submit Now"}
        </SubmitButton>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}

export default ContactUsForm;
