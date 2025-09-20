// "use client";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function Home() {
//   // Placeholder skills data
//   const data = [
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 98 },
//     { name: "Next.js", level: 75 },
//     { name: "TypeScript", level: 70 },
//     { name: "Express.js", level: 95 },
//     { name: "MongoDB", level: 60 },
//     { name: "Framer Motion", level: 75 },
//   ];

//   return (
//     <div className="">
//       {/* Welcome Section */}
//       <div className="mb-8 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2">
//           Welcome to Dashboard
//         </h2>
//         <p className="text-sm md:text-base">
//           Hi, I’m <span className="font-semibold">Md. Iftekhar Hossain Shawon</span>.I am a dedicated frontend web developer.
//           This is a placeholder dashboard with my skills overview(Randomly).
//         </p>
//       </div>

//       {/* Skills Chart */}
//       <div className="bg-white p-4 rounded-xl shadow-md">
//         <h3 className="text-lg md:text-xl text-black font-semibold mb-4 text-center">
//           Skill Overview
//         </h3>
//         <div className="w-full h-[250px] md:h-[350px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" tick={{ fontSize: 12 }} className="text-black"/>
//               <YAxis tick={{ fontSize: 12 }} />
//               <Tooltip />
//               <Bar dataKey="level" fill="#000000" radius={[8, 8, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaTasks, FaIndustry, FaUserTie } from "react-icons/fa";

export default function Home() {
  // Placeholder skills data
  const data = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 98 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Express.js", level: 95 },
    { name: "MongoDB", level: 60 },
    { name: "Framer Motion", level: 75 },
  ];

  // Card stats
  const stats = [
    {
      icon: <FaTasks size={28} />,
      title: "Total Problems Solved",
      value: 16,
      color: "bg-blue-500",
    },
    {
      icon: <FaIndustry size={28} />,
      title: "Industry Level Projects",
      value: 4,
      color: "bg-green-500",
    },
    {
      icon: <FaUserTie size={28} />,
      title: "Client Projects",
      value: 1,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="px-4 md:px-8 py-6 space-y-10">
      {/* Welcome Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome to Dashboard
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Hi, I’m{" "}
          <span className="font-semibold">Md. Iftekhar Hossain Shawon</span>. I
          am a dedicated frontend web developer. This is a placeholder dashboard
          with my skills overview (Randomly).
        </p>
      </div>

      {/* Skills Chart */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg md:text-xl text-black font-semibold mb-4 text-center">
          Skill Overview
        </h3>
        <div className="w-full h-[250px] md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="level" fill="#000000" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <div
              className={`p-4 rounded-full text-white ${item.color} hover:opacity-80 transition`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
