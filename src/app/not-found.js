"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      
      {/* Big 404 */}
      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-4">
        Oops! Page not found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
}