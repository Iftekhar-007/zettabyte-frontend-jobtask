// import { useSession } from 'next-auth/react';
// import React from 'react';

// const UserProfile = () => {
//     const {data:session} = useSession()
//     return (
//         <div>
//             <h2>{session?.user.email}</h2>
//         </div>
//     );
// };

// export default UserProfile;

"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 font-medium">Loading User...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">You are not logged in</h2>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md text-center mt-10">
      {/* Profile Image */}
      {session.user?.image && (
        <div className="flex justify-center mb-4">
          <Image
            src={session.user.image}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full border"
          />
        </div>
      )}

      {/* Name */}
      <h1 className="text-2xl text-black font-bold mb-2">
        {session.user?.name}
      </h1>

      {/* Email */}
      <p className="text-gray-600 mb-6">{session.user?.email}</p>

      {/* Logout Button */}
    </div>
  );
}
