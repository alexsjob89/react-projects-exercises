import React, { Component } from "react";
import "./App.css";
import RefsDemo from "./componets/RefsDemo";
// import "./appStyle.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RefsDemo />
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <Form /> */}
        {/* <LifecircleA /> */}
        {/* <FragmentDemo /> */}
      </div>
    );
  }
}
export default App;
