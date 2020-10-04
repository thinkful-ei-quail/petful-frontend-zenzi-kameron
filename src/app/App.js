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
    this.setState({
      user: user,
      isWaiting: true,
      users: [...this.state.users, user],
      isLoading: false,
    });
  };

  loadUsers = () => {
    userService.getUsers().then((users) => {
      this.setState({ users });
    });
  };

  removeUser = () => {
    if (this.state.users[0] !== this.state.user) {
      //remove the first user because that came first and will go out first
      const updatedUsers = this.state.users.slice(1, this.state.users.length);
      this.setState({ users: updatedUsers });
    }
  };

  addRandom = (user) => {
    userService.postUser(user).then(this.loadUsers());
  };

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    let value = {
      setUser: this.setUser,
      removeUser: this.removeUser,
      user: this.state.user,
      isWaiting: this.state.isWaiting,
      currentUser: this.state.users[0], //first user in will be first user out
      users: this.state.users,
      isLoading: this.state.isLoading,
      loadUsers: this.loadUsers,
      addRandom: this.addRandom,
      //add as many random names as many people you need to be
      //after yourself
      newRandomUsers: [
        "Random User 1",
        "Random User 2",
        "Random User 3",
        "Random User 4",
        "Random User 5",
      ],
      stopTime: 5000, //time between users
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
