import React from "react"
import Color from "./Color"

export default class ColorList extends React.Component {
  render() {
    const { colors = [], onRemove=f=>f, onRate=f=>f } = this.props
    return (
      <div className="color-list">
        { (colors.length === 0) ?
          <p>No colors listed. (Add color)</p> :
          colors.map(color =>
            <Color key={color.id}
            {...color}
            onRate={(rating) => onRate(color.id, rating)}
            onRemove={() => onRemove(color.id)}
             />
          )
        }
      </div>
    )
  }
}
