import React from "react"
import ReactDOM from "react-dom"
import reactLogo from "../images/reactjs-icon.png"

export default function Navbar() {
  return (
    <nav className="nav-main">
      <h1>Testing</h1>
      <img className="nav-logo" src={reactLogo} alt="React Logo" />
      <h3 className="nav-logo_title"> ReactFacts</h3>
      <h4 className="nav-title"> React Course -Project 1</h4>
    </nav>
  )
}