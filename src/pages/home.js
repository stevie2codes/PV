import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <h1 className="homeStatement">Serving Nashville since 2014</h1>
        <p className="homeBlurb">
          A Family owned business With 2 Convenient locations, Open 7 days a
          week.{" "}
        </p>
        <Link to="/locations">
          <button className="findUsBtn">Locations</button>
        </Link>
      </div>
    );
  }
}

export default Home;
