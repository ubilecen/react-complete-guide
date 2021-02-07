import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Aylin', age: 30 },
      { name: 'Uluc ', age: 35 },
      { name: 'Sherlock', age: 1 },
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!')
    this.setState({persons: [
      { name: 'Aylin', age: 30 },
      { name: 'Uluc ', age: 35 },
      { name: 'Sherlock', age: 2 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Scuba Diving</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
