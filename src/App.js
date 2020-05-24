import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        name: "Joselmo",
        age: 27,
      },
      {
        name: "Renata",
        age: 29,
      },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 27,
        },
        {
          name: "Renata Magalhães",
          age: 29,
        },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Joselmo",
          age: 27,
        },
        {
          name: event.target.value,
          age: 29,
        },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Joselmo Cabral")}
            >
              My Hobbies: Jogging
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}
            />
          </div>
        ) : null}
      </div>
    );
    // The code gets compiled to JavaScript, like below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My first React App'));
    // The restriction is that it always has to have one root element only
  }
}

export default App;
