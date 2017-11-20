// Code Product Component Here
import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Producer: {this.props.producer}</h2>
        <h3>
          {this.props.hasWatermark
            ? "This product has a watermark."
            : "This product doesn't have a watermark."}
        </h3>
        <h4>Colors: {this.props.color}</h4>
        <h4>Weight: {this.props.weight}</h4>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: PropTypes.oneOf(
    (() => {
      let bounds = [];
      for (let i = 80; i <= 300; i++) {
        bounds.push(i);
      }
      return bounds;
    })()
  ).isRequired
};
export default Product;
