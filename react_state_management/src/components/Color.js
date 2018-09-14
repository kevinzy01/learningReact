import React from "react"
import StarRating from "./StarRating"
import PropTypes from "prop-types"

export default class Color extends React.Component {

  static defaultProps = {
    rating: 0
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  render() {
    const { title, color, rating=0, onRemove=f=>f, onRate=f=>f } = this.props

    return (
      <section>
        <h1 style={{color: color}}>{title}</h1>
        <button className="button" onClick={onRemove}>X</button>
        <br/>
        <div className="color" style={{ backgroundColor: color }}></div>
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    )
  }
}
