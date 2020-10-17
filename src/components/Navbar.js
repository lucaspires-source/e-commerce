import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"
import {ButtonContainer} from "./Button"
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
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
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
    background:var(--mainGreen);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }

`
;