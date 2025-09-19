"use client";
import useFetch from "@/lib/api/useFetch";
import { useParams } from "next/navigation";
import React from "react";

type postDetail = {
  userid: number;
  id: number;
  title: string;
  body: string;
};

const PostDetail = () => {
  const { id } = useParams();

  const { data, error, loading } = useFetch<postDetail>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 font-medium">Loading Post...</p>
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
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
};

export default PostDetail;
