import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Person></Person>
        <Person></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    border: '2px solid red',
    margin : '10px',
    padding : '30px',
    borderRadius : '10px'
  }
  return (
    // <div style={{border:"2px solid red", margin: '10px'}}>
    //   <h1>Name : John Doe</h1>
    //   <h3>Software Developer</h3>
    // </div>   
    <div style={personStyle}>
      <h1>Name : John Doe</h1>
      <h3>Software Developer</h3>
    </div> 
  )
}

export default App;
