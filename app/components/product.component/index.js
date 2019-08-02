import React, { Component } from "react";
import styled from "styled-components";
import ProductContainer from "./productContainer";
import StoreContainer from "./storeContainer";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
`;
class Product extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <ProductContainer />

          <StoreContainer />
        </Container>
      </Wrapper>
    );
  }
}

export default Product;
