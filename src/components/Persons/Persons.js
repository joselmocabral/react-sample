import React, { PureComponent } from "react";

import Person from "./Person/Person";


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] should component update");
  //   return (
  //     nextProps.perons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  //   //return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[Persons.js] Component will Unomunt");
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id} //Use this identifier in order to deleter the correct person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
