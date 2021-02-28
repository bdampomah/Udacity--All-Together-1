import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserList from "./UserList";
import logo from './logo.svg';

class App extends Component {
  state = {
    // users: []
    users: [
      { fname: "Kojo", lname: "Abankwah", username: "k92abankwah", games: 0 },
      { fname: "Christiana", lname: "Asantewah", username: "cbae", games: 0 }
    ]
  };
  saveUser = user => {
    console.log(user);
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
  };
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 1 - All Together</p>
        </header>
        <main className="App-main">
          <h2>GAME RECORDS</h2>
          <div className="container">
            <UserInput users={users} saveUser={this.saveUser} />
            <UserList users={users} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
