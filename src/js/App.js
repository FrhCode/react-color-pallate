import React from "react";
import PallateContainer from "./component/PallateContainer/PallateContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className={"App"}>
        <PallateContainer count={50} />
      </div>
    );
  }
}
