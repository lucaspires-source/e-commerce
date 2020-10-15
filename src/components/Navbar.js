import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Logo of the store" className="navbar-brand  logo"></img>
                </Link>
                <ul className="navbar-nav align-items-center"> 
                    <l1 className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </l1>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button>
                       <FontAwesomeIcon icon={faCartPlus}/>
                       my cart
                    </button>
                </Link>
            </nav>
        )
    }
}
