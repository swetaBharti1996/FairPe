import React, { Component, Fragment } from "react";
import styled from "styled-components";
import _ from "lodash";
import ProductContainer from "./productContainer";
import StoreContainer from "./storeContainer";
import { PageWrapper } from "../../UI";
import Description from "./description";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
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

  _getAllPrice = products => {
    const ALL_PRICE = [];
    _.map(products.OnlineSites, (data, k) =>
      ALL_PRICE.push({ [k]: data.price })
    );
    _.map(products.OfflineSites, (data, k) =>
      ALL_PRICE.push({ [k]: data.price })
    );
    return ALL_PRICE;
  };

  _calcDisount = () => {};

  _getLowestPrice = DATA => _.minBy(DATA);

  _getALLProduct = DATA => {
    const PRODUCT = [];

    _.map(DATA.OnlineSites, (data, k) =>
      PRODUCT.push({
        site: k,
        price: data.price,
        discount: 20,
        title: DATA.title,
        type: "online",
        url: data.productUrl
      })
    );

    _.map(DATA.OfflineSites, (data, k) =>
      PRODUCT.push({
        site: k,
        price: data.price,
        discount: 30,
        title: DATA.title,
        type: "offline",
        url: data.productUrl
      })
    );

    // Sort with Lowest Price then return

    return PRODUCT;
  };

  render() {
    const { products } = this.props;

    return (
      <PageWrapper>
        <Wrapper>
          {_.isEmpty(products) ? (
            <Fragment>
              <ErrorText>
                Something went wrong! Please try again later!
              </ErrorText>
              <ErrorImg src="../../static/images/error.svg" />
            </Fragment>
          ) : (
            <Container>
              <Fragment>
                <ProductContainer
                  lowestPrice={this._getLowestPrice(
                    this._getAllPrice(products)
                  )}
                  product={this.props.products}
                />
                <StoreContainer
                  allProduct={this._getALLProduct(products)}
                  product={this.props.products}
                />
              </Fragment>
            </Container>
          )}
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Product;
