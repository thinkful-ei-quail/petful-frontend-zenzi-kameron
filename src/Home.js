import React, { Component } from "react";
import userService from "./services/userService";
import Context from "./Context";

export default class Home extends Component {
  static defaultProps = {
    history: { push: () => {} },
  };

  static contextType = Context;

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const name = e.target.name.value;
    userService.postUser(name);
    this.context.setUser(name);
    history.push("./adopt");
  };

  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name"></input>
          <button type="submit">Adopt a Pet</button>
        </form>
      </div>
    );
  }
}
