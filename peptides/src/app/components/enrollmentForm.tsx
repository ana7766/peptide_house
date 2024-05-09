"use client";
import React, { useState } from "react";

const EnrollmentForm: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleGetStartedClick = () => {
        // Perform any validation here if needed
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        // You can perform any other action here, such as submitting the form
    };

    return (
        <div className=" text-black bg-white p-5">
            <div className="text-center mb-5 text-base">
                Enroll now to discover a comprehensive list of peptides for muscle
                mass. Empower your journey toward optimal health. <span className="font-bold">Join us today!</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <input
                    type="text"
                    placeholder="First name*"
                    className="border border-gray-300 rounded-lg p-2 mb-4 md:mr-4 input-sizing"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <input
                    type="text"
                    placeholder="Last name*"
                    className="border border-gray-300 rounded-lg p-2 mb-4 md:mr-4 input-sizing"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <input
                    type="email"
                    placeholder="Email*"
                    className="border border-gray-300 rounded-lg p-2 mb-4 md:mr-4 input-sizing"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-blue-500 text-white rounded-lg py-3 px-12"
                    onClick={handleGetStartedClick}
                >
                    Get Started
                </button>
            </div>
            <div className="text-center mt-5 text-base">
                After subscribing you will receive a comprehensive list of all peptides
                available
            </div>
        </div>
    );
};

export default EnrollmentForm;
