import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-white shadow-xl rounded-3xl p-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Inventory Management
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Streamline your inventory tracking with our powerful, easy-to-use
          management system. Track products, monitor stock levels, and gain
          valuable insights.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/sign-in"
            // style={{ backgroundColor: "#7c3aed" }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-200"
          >
            Sign In
          </Link>

          <button className="border border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
