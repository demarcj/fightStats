import React from "react";
import { NavLink } from "react-router-dom";
import "./nav_style.scss";

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
      <li>
        <a className="nav_list_link" href="https://demarcj.github.io/portfolio/" target="_blank">Portfolio</a>
      </li>
    </ul>
  </nav>
);