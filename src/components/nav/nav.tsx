import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => (
  <nav className="nav_link">
    <ul className="nav_list">
      <li className="nav_list_item">
        <NavLink className="nav_list_link" to="/fightStats">Home</NavLink>
      </li>
      <li className="nav_list_item">
        <NavLink className="nav_list_link" to="/about">About</NavLink>
      </li>
      <li className="nav_list_item">
        <NavLink className="nav_list_link" to="/help">Help</NavLink>
      </li>
    </ul>
  </nav>
);