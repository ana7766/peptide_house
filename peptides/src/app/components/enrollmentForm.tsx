"use client";
import React, { useState } from "react";
import { z, ZodError } from "zod";

const EnrollmentFormSchema = z.object({
    firstName: z.string().min(2, { message: "Please enter valid first name" }),
    lastName: z.string().min(2, { message: "Please enter valid last name" }),
    email: z.string().email({ message: "Please enter valid email" }),
  });
  
  const EnrollmentForm: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string>("");
    const [focusedField, setFocusedField] = useState<string>("");
  
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value);
    };
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handleInputFocus = (fieldName: string) => {
      setFocusedField(fieldName);
    };
  
    const handleInputBlur = () => {
      setFocusedField("");
    };
  
    const handleGetStartedClick = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 
  
      try {
        const formData = EnrollmentFormSchema.parse({
          firstName,
          lastName,
          email,
        });
  
        setError("");
 
        console.log("Form data:", formData);
  

        console.log("Form submitted successfully!");
      } catch (err) {
        if (err instanceof ZodError) {

          setError(err.errors[0].message);
          console.error("Validation error:", err.errors[0].message);
        }
      }
    };

  return (
    <form onSubmit={handleGetStartedClick} className="w-full text-black bg-white p-5" id="enrollment-form">
  <div className="text-center mb-5 text-base">
    Enroll now to discover a comprehensive list of peptides for muscle mass. Empower your journey toward optimal health. <span className="font-bold">Join us today!</span>
  </div>
  <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[16px] pt-[16px] sm:flex-col">
    <div className="relative w-full sm:w-full md:w-1/3">
      <input
        type="text"
        required
        placeholder="First Name"
        className="font-darkgray focus:bg-lightblue select-none h-12 w-full rounded-5 border border-gray px-4 py-3 shadow-none outline-none transition-all ease-linear hover:border-gray hover:bg-lightgray focus:border-blue"
        name="first_name"
        value={firstName}
        onFocus={() => handleInputFocus("first_name")}
        onBlur={handleInputBlur}
        onChange={handleFirstNameChange}
      />
      <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center pr-3">
        <span className={`text-blue-500 select-none ${focusedField === "first_name" || firstName ? "opacity-0" : ""}`}>
          <span className="opacity-0">First Name</span>*
        </span>
      </div>
    </div>
    <div className="relative w-full sm:w-full md:w-1/3">
      <input
        type="text"
        required
        placeholder="Last Name"
        className="font-darkgray focus:bg-lightblue select-none h-12 w-full rounded-5 border border-gray px-4 py-3 shadow-none outline-none transition-all ease-linear hover:border-gray hover:bg-lightgray focus:border-blue"
        name="last_name"
        value={lastName}
        onFocus={() => handleInputFocus("last_name")}
        onBlur={handleInputBlur}
        onChange={handleLastNameChange}
      />
      <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center pr-3">
        <span className={`text-blue-500 select-none ${focusedField === "last_name" || lastName ? "opacity-0" : ""}`}>
          <span className="opacity-0">Last Name</span>*
        </span>
      </div>
    </div>
    <div className="relative w-full sm:w-full md:w-1/3">
      <input
        type="email"
        required
        placeholder="Email"
        className="font-darkgray focus:bg-lightblue select-none h-12 w-full rounded-5 border border-gray px-4 py-3 shadow-none outline-none transition-all ease-linear hover:border-gray hover:bg-lightgray focus:border-blue"
        name="email"
        value={email}
        onFocus={() => handleInputFocus("email")}
        onBlur={handleInputBlur}
        onChange={handleEmailChange}
      />
      <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center pr-3">
        <span className={`text-blue-500 select-none ${focusedField === "email" || email ? "opacity-0" : ""}`}>
          <span className="opacity-0">Email</span>*
        </span>
      </div>
    </div>
  </div>
  {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
  <div className="flex justify-center mt-[8px]">
    <button
      className="bg-blue-500 text-white rounded-lg py-3 px-12"
      type="submit"
    >
      Get Started
    </button>
  </div>
  <div className="text-center mt-[8px] text-base">
    After subscribing you will receive a comprehensive list of all peptides available
  </div>
</form>

  );
};

export default EnrollmentForm;
