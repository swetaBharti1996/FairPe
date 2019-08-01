import React, { Component } from react;
import styled from 'styled-components';

class ProductCard extends Component {
    render() {
        return (
            <Wrapper>
                <ProductImg>
                    <img />
                </ProductImg>
                <ProductDetails>
                    <ProductTitle>The Physics of Possibilities</ProductTitle>
                    <ProductBrand>
                        by <b>Robert Vein</b>
                    </ProductBrand>
                </ProductDetails>
                <ProductPrice>
                    <p>Prices starts at</p>
                    <Price>Rs. 10372</Price>
                </ProductPrice>
            </Wrapper>
        )
    }
}