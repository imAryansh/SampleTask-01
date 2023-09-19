import React, { useState } from 'react'
import {data} from './data.js';
import './App.css';

function App() {
  // console.log(data);

  const [search,setSearch]=useState('')
  // console.log(search)

  const styles = {
    backgroundColor: 'white',
    width: '500px',
    marginBottom: '10px',
    padding: '10px',
    color: 'green',
    boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
};

  return (
      <div className='App'>
        <div>
        <h1>Sample Task-1</h1>

      <input type='text' 
      onChange={(e)=> setSearch(e.target.value)} 
      placeholder='Search for the Gadgets'></input>
      <button>Search</button>
        </div>
  
      <div className='Container'>
      {data.filter((ob)=>{
        if(search.toLowerCase()=='')
        return ob;
        else if(ob.title.toLowerCase().includes(search.toLowerCase()))
        return ob;
      }).map(
          (ob)=> {
            return (
              <div key={ob.id} style={styles}>
          <h2>Category: {ob.category}</h2>
          <img src={ob.thumbnail}></img>
          <h3>{ob.title}</h3>
          <h4>{ob.description}</h4>
          <h4>Price: {ob.price} $</h4>
          <h4>%Discount: {ob.discountPercentage}</h4>
          <h4>Rating:{ob.rating}</h4>
          <h4>Stock:{ob.stock}</h4>
          <h4>Brand:{ob.brand}</h4>
        </div>)
        }
        )}
      </div>
    </div>
  )

}

export default App;
