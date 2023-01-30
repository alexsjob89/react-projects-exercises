import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alexandru",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Alexandru",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>parent component</h1>
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
