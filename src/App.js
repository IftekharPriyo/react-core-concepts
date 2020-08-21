import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF', price: '$10.99'}

  ]
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Product name={products[0].name} price={products[0].price}></Product>
          <Product name={products[1].name} price={products[1].price}></Product>
          <Product name={products[2].name} price={products[2].price}></Product>
        </div>
        {/* <Person name='John' job='Software Developer'></Person>
        <Person name='Gustavo' job='Businessman'></Person>
        <Person name='Harry' job='Data Scientist'></Person> */}
        
      </header>
    </div>
  );
}

function Product(props){

  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '300px',
    width : '250px',
    float : 'left',
    marginLeft : '10px'
  }

  return(
    <div style={productStyle}>
      <h2>{props.name} </h2>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
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
