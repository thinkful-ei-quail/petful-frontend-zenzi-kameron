import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import './App.css'
import Home from '../Home'
import Adopt from '../Adopt'
import Context from '../Context'
import userService from '../services/userService'

export default class App extends Component {
  state = {
    user: null,
    isWaiting: false,
    users: []
  }

  setUser = (user) => {
    this.setState({user: user, isWaiting: true})
  }

  componentDidMount() {
    userService.getUsers()
    .then(users => {
        this.setState({users})
    })
  }


  render() {
    const value = {
      setUser: this.setUser,
      user: this.state.user,
      isWaiting: this.state.isWaiting,
      currentUser: this.state.users[0],
      users: this.state.users
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

