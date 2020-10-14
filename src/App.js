import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar  from "./components/Navbar"
import ProductList from "./components/ProductList"
import Product from './components/Product';
import Cart from "./components/Cart"
import Details from "./components/Details"
import Default from "./components/Default"
class App extends Component {
  render (){
  
  return (
    <>
      <Navbar/>
      <ProductList/>
      <Product/>
      <Cart/>
      <Default/>
      <Details/>

    </>

  );
  }
}

export default App;
