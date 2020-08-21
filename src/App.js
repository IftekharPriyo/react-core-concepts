import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Person name='John' job='Software Developer'></Person>
        <Person name='Gustavo' job='Businessman'></Person>
        <Person name='Harry' job='Data Scientist'></Person>
        
      </header>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin : '10px',
    padding : '30px',
    borderRadius : '10px',
    width : '300px'
  }
  return (
    // <div style={{border:"2px solid red", margin: '10px'}}>
    //   <h1>Name : John Doe</h1>
    //   <h3>Software Developer</h3>
    // </div>   
    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
      <h3>Job : {props.job}</h3>
    </div> 
  )
}

export default App;
