import React, {Component} from 'react';
import Context from './Context'
import Cats from './Cats/Cats'
import Dogs from './Dogs/Dogs'
import userService from './services/userService'

export default class Home extends Component {
    static contextType = Context;

    componentDidMount() {
        this.displayQueue()
    }

    // The currentUser (users[0]) should be deleted every five seconds. The currentUser is located 
    // in state in the app module, and available through Context. Once our logged-in user is at users[0],
    // the timeout function should stop, allowing the user to choose a pet. 
    displayQueue = () => {
        for(let i=0; i<this.context.users.length; i++){
            if(this.context.user !== this.context.currentUser){
                setTimeout(() => userService.deleteCurrent(), 5000)
            }
        }
    }

    addToQueue = () => {
        // There should be a new random user added to the end of the queue every few seconds.
    }


    render() {
        return(
            <div>
                <h2>{this.context.currentUser} is currently adopting</h2>
                { /* The Cats and Dogs modules should cooperate with the displayQueue function; 
                whenever an imaginary user is deleted from the queue, a cat and/or dog should also be deleted.
                They should also display "Adopted!" or something to that effect whenever they are deleted. */ }
                <Cats className="pet"/>
                <Dogs className="pet"/>
            </div>
        )
    }
}