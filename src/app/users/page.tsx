"use client";
import useFetch from "@/lib/api/useFetch";
import React from "react";
import { User } from "../types/User";
import UserCard from "../components/UserCard";

const Users = () => {
  const {
    data: users,
    error,
    loading,
  } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 font-medium">Loading posts...</p>
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
    <div>
      {users?.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
};

export default Users;
