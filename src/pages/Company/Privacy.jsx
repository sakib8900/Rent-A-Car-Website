import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-3">
          We collect personal information that you voluntarily provide to us,
          such as your name, email address, and any other details you submit
          through forms on our website.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-3">
          The information we collect is used to improve our services, respond
          to inquiries, and provide you with relevant updates or promotions.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          3. Data Protection
        </h2>
        <p className="text-gray-600 mb-3">
          We take appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          4. Third-Party Services
        </h2>
        <p className="text-gray-600 mb-3">
          We may use third-party services to analyze website usage and improve
          user experience. These third parties are not allowed to use your data
          for any other purpose.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          5. Your Choices
        </h2>
        <p className="text-gray-600 mb-3">
          You have the right to access, update, or delete your personal
          information. If you have any concerns, you can contact us directly.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-3">
          We may update this Privacy Policy from time to time. Please review it
          periodically for any changes.
        </p>

        <p className="text-gray-600 text-sm text-center mt-6">
          If you have any questions about our Privacy Policy, please{" "}
          <Link to="/aboutUs">
          <span className="font-semibold text-blue-600">contact us</span>.
          </Link> 
        </p>
      </div>
    </div>
  );
};

export default Privacy;
