import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar(props) {

  let myStyle = {};

  if (props.mode === "light") {
    myStyle = {
      backgroundColor: "#7c11f7",
      color: "white"
    }
  }
  else if (props.mode === "red") {
    myStyle = {
      backgroundColor: "#e00202",
      color: "white"
    }
  }
  else if (props.mode === "green") {
    myStyle = {
      backgroundColor: "#109b09",
      color: "white"
    }
  }
  else if (props.mode === "blue") {
    myStyle = {
      backgroundColor: "#24297f",
      color: "white"
    }
  }
  else if (props.mode === "dark") {

    myStyle = {
      backgroundColor: "black",
      color: "white"
    }
  }

  return (
    <header>
      <nav
        className="flex "
        style={myStyle}
      >
        <ul className="flex space-x-14 ml-56 py-5">
          <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer"><Link to="/about">About</Link></li>
          <li className="cursor-pointer"><a href="/">Services</a></li>
          <li className="cursor-pointer"><a href="/">Contact Us</a></li>
        </ul>
        <div className="flex items-center bg-fuchsia-500 ml-64 px-4">
          <div className="bg-purple-700 text-white h-10 p-1 rounded-lg border-2">Select Theme Mode
          </div>
          <div className="flex items-center justify-center space-x-5 ml-8">
            <button className={`w-7 h-7 bg-red-600 rounded-full border-2 ${props.mode === "red" ? "border-purple-900" : "border-white"}`} onClick={() => {
              props.toggleMode("red");
              console.log("toggle mode changed");
            }}></button>
            <button className={`w-7 h-7 bg-green-600 rounded-full border-2 ${props.mode === "green" ? "border-purple-900" : "border-white"}`} onClick={() => { props.toggleMode("green") }}></button>
            <button className={`w-7 h-7 bg-blue-600 rounded-full border-2 ${props.mode === "blue" ? "border-purple-900" : "border-white"}`} onClick={() => { props.toggleMode("blue") }}></button>
            <button className={`w-7 h-7 bg-black rounded-full ${props.mode === "dark" ? "border-purple-900" : "border-white"} border-2`} onClick={() => { props.toggleMode("black") }}></button>
          </div>
        </div>
      </nav>
    </header >
  );
}
