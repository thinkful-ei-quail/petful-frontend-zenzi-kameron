import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import './App.css'
import Home from '../Home'
import Adopt from '../Adopt'
import Context from '../Context'

export default class App extends Component {
  state = {
    allWaiting: [],
    currentUser: null,
    isWaiting: false,
  }

  setUser = (user) => {
    this.setState({currentUser: user, isWaiting: true})
  }


  render() {
    const value = {
      setUser: this.setUser,
      currentUser: this.state.currentUser,
      isWaiting: this.state.isWaiting
    }
    return (
      <Context.Provider value={value}>
        <div className="center">
          <Link to='/'><h1>Petful</h1></Link>
          <div className="petSection">
            <Route exact path="/" component={Home}/>
            <Route path="/adopt" component={Adopt}/>
          </div>
        </div>
      </Context.Provider>
    )
  }
}

