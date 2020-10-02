import React, {Component} from 'react'
import CatServices from '../services/catServices';
import Context from '../Context'


export default class Cats extends Component {
    state = {
        cats: [],
        adopted: false,
        loaded: false
    }

    static contextType = Context;

    componentDidMount(){
        CatServices.getAllCats()
        .then(cats => {
            this.setState({cats})
        })
        .then(() => this.setState({loaded: true}))
    }

    getCat() {
        CatServices.getNextCat()
        .then(currentCat => {
            this.setState({currentCat})
        });
    }

    handleClick = (e) => {
        this.setState({adopted: true})
        CatServices.deleteCurrent();
    }

    render(){
        if(!this.state.loaded) {return <p>Loading...</p>}
        if(this.state.adopted) {return <h2>You've adopted {this.state.cats[0].name}!</h2>}
        return(
            <div className='cats-all'>
                <h2>{this.state.cats[0].name}</h2>
                <p>{this.state.cats[0].gender}, {this.state.cats[0].age} years old</p>
                <img src={this.state.cats[0].imageURL} alt={this.state.cats[0].imageDescription} /><br/>
                <p>Breed: {this.state.cats[0].breed}</p>
                <p>{this.state.cats[0].story}</p>
                {this.context.currentUser === this.context.user
                    && <button type="button" onClick={this.handleClick}>Adopt {this.state.cats[0].name}!</button>
                }
            </div>
        )
    }
}