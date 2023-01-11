import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
 // return <div id="#home">Home
  return (
  <div id="home">
  <h1 style={{color: "firebrick"}}>{name} is a Web Developer from {city} </h1>
  </div>)
}

export default Home;
// an <h1> element, with the style attribute set to a color of "firebrick", and the content of "Your Name is a Web Developer from Your City"?
//how to add a h1 element with a style attribute inside a jsx in react?





