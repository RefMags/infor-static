import React from "react"
import ReactDOM from "react-dom"
import Maincontent from "./components/MainContent"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div>
      <Navbar />
      <Maincontent />
    </div>
  )
}

ReactDOM.render (
  < App />, document.getElementById("root")
)