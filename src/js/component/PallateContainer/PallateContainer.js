import React, { Component } from "react";
import "./PallateContainer.scss";
import PallateBox from "../PallateBox/PallateBox";
import generateRandomColor from "../../Helper/generateRandomColor";
import clickSound from "../../../static/mixkit-arcade-game-jump-coin-216.wav";
class PallateContainer extends Component {
  static defaultProps = {
    count: 6,
  };
  constructor(props) {
    super(props);
    this.state = {
      box: Array.from({ length: this.props.count }),
      color: Array.from({ length: this.props.count }).map((e) =>
        generateRandomColor()
      ),
    };

    this.handeClick = this.handeClick.bind(this);
  }

  handeClick(e) {
    var audio = new Audio(clickSound);
    audio.play();
    const { key } = e.target.dataset;
    const color = this.state.color.map((el, index) => {
      if (index == key) return generateRandomColor();
      return el;
    });

    this.setState((state) => {
      return {
        color: color,
      };
    });
  }

  render() {
    let pallate__box = this.state.box.map((el, index) => {
      return (
        <PallateBox
          color={this.state.color[index]}
          key={index}
          id={index}
          handle={this.handeClick}
        />
      );
    });
    return <div className="pallate">{pallate__box}</div>;
  }
}

export default PallateContainer;
