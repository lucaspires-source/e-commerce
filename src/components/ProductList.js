import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from "../context";
import styled from "styled-components";
export default class ProductList extends Component {

    render() {
        return (
            <>
                <ProductWrapper className="py-5">
                    <Title name="our" title="products"/>
                    <div className="container  d-flex justify-content-center flex-wrap">
                        <div className="row"/>
                        <ProductConsumer>
                            {value=>{
                                return value.products.map(product =>{
                                    return <Product key={product.id} 
                                                    product={product}
                                            />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </ProductWrapper>
            </>

        )
    }
}

const ProductWrapper = styled.section``