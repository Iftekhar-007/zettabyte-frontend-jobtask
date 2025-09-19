"use client";
import useFetch from "@/lib/api/useFetch";
import React, { useState } from "react";
import { User } from "../types/User";

import { motion, AnimatePresence } from "framer-motion";

const Users = () => {
  const {
    data: users,
    error,
    loading,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 font-medium">Loading Users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md text-center m-5">
        <strong className="font-bold block mb-2">
          Oops! Something went wrong 😢
        </strong>
        <span>{error}</span>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto mt-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium ">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium ">Email</th>
            <th className="px-6 py-3 text-left text-sm font-medium ">
              Company
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-200">
          {users?.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 hover:text-black">
              <td className="px-6 py-4 text-sm font-medium ">{user.name}</td>
              <td className="px-6 py-4 text-sm ">{user.email}</td>
              <td className="px-6 py-4 text-sm ">{user.company.name}</td>
              <td className="px-6 py-4">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => setSelectedUser(user)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal niye khela hbe */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-11/12 max-w-3xl shadow-lg text-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-2">{selectedUser.name}</h2>
              <p className="">{selectedUser.username}</p>
              <p>
                <span className="font-bold">Email:</span> {selectedUser.email}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {selectedUser.phone}
              </p>
              <p>
                <span className="font-bold">Website:</span>{" "}
                {selectedUser.website}
              </p>
              <p>
                <span className="font-bold">Address:</span>{" "}
                {selectedUser.address.street}, {selectedUser.address.city}
              </p>
              <p>
                {" "}
                <span className="font-bold">Company:</span>{" "}
                {selectedUser.company.name}
              </p>

              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Users;
