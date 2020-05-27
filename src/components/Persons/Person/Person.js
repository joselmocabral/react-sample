import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import classes from "./Person.css";

class Person extends Component {
  render() {
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm a human being! Name: {this.props.name} Age: {this.props.age}
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
