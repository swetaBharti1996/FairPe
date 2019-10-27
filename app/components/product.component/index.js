import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import ProductContainer from "./productContainer";
import StoreContainer from "./storeContainer";
import { PageWrapper } from "../../UI";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 565px;

  margin-top: 8px;
`;
const ErrorText = styled.div`
  margin-top: 15vh;
  font-size: 32px;
  color: #333;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 50px;
`;
const ErrorImg = styled.img`
  width: 500px;
  display: block;
  margin: auto;
  margin-bottom: 100px;
`;
class Product extends Component {
  state = {};
  render() {
    return (
      <PageWrapper>
        <Wrapper>
          {_.isEmpty(this.props.products) ? (
            <>
              <ErrorText>
                Something went wrong! Please try again later!
              </ErrorText>
              <ErrorImg src="../../static/images/error.svg" />
            </>
          ) : (
            <Container>
              <>
                <ProductContainer product={this.props.products} />

                <StoreContainer product={this.props.products} />
              </>
            </Container>
          )}
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Product;
