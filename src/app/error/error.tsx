"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UsersError({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className=" rounded-2xl shadow-lg p-8 max-w-md text-center animate-fade-in">
        <h1 className="text-4xl font-extrabold text-red-600">⚠️ Oops!</h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800">
          Something went wrong
        </h2>
        <p className="mt-3 text-gray-500">{error.message}</p>

        <button
          onClick={() => router.push("/")}
          className="mt-6 inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          🔙 Back to Dashboard
        </button>
      </div>
    </div>
  );
}
