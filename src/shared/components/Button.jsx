import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={
        "text-xl border p-2 w-full cursor-pointer hover:bg-amber-300 duration-200 rounded " +
        className
      }
    >
      {children}
    </button>
  );
};
