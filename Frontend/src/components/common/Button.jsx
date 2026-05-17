import React from "react";

const Button = ({
  children,
  primary = true,
  className = "",
}) => {
  return (
    <button
      className={`
        px-6 py-3
        rounded-full
        font-medium
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        ${
          primary
            ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;