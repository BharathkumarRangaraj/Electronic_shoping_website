import React from "react";
import ReactDOM from "react-dom";
import Apps from "./Apps.js";
import Nav from "./Navv.js";
import Hero from "./Hero.js";
import "./App.css";

ReactDOM.render(
  <div>
    <Nav />
    <Hero />
    <Apps />
  </div>,
  document.getElementById("root")
);
