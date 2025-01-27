import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css"; // Styling for the navbar

const Nav = () => {
  return (
    <nav className="navbar bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="navbar-brand">
        <Link to="/" className="text-xl font-bold">
          Event Management
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/profile" className="text-white ml-4">Profile</Link>
        <Link to="/settings" className="text-white ml-4">Settings</Link>
      </div>
    </nav>
  );
};

export default Nav;
