"use client";

import useFetch from "@/lib/api/useFetch";
import { useState } from "react";

import { FiAlertCircle } from "react-icons/fi";

export default function IntentionalErrorDemo() {
  const [trigger, setTrigger] = useState(false);

  const { data, error, loading } = useFetch<Record<string, unknown>>(
    trigger ? "/invalid-endpoint" : ""
  );

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Intentional Error Demo
      </h2>

      <button
        onClick={() => setTrigger(true)}
        className="w-full px-4 py-2 mb-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Trigger Error
      </button>

      {loading && trigger && (
        <p className="text-gray-700 font-medium animate-pulse">Loading...</p>
      )}

      {error && (
        <div className="flex items-center gap-2 bg-red-100 text-red-700 p-3 rounded-md border border-red-200">
          <FiAlertCircle size={20} />
          <span className="font-medium">Error: {error}</span>
        </div>
      )}

      {data && (
        <pre className="mt-4 p-3 bg-gray-100 rounded-md overflow-x-auto text-sm text-gray-800">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
