import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render (){
  
  return (
    <div className="container">
    <div className="row">
    <div className="col-6">Colum number 6</div>  
    <div className="col-6"><span><FontAwesomeIcon icon={faCoffee} /></span>mambo number 5</div>
    </div>  
    </div>
  );
  }
}

export default App;
