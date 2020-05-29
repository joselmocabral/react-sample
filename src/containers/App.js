import React, { Component } from "react";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

import classes from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
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
      authenticated: false,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  componentDidMount() {
    console.log("[App.js] Component Did Mount");
  }

  componentDidUpdate() {
    console.log("[App.js] Component Did Update");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js Should Component Update");
    return true;
  }

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

  loginHandler = () => {
    this.setState({ authenticated: true });
    console.log('[LOGGIN IN]');
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    //let classes = ['red', 'bold'].join(' ');

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // The code gets compiled to JavaScript, like below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'My first React App'));
    // The restriction is that it always has to have one root element only
  }
}

export default withClass(App, classes.App);
