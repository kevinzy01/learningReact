import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"

// ES6 CLASSES WAY

// export default class AddColorForm extends Component {
//
//   constructor(props) {
//     super(props)
//     this.submit = this.submit.bind(this)
//   }
//
//   submit(e) {
//     const {_title, _color} = this.refs
//     this.props.onNewColor(_title.value, _color.value)
//     _title.value = ""
//     _color.value = "#000000"
//     _title.focus()
//   }
//
//   static propTypes = {
//     onNewColor: PropTypes.func
//   }
//
//   static defaultProps = {
//     onNewColor: f=>f
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <input ref="_title" type="text" placeholder="pick color..." required/>
//         <input ref="_color" type="color" required />
//         <button>ADD</button>
//       </form>
//     );
//   }
// }


// STATELESS FUNCTIONAL COMPONENTS

const AddColorForm = ({onNewColor=f=>f}) => {
  let _title, _color
  const submit = e => {
    e.preventDefault()
    onNewColor(_title.value, _color.value)
    _title.value = ""
    _color.value = "#000000"
    _title.focus()
  }
  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input} type="text" placeholder="color title..." required />
      <input ref={input => _color = input} type="color" required />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm
