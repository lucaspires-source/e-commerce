import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
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
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faCartPlus}/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </nav>
        )
    }
}
const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.05rem solid var(--lightgreen);
    color:var(--lightgreen);
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{
        background:var(--lightgreen);
        color:var(--mainGreen) ;
    }
    &:focus{
        outline:none
    }
`;