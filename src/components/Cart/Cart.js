import React, { Component } from 'react'
import {ProductConsumer} from "../../context"
import Title from "../Title"
import CartColumns from "./CartColumns"
import CartList from './CartList'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => { const {cart} = value;
                    return (
                        <>
                        <Title name="your " title ="cart"/>
                        <CartColumns></CartColumns>
                        <CartList value ={value}/>
                        </>
                        )}}
                </ProductConsumer>
            </section>
        )
    }
}
