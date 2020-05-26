import React, { Component } from "react";
import Person from "../components/Persons/Person/Person";

import classes from "./App.css";

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
    

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
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
      );

      btnClass= classes.Red;

    }

    //let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 0) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>My first React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // The code gets compiled to JavaScript, like below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My first React App'));
    // The restriction is that it always has to have one root element only
  }
}

export default App;
