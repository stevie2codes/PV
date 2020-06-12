import React, { Component } from "react";
import "../styles/nav.scss";
class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav_container">
          <li>Home</li>
          <li>Locations</li>
          <img className="navLogo" src={require("../assets/Logo.png")} alt="" />
          <li>Photos</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
