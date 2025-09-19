import Link from 'next/link';
import React from 'react';

type postprops = {
    id:number
    title:string 
    body: string
}

const PostCard = ({id,title,body}:postprops) => {
    return (
    <div className="p-5 shadow-2xl mb-4 bg-gray-800 rounded-2xl">
      <h2 className="text-xl font-bold mb-2">{title.substring(0,30)}</h2>
      <p className="">{body.substring(0,130)}...</p>
      <Link href={`/posts/${id}`} className="text-blue-500 mt-2 inline-block">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;