import React, { Component } from "react";
import styled from "styled-components";
import ProductContainer from "./productContainer";
import StoreContainer from "./storeContainer";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 300px;
`;
class Product extends Component {
  state = {};
  render() {
    console.log(this.props.products)
    return (
      <Wrapper>
        <Container>
            <>
              <ProductContainer product={this.props.products} />

              <StoreContainer product={this.props.products} />
            </>
        </Container>
      </Wrapper>
    );
  }
}

export default Product;
