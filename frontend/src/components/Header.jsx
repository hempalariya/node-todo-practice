import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>Logo</div>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
