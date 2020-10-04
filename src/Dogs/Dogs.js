import React, { Component } from "react";
import DogServices from "../services/dogServices";
import Context from "../Context";

export default class Dogs extends Component {
  state = {
    dogs: [],
    adopted: false,
  };

  static contextType = Context;

  componentDidMount() {
    DogServices.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .then(() => this.setState({ loaded: true }));
  }

  handleClick = (e) => {
    this.setState({ adopted: true });
    this.context.adoptDogAction();
  };

  render() {
    if (this.context.currentDog == null) {
      return <p>Loading...</p>;
    }
    if (this.state.adopted) {
      return <h2>You've adopted {this.context.currentDog.name}!</h2>;
    }
    return (
      <div className="dogs-all">
        <h2>{this.context.currentDog.name}</h2>
        <p>
          {this.context.currentDog.gender}, {this.context.currentDog.age} years
          old
        </p>
        <img
          src={this.context.currentDog.imageURL}
          alt={this.context.currentDog.imageDescription}
        />
        <br />
        <p>Breed: {this.context.currentDog.breed}</p>
        <p>{this.context.currentDog.story}</p>
        {this.context.user === this.context.currentUser &&
          !this.state.adopted && (
            <button type="button" onClick={this.handleClick}>
              Adopt {this.context.currentDog.name}!
            </button>
          )}
      </div>
    );
  }
}
