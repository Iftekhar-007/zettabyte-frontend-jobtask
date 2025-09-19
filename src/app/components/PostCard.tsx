import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

type postprops = {
    id:number
    title:string 
    body: string
    index:number
}

const PostCard = ({id,title,body,index}:postprops) => {
    return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} 
      className=" p-4 rounded-2xl shadow-2xl mb-4 bg-gray-800"
    >
      <h2 className="text-xl font-bold mb-3">{title.substring(0,30)}</h2>
      <p className="line-clamp-3">{body}</p>
      <Link href={`/posts/${id}`} className="text-blue-500 mt-2 inline-block">
        Read More
      </Link>
    </motion.div>
  );
};

export default PostCard;