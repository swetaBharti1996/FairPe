import React, { Component, Fragment } from "react";
import styled from "styled-components";
import _ from "lodash";
import ProductContainer from "./productContainer";
import StoreContainer from "./storeContainer";
import { PageWrapper } from "../../UI";
import Description from "./description";
import Specification from "./specification";
import Review from "./review";
import Search from "../../components/reusable/search";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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

const RightSide = styled.div`
  margin-left: 24px;
  flex: 1;
  
`;

const SearchContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  > div {
    &:first-child {
      width: 327px;
      background: #e3e3e3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:last-child {
      background: #f7f7f7;
      flex: 1;
      display: flex;
      align-items: center;
      height: 100px;
    }
  }
`;

const Box = styled.div`
  width: 70%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  > p {
    color: #000000;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0;
  }
  > i {
  }
`;

const StoreCon = styled.div`
min-height: 800px;
  overflow-x: auto;
  overflow: hidden;
`;

class Product extends Component {

  constructor(props) {
    super(props);
    this.myDivToFocus = React.createRef();
  }

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

  handleSubMenuClick=(data)=>{
    console.log("clicked",this.myDivToFocus)
    window.scrollTo({ behavior: 'smooth', top: this.myDivToFocus.current.offsetHeight })
    // this.myDivToFocus.current.scrollIntoView({ behavior: 'smooth', block: 'start', })
    // window.scrollTo(0, this.myDivToFocus.current.offsetHeight)
    // if (this.myDivToFocus.current) {
    //   console.log("clicked",this.myDivToFocus.current)
    //   this.myDivToFocus.current.scrollBy({
    //     top: 100,
    //     behavior: "smooth"
    //   });
    // }

  }

  render() {
    const { products } = this.props;
    console.log("products",products)

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
              <ProductContainer
                lowestPrice={this._getLowestPrice(this._getAllPrice(products))}
                product={this.props.products}
                handleSubMenuClick={this.handleSubMenuClick}
              />
              <RightSide>
                <StoreCon ref={this.myDivToFocus}>
                <StoreContainer
                  allProduct={this._getALLProduct(products)}
                  product={this.props.products}
                />
                </StoreCon>
                {!_.isEmpty(products.specification) &&
                <Specification specification={products.specification} />}
                {!_.isEmpty(products.description) &&
                <Description  description={products.description}/>}
                {/* <Review></Review> */}
              </RightSide>
            </Container>
          )}
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Product;
