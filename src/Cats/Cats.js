import React, {Component} from 'react'
import CatServices from '../services/catServices';


export default class Cats extends Component {
    state = {
        cats: [],
        currentCat: {
            imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
            imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
            name: 'Fluffy',
            sex: 'Female',
            age: 2,
            breed: 'Bengal',
            story: 'Thrown on the street'
          },
          adopted: false
    }

    // componentDidMount(){
    //     CatServices.getAllCats()
    //     .then(cats => {
    //         this.setState({cats})
    //     });
    // }

    getCat() {
        CatServices.getNextCat()
        .then(currentCat => {
            this.setState({currentCat})
        });
    }

    handleClick = (e) => {
        this.setState({adopted: true})
    }

    render(){
        if(this.state.adopted) {return <h2>You've adopted {this.state.currentCat.name}!</h2>}
        return(
            <div className='cats-all'>
                <h2>{this.state.currentCat.name}</h2>
                <p>{this.state.currentCat.sex}, {this.state.currentCat.age} years old</p>
                <img src={this.state.currentCat.imageURL} alt={this.state.currentCat.imageDescription} /><br/>
                <p>Breed: {this.state.currentCat.breed}</p>
                <p>{this.state.currentCat.story}</p>
                <button type="button" onClick={this.handleClick}>Adopt {this.state.currentCat.name}!</button>
            </div>
        )
    }
}