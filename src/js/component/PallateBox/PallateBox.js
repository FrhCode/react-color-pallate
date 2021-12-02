import React, { Component } from "react";
import "./PallateBox.scss";
class PallateBox extends Component {
  render() {
    return (
      <div
        className="pallate__box"
        style={{ background: `${this.props.color}` }}
        onClick={this.props.handle}
        data-key={this.props.id}
      ></div>
    );
  }
}

export default PallateBox;
