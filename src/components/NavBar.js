import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pictures" activeClassName="active">
            Pictures
          </NavLink>
        </li>
        <li>
          <NavLink to="/rovers" activeClassName="active">
            Rovers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
