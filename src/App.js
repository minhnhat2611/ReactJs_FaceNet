import React,{useEffect, useState } from 'react';
import './App.css';
import Products from './Products';
import {Route, Routes } from 'react-router-dom';
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let json = await fetch('http://localhost:5000/products');
      json = await json.json();
      setProducts(json);
    }
  
    fetchData()
  },[])
  
  return (
    <div className="App">
      <div className='header'>
        <nav>
          <ul>
            <li>
              <a href='/'>Product</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='content'>
      <Routes>
        <Route path="/"element={<Products products={products}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;