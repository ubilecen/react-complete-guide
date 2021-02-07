import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ personState, setPersonsState ] = useState({
    persons: [
      { name: 'Aylin', age: 30 },
      { name: 'Uluc ', age: 35 },
      { name: 'Sherlock', age: 1 },
    ]
  });

  const switchNameHandler = () => {
    //console.log('Was clicked!')
    setPersonsState({persons: [
      { name: 'Aylin', age: 30 },
      { name: 'Uluc ', age: 35 },
      { name: 'Sherlock', age: 2 },
      ]
    })
  }

  const [otherState,setOtherState] = useState('some other value');

  console.log(personState,otherState);

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Scuba Diving</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}

export default app;