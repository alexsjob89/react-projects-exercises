import React, { Component } from "react";
import LifecircleB from "./LifecircleB";

class LifecircleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "alex",
    };
    console.log("LifecirleA Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecirleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecircleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecircleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, stateState) {
    console.log("LifecircleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecircleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codevolution",
    });
  };

  render() {
    console.log("LifecircleA render");
    return (
      <div>
        <h1>Lifecircle A</h1>
        <button onClick={this.changeState}>change state</button>
        <LifecircleB />
      </div>
    );
  }
}

export default LifecircleA;
