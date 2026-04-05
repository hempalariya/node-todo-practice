import React from "react";

export default function Input({ type, placeholder, name, onChange }) {
  return (
    <input
      className="w-lg border rounded-md px-2 py-1 text-lg"
      type={type}
      placeholder={placeholder}
      required
      name={name}
      onChange={onChange}
    />
  );
}
