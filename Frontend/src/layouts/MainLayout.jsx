import React from "react";
import Navbar from "../components/common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        relative
        bg-[#fffdf7]
        text-slate-900
        overflow-x-hidden
      "
    >

      {/* GLOBAL BACKGROUND GLOW */}
      <div
        className="
          fixed
          top-[-150px]
          left-[-150px]
          w-[500px]
          h-[500px]
          bg-amber-100
          opacity-20
          blur-3xl
          rounded-full
          -z-10
        "
      />

      <div
        className="
          fixed
          bottom-[-150px]
          right-[-150px]
          w-[500px]
          h-[500px]
          bg-yellow-100
          opacity-20
          blur-3xl
          rounded-full
          -z-10
        "
      />

      {/* Navbar */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0 flex justify-center">
      <main
        className="
          relative
          z-10
          w-full
          max-w-[1600px]
          mx-auto
        "
      >
        {children}
      </main>
      </main>

    </div>
  );
};

export default MainLayout;