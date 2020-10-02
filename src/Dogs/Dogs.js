import React, {Component} from 'react'
import DogServices from '../services/dogServices';
import Context from '../Context'


export default class Dogs extends Component {
    state = {
        dogs: [],
        adopted: false,
    }

    static contextType = Context;

    componentDidMount(){
        DogServices.getAllDogs()
        .then(dogs => {
            this.setState({dogs})
        })
        .then(() => this.setState({loaded: true}))
    }

    handleClick = (e) => {
        this.setState({adopted: true})
        DogServices.deleteCurrent();
    }

    render(){
        if(!this.state.loaded) {return <p>Loading...</p>}
        if(this.state.adopted) {return <h2>You've adopted {this.state.dogs[0].name}!</h2>}
        return(
            <div className='dogs-all'>
                <h2>{this.state.dogs[0].name}</h2>
                <p>{this.state.dogs[0].gender}, {this.state.dogs[0].age} years old</p>
                <img src={this.state.dogs[0].imageURL} alt={this.state.dogs[0].imageDescription} /><br/>
                <p>Breed: {this.state.dogs[0].breed}</p>
                <p>{this.state.dogs[0].story}</p>
                {this.context.user===this.context.currentUser
                    && <button type="button" onClick={this.handleClick}>Adopt {this.state.dogs[0].name}!</button>
                }
            </div>
        )
    }
}