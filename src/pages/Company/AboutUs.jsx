import React from "react";
import { FaGamepad, FaStar, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          About Game Review Website
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Welcome to <strong>Game Review Website</strong> – the ultimate platform for gamers to
          share their thoughts, post reviews, and explore others' opinions on the latest games!
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <FaGamepad className="text-red-600 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Game Reviews</h3>
            <p className="text-gray-600">Explore and review your favorite games.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md">
            <FaStar className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Ratings & Feedback</h3>
            <p className="text-gray-600">Rate and give feedback on the best and worst games.</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">
            <FaUsers className="text-purple-600 text-4xl mx-auto mb-3" />
            <h3 className="text-lg font-semibold">Community Driven</h3>
            <p className="text-gray-600">Join a community of passionate gamers.</p>
          </div>
        </div>

        {/* Future Plans */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Future Plans 🚀
          </h2>
          <p className="text-gray-700">
            We are continuously improving our platform. In the future, we plan to add{" "}
            <strong>leaderboards, personalized recommendations, and a forum</strong> for deeper discussions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
