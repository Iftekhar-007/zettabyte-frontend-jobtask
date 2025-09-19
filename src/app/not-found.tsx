"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent  px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-blue-600 animate-bounce">
          404
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            🏠 Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
