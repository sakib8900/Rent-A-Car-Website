import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Contact Me</h1>
        <p className="text-gray-600 mb-6">Feel free to reach out via Email or WhatsApp!</p>

        {/* Email Contact */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href="mailto:md.sakib88900@gmail.com"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
          >
            <FaEnvelope className="text-2xl" /> Our Email
          </a>
        </div>

        {/* WhatsApp Contact */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://wa.me/8801858388900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-600 font-semibold hover:underline"
          >
            <FaWhatsapp className="text-2xl" /> Contact WhatsUp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
