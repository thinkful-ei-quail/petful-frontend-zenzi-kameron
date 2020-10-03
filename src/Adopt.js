import React, { Component } from "react";
import Context from "./Context";
import Cats from "./Cats/Cats";
import Dogs from "./Dogs/Dogs";
import userService from "./services/userService";

export default class Home extends Component {

  static contextType = Context;
  
  componentDidMount() {
    this.context.loadUsers()
    if(this.context.user !== this.context.users[0]){
        this.interval = setInterval(() => {
        this.shuffleUser();
        this.context.addRandom('random')
        }, 3000);
    }
  }

  shuffleUser = () => {
    if (this.context.users.length > 1) {
        userService.deleteCurrent()
        .then(this.context.removeUser());
    }
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
    if (this.context.isLoading) {
      return <p>Loading</p>;
    } else {
      return (
        <div>
          <h2>{this.context.currentUser} is currently adopting</h2>
          {/* The Cats and Dogs modules should cooperate with the displayQueue function; 
                whenever an imaginary user is deleted from the queue, a cat and/or dog should also be deleted.
                They should also display "Adopted!" or something to that effect whenever they are deleted. */}
          <Cats className="pet" />
          <Dogs className="pet" />
        </div>
      );
    }
  }
}
