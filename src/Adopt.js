import React, { Component } from "react";
import Context from "./Context";
import Cats from "./Cats/Cats";
import Dogs from "./Dogs/Dogs";
import userService from "./services/userService";
import catService from "./services/catServices";
import dogService from "./services/dogServices";

export default class Home extends Component {
  state = {
    //cats: [],
    currentCat: null,
    currentDog: null,
    currentAdoptedPet: null,
    removeStatus: false,
    bothPetAdoptionStatus: false,
  };

  static contextType = Context;

  componentDidMount() {
    this.context.loadUsers();

    this.getNextCat();
    this.getNextDog();

    let newRandomUsers = this.context.newRandomUsers.slice();
    const interval = setInterval(() => {
      if (this.context.user === this.context.users[0]) {
        setInterval(() => {
          if (newRandomUsers.length) {
            const newRandomUser = newRandomUsers.shift();
            this.context.addRandom(newRandomUser);
          }
        }, this.context.stopTime);
        clearInterval(interval);
      } else {
        this.shuffleUser();
      }
    }, this.context.stopTime);
  }
  componentWillUnmount() {}

  adoptCat = () => {
    this.setState(
      {
        currentAdoptedPet: this.state.currentCat,
      },
      function () {
        catService.deleteCurrent().then(() => {
          setTimeout(() => {
            this.getNextCatPage();
          }, 2000);
        });
      }
    );
  };
  adoptDog = () => {
    this.setState(
      {
        currentAdoptedPet: this.state.currentDog,
      },
      function () {
        dogService.deleteCurrent().then(() => {
          setTimeout(() => {
            this.getNextDogPage();
          }, 2000);
        });
      }
    );
  };

  adoptCatAction = () => {
    this.setState(
      {
        currentAdoptedPet: this.state.currentCat,
        removeStatus: true,
      },
      function () {
        catService.deleteCurrent().then(() => {
          setTimeout(() => {
            console.log("redirect to the home page");
            this.props.history.push("/");
          }, 2000);
        });
      }
    );
  };
  adoptDogAction = () => {
    this.setState(
      {
        currentAdoptedPet: this.state.currentDog,
        removeStatus: true,
      },
      function () {
        dogService.deleteCurrent().then(() => {
          setTimeout(() => {
            console.log("redirect to the home page");
            this.props.history.push("/");
          }, 2000);
        });
      }
    );
  };
  adoptBothPetAction = () => {
    this.setState(
      {
        bothPetAdoptionStatus: true,
      },
      function () {
        dogService.deleteCurrent().then(() => {
          catService.deleteCurrent().then(() => {
            setTimeout(() => {
              console.log("redirect to the home page");
              this.props.history.push("/");
            }, 2000);
          });
        });
      }
    );
  };

  getNextDogPage = () => {
    dogService.getNextDog().then((currentDog) => {
      this.context.loadUsers();
      this.setState({
        currentDog: currentDog,
        currentAdoptedPet: null,
      });
    });
  };

  getNextCatPage = () => {
    catService.getNextCat().then((currentCat) => {
      this.context.loadUsers();
      this.setState({
        currentCat: currentCat,
        currentAdoptedPet: null,
      });
    });
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)); //60
  };

  //need to clear interval from set interval with componenet did unmount
  shuffleUser = () => {
    if (this.context.users.length) {
      //it means that you are the only user left in the queue
      //so you are in front of the line so you start adding users
      userService.deleteCurrent().then(() => {
        if (this.getRandomInt(100) < 50) {
          this.adoptCat();
        } else {
          this.adoptDog();
        }
      });
    }
  };

  getNextCat() {
    catService.getNextCat().then((currentCat) => {
      this.setState({
        currentCat: currentCat,
      });
    });
  }

  getNextDog() {
    dogService.getNextDog().then((currentDog) => {
      this.setState({
        currentDog: currentDog,
      });
    });
  }

  getCurrentUserStatus = () => {
    if (this.state.bothPetAdoptionStatus) {
      return (
        "You've adopted " +
        this.state.currentCat.name +
        " and " +
        this.state.currentDog.name
      );
    }
    if (this.state.removeStatus) {
      return;
    }
    if (this.state.currentAdoptedPet == null) {
      return this.context.currentUser + " is currently adopting";
    }
    return (
      this.context.currentUser +
      " has adopted " +
      this.state.currentAdoptedPet.name
    );
  };

  getAdoptBothButton = () => {
    if (
      this.state.currentCat == null ||
      this.state.currentDog == null ||
      this.context.user !== this.context.users[0] ||
      this.state.bothPetAdoptionStatus
    ) {
      return;
    }

    return (
      <button type="button" onClick={this.adoptBothPetAction}>
        Adopt {this.state.currentDog.name} and {this.state.currentCat.name}!
      </button>
    );
  };
  //   addToQueue = () => {
  //     while(this.context.users.length < 5){
  //         setInterval(() => {
  //             userService.postUser('random')
  //             this.context.loadUsers()
  //         }, 5000);
  //     }
  //   };

  render() {
    let value = {
      currentCat: this.state.currentCat,
      currentDog: this.state.currentDog,
      currentUser: this.context.currentUser,
      user: this.context.user,
      adoptDogAction: this.adoptDogAction,
      adoptCatAction: this.adoptCatAction,
    };
    if (this.context.isLoading) {
      return <p>Loading</p>;
    } else {
      return (
        <Context.Provider value={value}>
          <div>
            <h2>{this.getCurrentUserStatus()}</h2>
            {/* The Cats and Dogs modules should cooperate with the displayQueue function; 
              whenever an imaginary user is deleted from the queue, a cat and/or dog should also be deleted.
              They should also display "Adopted!" or something to that effect whenever they are deleted. */}
            {!this.state.bothPetAdoptionStatus && <Cats className="pet" />}
            {!this.state.bothPetAdoptionStatus && <Dogs className="pet" />}
            {this.getAdoptBothButton()}
          </div>
        </Context.Provider>
      );
    }
  }
}
