import React from "react";
import NavBar from "./components/nav";
import "./App.scss";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
