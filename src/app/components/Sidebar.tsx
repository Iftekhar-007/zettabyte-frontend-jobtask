"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed p-2 m-2 text-white rounded-md"
      >
        <IoMenu size={40}></IoMenu>
      </button>

      {/* Drawer with animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="fixed top-0 left-0 w-80 h-full bg-gray-900 text-white z-50 p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="mb-6 p-2 rounded-md"
              >
                <MdMenuOpen size={40}></MdMenuOpen>
              </button>

              {/* Drawer Options */}
              <nav className="space-y-2">
                <Link href="/posts" className="block p-2 hover:bg-gray-700 rounded">
                  Posts
                </Link>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Users
                </a>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  News Portals(err)
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
