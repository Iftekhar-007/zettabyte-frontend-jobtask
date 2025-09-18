"use client"
import useFetch from '@/lib/api/useFetch';
import React from 'react';

type Post = {
 userId : number
 id:number 
 title:string 
 body: string
}

const Posts = () => {



    const {data,error,loading} = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts")


     if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 font-medium">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-md text-center m-5">
        <strong className="font-bold block mb-2">Oops! Something went wrong 😢</strong>
        <span>{error}</span>
      </div>
    );
  }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                data?.map((Post)=><div key={Post.id} className='p-5 shadow-2xl bg-gray-800 rounded-2xl'>
                    <h2 className='text-xl font-semibold mb-2'>{Post.title}</h2>
                    <p className='text-sm'>{Post.body}</p>
                </div>)
            }
        </div>
    );
};

export default Posts;