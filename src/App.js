import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF', price: '$10.99'},
    {name: 'XD', price: '$70.99'}
  ]
  // const productNames = products.map(product=>product.name);
  const people = [
    'John', 'Jerry', 'Robert', 'Hugh'
  ];
  const peopleName = people.map(people => people);
  console.log(peopleName);
  return (
    <div className="App">
      <header className="App-header">
        <p>Starting React</p>
        <Counter></Counter>
        <ul>
          {/* {
            people.map(people=><li>{people}</li>)
          } */}
          {
            products.map(products=><Product name={products.name} price={products.price}></Product>)
          }
        </ul> 
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}






function Product(props){

  const productStyle = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    height : '300px',
    width : '300px',
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
