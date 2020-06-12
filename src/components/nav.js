import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";
class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav_container">
          <Link className="li" to="/">
            Home
          </Link>
          <Link className="li" to="/locations">
            Locations
          </Link>

          <img className="navLogo" src={require("../assets/Logo.png")} alt="" />
          <Link className="li" to="/photos">
            Photos
          </Link>
          <Link className="li" to="/about">
            About
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
