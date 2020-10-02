import React, {Component} from 'react'
import DogServices from '../services/dogServices';


export default class Dogs extends Component {
    state = {
        dogs: [],
        currentDog: {
            imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
            imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
            name: 'Zeus',
            sex: 'Male',
            age: 3,
            breed: 'Golden Retriever',
            story: 'Owner Passed away'
          },
          adopted: false,
    }

    // componentDidMount(){
    //     DogServices.getAllDogs()
    //     .then(dogs => {
    //         this.setState({dogs})
    //     })
    // }

    handleClick = (e) => {
        this.setState({adopted: true})
    }

    render(){
        if(this.state.adopted) {return <h2>You've adopted {this.state.currentDog.name}!</h2>}
        return(
            <div className='dogs-all'>
                <h2>{this.state.currentDog.name}</h2>
                <p>{this.state.currentDog.sex}, {this.state.currentDog.age} years old</p>
                <img src={this.state.currentDog.imageURL} alt={this.state.currentDog.imageDescription} /><br/>
                <p>Breed: {this.state.currentDog.breed}</p>
                <p>{this.state.currentDog.story}</p>
                <button type="button" onClick={this.handleClick}>Adopt {this.state.currentDog.name}!</button>
            </div>
        )
    }
}