import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";
export default function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
