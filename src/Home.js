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
        <h2>FIFO Adoption Agency</h2>

        <h4>How FIFO works</h4>

        <p>
          FIFO Adoption Agency places deserving pets with adoptive families that
          need them. Each cat or dog is adopted in the order in which it was
          surrendered to our care. this assures that no pet's stay is too long!
        </p>

        <ol>
          <li>Join our list of adoptive pet parents</li>
          <li>You'll receive confirmation of entry to our waiting list</li>
          <li>Hold tight! Our waiting list updates automatically!</li>
          <li>
            You can see all of our fantastic animals until it's time to adopt!
          </li>
          <li>
            When it's your turn to adopt, you may choose the dog or cat
            currently available!
          </li>
        </ol>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name"></input>
          <button type="submit">Adopt a Pet</button>
        </form>
      </div>
    );
  }
}
