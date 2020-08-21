import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: 'John',
    lastName: 'Doe'
  } ;
  var style = {
    color: 'red',
    backgroundColor: 'yellow',
    padding: 20
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{2+3}</h1>
        <h2 style={style}>{person.name} {person.lastName}</h2>
        <p style={{backgroundColor: 'cyan'}}>My first react paragraph</p>
        
      </header>
    </div>
  );
}

export default App;
