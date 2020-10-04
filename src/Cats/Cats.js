import React, { Component } from "react";
import Context from "../Context";

export default class Cats extends Component {
  state = {
    //cats: [],
    adopted: false,
    //loaded: false,
  };

  static contextType = Context;

  componentDidMount() {
    /*
    CatServices.getAllCats()
      .then((cats) => {
        this.setState({ cats });
      })
      .then(() => this.setState({ loaded: true }));
    */
  }

  /*
  getNextCat() {
    console.log("FETCHIN NEW CAR");
    CatServices.getNextCat().then((currentCat) => {
      this.setState({
        currentCat: currentCat,
        loaded: true,
      });
      console.log("fetch new current cat", currentCat);
    });
  }
  */

  handleClick = (e) => {
    this.setState({ adopted: true });
    this.context.adoptCatAction()
    .then(this.setState({ adopted:false }))
  };

  render() {
    if (this.context.currentCat == null) {
      return <h2>No more cats available</h2>;
    }
    if (this.state.adopted) {
      return <h2>You've adopted {this.context.currentCat.name}!</h2>;
    }
    return (
      <div className="cats-all">
        <h2>{this.context.currentCat.name}</h2>
        <p>
          {this.context.currentCat.gender}, {this.context.currentCat.age} years
          old
        </p>
        <img
          src={this.context.currentCat.imageURL}
          alt={this.context.currentCat.imageDescription}
        />
        <br />
        <p>Breed: {this.context.currentCat.breed}</p>
        <p>{this.context.currentCat.story}</p>
        {this.context.currentUser === this.context.user && !this.state.adopted && (
          <button type="button" onClick={this.handleClick}>
            Adopt {this.context.currentCat.name}!
          </button>
        )}
      </div>
    );
  }
}
