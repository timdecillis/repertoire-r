import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello, Repertoire!</div>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default App;
