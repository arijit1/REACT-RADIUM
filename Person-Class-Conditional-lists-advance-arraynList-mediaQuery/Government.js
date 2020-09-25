import React, { Component } from 'react';
import Person from './Person';
import Radium from 'radium';
import { StyleRoot } from 'radium/lib';

class GovernmentsClassListAdvanceRadiumMediaQuery extends Component {
  constructor() {
    super();
    this.state = {
      person: [
        { id: 'a1', name: 'Arijit', age: 22 },
        { id: 'a2', name: 'Fenink', age: 25 },
        { id: 'a3', name: 'Alexiy', age: 21 },
      ],
      otherState: "some other value",
      showPerson: false
    }
  }
  toggler = () => {

    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  nameChangedHandler = (event, id) => {
    console.log(id);
  }
  deletePerson = (delIndex) => {
    const persons = [...this.state.person];
    persons.splice(delIndex, 1); //at position delIndex remove 1 item
    console.log(persons);
    this.setState({ person: persons })
    console.log(persons);
  }


  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      padding: '8px',
      ":hover": {
        backgroundColor: 'lightblue',
        color: "blue"
      }
    }

    let person = null;

    if (this.state.showPerson) {

      person = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
            click={() => this.deletePerson(index)}
              status={true}
              name={person.name}
              age={person.age}
              keys={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.cursor = "pointer";
      style[":hover"] = {
        backgroundColor: 'salmon',
        color: 'black',
        font:'bold'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <p>Conditional adv Features with radium styling media query</p>
          <button style={style} onClick={() => this.toggler()}>Toggle</button>
          {person}
        </div>
      </StyleRoot>
    );
  }

}
export default Radium(GovernmentsClassListAdvanceRadiumMediaQuery);