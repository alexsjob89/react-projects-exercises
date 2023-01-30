import React, { Component } from "react";

class LifecircleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "alex",
    };
    console.log("LifecirleB Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecirleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecircleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecircleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, stateState) {
    console.log("LifecircleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecircleB componentDidUpdate");
  }

  render() {
    console.log("LifecircleB render");
    return <h1>Lifecircle B</h1>;
  }
}

export default LifecircleB;
