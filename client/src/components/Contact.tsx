import React, { useState } from "react";

const FreelancerContact: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendClick = () => {
    // Add your logic to handle the email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="my-4 mx-auto bg-[#1A1B21] p-6 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold mb-2">Want to hire me as a freelancer? Let's discuss.</h2>
      <p className="text-sm mb-4">
        Drop your message and let's discuss about your project.
      </p>
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg inline-block mb-4"
      >
        Chat on WhatsApp
      </a>
      <hr className="border-gray-700 my-4" />
      <p className="text-sm mb-2">Drop in your email ID and I will get back to you.</p>
      <div className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="manu@gmail.com"
          value={email}
          onChange={handleEmailChange}
          className="flex-1 bg-[#2A2B33] text-gray-300 placeholder-gray-500 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          onClick={handleSendClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default FreelancerContact;
