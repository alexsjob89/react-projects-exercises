import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlerCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handlerTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;

    return (
      <form style={{ fontSize: "60px" }} onSubmit={this.handlerSubmit}>
        <div>
          <label>username</label>
          <input type="text" value={username} onChange={this.handlerUsernameChange} style={{ fontSize: "60px" }} />
        </div>
        <div>
          <label style={{ marginTop: "3.4rem", position: "absolute" }}>Coments</label>
          <textarea value={comments} onChange={this.handlerCommentsChange} style={{ fontSize: "40px", marginTop: "40px", marginLeft: "15rem" }}></textarea>
        </div>

        <div>
          <label>Topics</label>
          <select
            value={topic}
            onChange={this.handlerTopicChange}
            style={{ fontSize: "30px", backgroundColor: "rgba(0,0,0,0.4)", color: "white", textAlign: "center", padding: "5px", borderRadius: "10px" }}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
