
// 10/09/18


// CLASS PROPS AND DEFAULT VALUES


import React, { Component } from 'react';
// import logo from './logo.svg';
import PropTypes from "prop-types";
// import './App.css';
//
// export default class Summary extends React.Component {
//   displayName: "Summary";
//   render() {
//     const { title, ingredients, steps} = this.props
//     return (
//       <div className="summary">
//       <h1>{title}</h1>
//       <p>
//       <span>{ingredients} Ingredients</span> | <span> {steps} Steps</span>
//       </p>
//       </div>
//     )
//   }
// }
//
// Summary.propTypes = {
//   title: (props, propName) =>
//   (typeof props[propName] !== "string") ?
//   new Error("A title must be a string") :
//   (props[propName].length > 30) ?
//   new Error("Title can't be over 20 charactersr"):
//   null,
//
//   ingredients: PropTypes.number,
//   steps: PropTypes.number
// }
//
// Summary.defaultProps = {
//   title: "[untitled recipe]",
//   ingredients: 0,// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import PropTypes from "prop-types";
// import './App.css';
//
// export default class Summary extends React.Component {
//   displayName: "Summary";
//   render() {
//     const { title, ingredients, steps} = this.props
//     return (
//       <div className="summary">
//       <h1>{title}</h1>
//       <p>
//       <span>{ingredients} Ingredients</span> | <span> {steps} Steps</span>
//       </p>
//       </div>
//     )
//   }
// }
//
// Summary.propTypes = {
//   title: (props, propName) =>
//   (typeof props[propName] !== "string") ?
//   new Error("A title must be a string") :
//   (props[propName].length > 30) ?
//   new Error("Title can't be over 20 charactersr"):
//   null,
//
//   ingredients: PropTypes.number,
//   steps: PropTypes.number
// }
//
// Summary.defaultProps = {
//   title: "[untitled recipe]",
//   ingredients: 0,
//   steps: 0
// }
//   steps: 0
// }


// CLASSES STATIC PROPERTIES

export default class Summary extends React.Component {

  static propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (prop, propName) =>
      (typeof prop[propName] !== "string") ?
        new Error("Title must be a string") :
        (prop[propName].length > 30) ?
          new Error("Title must be less than 30 characters") :
          null
  }

  static defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[untitled]"
  }

  render() {
    const {ingredients, steps, title} = this.props
     return (
       <div className="summary">
        <h1> { title } </h1>
        <p>
          <span> { ingredients } Ingredients </span> | <span> { steps } Steps </span>
        </p>
      </div>
     )
  }
}
