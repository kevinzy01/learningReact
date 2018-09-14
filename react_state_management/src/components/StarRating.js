import React from "react"
// import PropTypes from "prop-types"
import Star from "./Star"



// export default class StarRating extends React.Component {
//
//   displayName: "Star Rating";
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       starsSelected: props.starsSelected || 0
//     }
//     this.change = this.change.bind(this)
//   };
//
//   change(starsSelected) {
//     this.setState({starsSelected})
//   };
//
//   static propTypes: {
//     totalStars: PropTypes.number
//   };
//
//   static defaultProps = {
//     totalStars: 5
//   }
//
//   render() {
//     const { totalStars } = this.props
//     const { starsSelected } = this.state
//     return (
      // <div className="star-rating">
      //   {[...Array(totalStars)].map((n, i) =>
      //     <Star key={i} selected={ i<starsSelected }
      //     onClick={() =>
      //        this.change(i+1)
      //      }
      //     />
      //   )}
      //   <br/>
      //   <p>{starsSelected} of {totalStars} stars </p>
      // </div>
//     )
//   }
// }

const StarRating = ({starsSelected=0, totalStars=5, onRate=f=>f}) =>
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) =>
      <Star key={i} selected={ i<starsSelected } onClick={() => onRate(i+1)} />
    )}
    <br/>
    <p>{starsSelected} of {totalStars} selected </p>
  </div>


export default StarRating
