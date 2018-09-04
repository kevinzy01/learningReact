import React from "react"
import { render } from "react-dom"
import Menu from "./components/Menu"
import Data from "./Data"

window.React = React

render(
  <Menu recipes={Data} />,
  document.getElementById("react-container")
)
