"use client";
import useFetch from "@/lib/api/useFetch";
import React, { useState } from "react";
import { User } from "../types/User";

const Users = () => {
  const [simulateError, setSimulateError] = useState(false);

  const {
    data: users,
    error,
    loading,
  } = useFetch<User[]>(
    simulateError
      ? "https://jsonplaceholder.typicode.com/invalid-users" // ভুল URL
      : "https://jsonplaceholder.typicode.com/users" // সঠিক URL
  );

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setSimulateError(!simulateError)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          {simulateError ? "Use Valid Endpoint" : "Simulate Error"}
        </button>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="mt-3 text-gray-600 font-medium">Loading users...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md text-center m-5">
          <strong className="font-bold block mb-2">
            Oops! Something went wrong 😢
          </strong>
          <span>{error}</span>
        </div>
      )}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                  Company
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users?.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
