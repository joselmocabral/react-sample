import React, { Component } from "react";
import PropTypes from "prop-types";
//This library prevents the props from being used incorrectly

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //document.querySelector('input').focus();
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm a human being! Name: {this.props.name} Age: {this.props.age}
        </p>
        {this.context.isAuthenticated ? <p> Authenticated</p> : <p>NOT</p>}

        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
};

export default withClass(Person, classes.Person);
