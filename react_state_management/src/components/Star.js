import React from "react"
import PropTypes from "prop-types"
import "../App.css"

export default class Star extends React.Component {

  static propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const {selected=false, onClick=f=>f} = this.props
    return (
      <div className={(selected) ? "star selected" : "star"} onClick={onClick}>
      </div>
    )
  }

}
