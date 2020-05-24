import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      {
        id: "0001",
        name: "Joselmo",
        age: 27,
      },
      {
        id: "0002",
        name: "Renata",
        age: 29,
      },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Copy for good practice
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }; //Handler that deletes a person based on the click

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  }; // This handler toggles the visibility of the list of persons based on the showPersons bool

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
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id} //Use this identifier in order to deleter the correct person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              );
            })}
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
