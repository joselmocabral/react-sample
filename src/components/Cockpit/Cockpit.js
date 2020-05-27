import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    //Re-executes after every render cycle
    console.log("useEffect");
    //Alert after 1 second on the screen
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work");
    };
  }, [props.persons]);
  //If passing an empy array it will run only for the first time

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersosn) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 0) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>My first React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
