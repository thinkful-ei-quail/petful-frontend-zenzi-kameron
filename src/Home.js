import "./Home.css"
import React, { Component } from "react";
import userService from "./services/userService";
import Context from "./Context";
import config from "./config"
// import catServices from "./services/catServices";
// import dogServices from "./services/dogServices";

export default class Home extends Component {
  state = {
    currentPets: []
  }
  static defaultProps = {
    history: { push: () => {} },
  };

  static contextType = Context;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/pets`).then((res) => {
      if (!res.ok) {
        res.json().then((e) => Promise.reject(e));
      } else {
        return res.json();
      }
    }).then(pets =>
    this.setState({currentPets: pets})
    )
  }

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

        <h3>How FIFO works</h3>

        <p className="main-desc">
          FIFO Adoption Agency places deserving pets with adoptive families that
          need them. Each cat or dog is adopted in the order in which it was
          surrendered to our care. this assures that no pet's stay is too long!
        </p>

        <ol className="steps">
          <li>Join our list of adoptive pet parents</li>
          <li>You'll receive confirmation of entry to our waiting list</li>
          <li>Hold tight! Our waiting list updates automatically.</li>
          <li>You can see all of our fantastic animals until it's time to adopt!</li>
          <li>When it's your turn to adopt, you may choose the dog or cat currently available.</li>
        </ol>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name"></input>
          <button type="submit">Adopt a Pet</button>
        </form>

        <h4>Cats Currently Available:</h4>
        <ul className="homePets">
          {this.state.currentPets.cats && this.state.currentPets.cats.map((cat, i) => <li key={`${cat.name}${i}`}><img src={cat.imageURL} alt={cat.description} className="homePet" /></li>)}
        </ul>
        <h4>Dogs Currently Available:</h4>
        <ul className="homePets">
          {this.state.currentPets.dogs && this.state.currentPets.dogs.map((dog, i) => <li key={`${dog.name}${i}`}><img src={dog.imageURL} alt={dog.description} className="homePet" /></li>)}
        </ul>
      </div>
    );
  }
}
