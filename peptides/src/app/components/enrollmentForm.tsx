"use client";
import React, { useState } from "react";
import { z, ZodError } from "zod";

const EnrollmentFormSchema = z.object({
  firstName: z.string().min(2, { message: "Please enter a valid first name" }),
  lastName: z.string().min(2, { message: "Please enter a valid last name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
});

const EnrollmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await EnrollmentFormSchema.parseAsync(formData);
      setError("");
      console.log("Form data:", formData);
      console.log("Form submitted successfully!");
    } catch (err) {
      if (err instanceof ZodError) {
        const firstError = err.errors[0].message;
        setError(firstError);
        console.error("Validation error:", firstError);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full text-black bg-white p-5" id="enrollment-form">
      <div className="text-center mb-5 text-base">
        Enroll now to discover a comprehensive list of peptides for muscle mass. Empower your journey toward optimal health. <span className="font-bold">Join us today!</span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[16px] pt-[32px] sm:flex-col">
        <div className="relative w-full sm:w-full md:w-1/3">
          <input
            type="text"
            required
            placeholder="First Name"
            className="font-darkgray focus:bg-lightblue select-none h-12 w-full rounded-5 border border-gray px-4 py-3 shadow-none outline-none transition-all ease-linear hover:border-gray hover:bg-lightgray focus:border-blue"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="relative w-full sm:w-full md:w-1/3">
          <input
            type="text"
            required
            placeholder="Last Name"
            className="font-darkgray focus:bg-lightblue select-none h-12 w-full rounded-5 border border-gray px-4 py-3 shadow-none outline-none transition-all ease-linear hover:border-gray hover:bg-lightgray focus:border-blue"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="relative w-full sm:w-full md:w-1/3">
          <input
            type="email"
            required
            placeholder="Email"
            className="font-darkgray focus:bg-lightblue select-none h-12 w-full rounded-5 border border-gray px-4 py-3 shadow-none outline-none transition-all ease-linear hover:border-gray hover:bg-lightgray focus:border-blue"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <div className="flex justify-center mt-5">
        <button
          className="bg-blue-500 text-white rounded-lg py-3 px-12"
          type="submit"
        >
          Get Started
        </button>
      </div>
      <div className="text-center mt-5 text-base">
        After subscribing you will receive a comprehensive list of all peptides available
      </div>
    </form>
  );
};

export default EnrollmentForm;

