import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Home from "../Home";
import Adopt from "../Adopt";
import Context from "../Context";
import userService from "../services/userService";

export default class App extends Component {
  state = {
    user: null,
    isWaiting: false,
    users: [],
    count: 0,
    isLoading: false,
  };

  setUser = (user) => {
    this.setState({ isLoading: true });
    const updatedUsers = this.state.users.push(user);
    this.setState({
      user: user,
      isWaiting: true,
      users: updatedUsers,
      isLoading: false,
    });
  };

  removeUser = () => {
    if (this.state.users.length > 0) {
      this.setState({ count: this.state.count + 1 });
      const updatedUsers = this.state.users.slice(1, this.state.users.length);
      this.setState({ users: updatedUsers });
    }
  };

  componentDidMount() {
    userService.getUsers().then((users) => {
      console.log(users);
      this.setState({ users });
    });
  }

  render() {
    const value = {
      setUser: this.setUser,
      removeUser: this.removeUser,
      user: this.state.user,
      isWaiting: this.state.isWaiting,
      currentUser: this.state.users[0],
      users: this.state.users,
      isLoading: this.state.isLoading,
    };
    return (
      <Context.Provider value={value}>
        <div className="center">
          <Link to="/">
            <h1>Petful</h1>
          </Link>
          <div className="petSection">
            <Route exact path="/" component={Home} />
            <Route path="/adopt" component={Adopt} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}
