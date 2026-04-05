import React from "react";

export default function Button({ type, children }) {
  return (
    <button
      type={`${type || "button"}`}
      className="bg-gray-500 w-lg rounded-md text-white text-lg font-semibold px-2 py-1"
    >
      {children}
    </button>
  );
}
