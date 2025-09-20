"use client";

import useFetch from "@/lib/api/useFetch";
import { useState } from "react";

export default function IntentionalErrorDemo() {
  const [trigger, setTrigger] = useState(false);

  // Use the hook only when trigger is true
  const { data, error, loading } = useFetch<any>(
    trigger ? "/invalid-endpoint" : ""
  );

  return (
    <div className="p-6 max-w-md mx-auto">
      <button
        onClick={() => setTrigger(true)}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Trigger Error
      </button>

      {loading && trigger && <p className="mt-4 text-gray-700">Loading...</p>}
      {error && <p className="mt-4 text-red-600 font-bold">Error: {error}</p>}
      {data && <pre className="mt-4">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
