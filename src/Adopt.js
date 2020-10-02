import React, {Component} from 'react';
import Context from './Context'
import Cats from './Cats/Cats'
import Dogs from './Dogs/Dogs'

export default class Home extends Component {
    static contextType = Context;

    render() {
        if(this.context.isWaiting){
            return (
                <div className="allWaiting">
                    <h2>You are curently waiting in line...</h2>
                </div>
            )
        }
        return(
            <div>
                <h2>Adopt</h2>
                <Cats className="pet"/>
                <Dogs className="pet"/>
                {this.context.currentUser ? <p>{this.context.currentUser}</p> : <p>You are not currently logged in</p>}
            </div>
        )
    }
}