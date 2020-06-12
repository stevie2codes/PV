import React from "react";
import NavBar from "./components/nav";
import Home from "./pages/home";
import Photos from "./pages/Photos";
import About from "./pages/about";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Locations from "./pages/locations";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <img
          className="vapeGuy"
          src={require("./assets/wild-vibes-1RnPg7tET_s-unsplash.jpg")}
          alt="vape guy"
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
