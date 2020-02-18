import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import StarRate from "react-star-rating-component";

const Wrapper = styled.div`
  width: 327px;
  position: sticky;
  top: 100px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    position: static;
    margin-bottom: 24px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductBox = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 4px 2px 12px #00000014;
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 350px;
  margin: 16px 0;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    margin: auto;
    opacity: 1;
    max-width: 100%;
    max-height: 94%;
  }
`;

const Heart = styled.a`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  margin: 16px;
  display: block;
  cursor: pointer;
`;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
  margin-bottom: 16px;
`;

const Details = styled.p`
  margin: 0;
  line-height: 1.2;
  font-size: 18px;
  color: #333333;
  font-weight: bold;
  justify-content: center;
  letter-spacing: -0.5px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 2px solid #dee2e6;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const Reviews = styled.div``;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LabelText = styled.div`
  padding: 8px 0;
  color: #666666;
`;
const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -0.5px;
`;
const Detail = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  margin-bottom: 4px;
  background: #eaeaea;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  font-size: 17px;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.default};
  text-transform: capitalize;
  padding-left: 24px;
  letter-spacing: -0.3px;
  display: flex;
`;

class ProductContainer extends Component {
  state = {
    SUB: [
      // { name: "Comparison" },
      // { name: "Specification" },
      // { name: "Description" }
      // { name: "Review" }
    ]
  };

  handleWishlist = e => {
    // const { auth, product, authModal, wishlist, lowestPrice } = this.props;
    // if (_.isEmpty(auth)) authModal(true);
    // else {
    //   const data = {
    //     pid: product.id,
    //     title: product.title,
    //     price: _.toString(Object.values(lowestPrice)[0] || ""),
    //     image: product.image
    //   };
    //   wishlist(data);
    // }
  };

  _checkWishlist = () => {
    const { wishlistData, product } = this.props;
    const allPID = [];

    _.map(wishlistData.data || [], (d, i) => {
      allPID.push(d.pid);
    });

    if (allPID.includes(product.id)) return true;
    else return false;
  };

  _lowest = () => {
    const { lowestPrice } = this.props;

    let low = "";
    low = lowestPrice && Object.values(lowestPrice)[0];
    return low;
  };

  _liveLowest = () => {
    const { lowestPrice, livePrice } = this.props;
    let temp = [];
    _.map(livePrice || [], (l, i) => {
      if (l[1] === "NOT FOUND") return;
      else temp.push(Number(l[1]));
    });

    return Math.min(...temp);
  };

  render() {
    const {
      product,
      lowestPrice,
      authModal,
      wishlist,
      wishlistData,
      livePrice
    } = this.props;
    const { SUB } = this.state;

    // return <div>test</div>;
    // this._checkWishlist();

    return (
      <Wrapper>
        <Container>
          <ProductBox>
            <UpperContainer>
              <ImageContainer>
                <img src={product && product.image} />
              </ImageContainer>
              {/* <Heart onClick={this.handleWishlist}>
                {this._checkWishlist() ? (
                  <img src="../../static/images/wishlist_fill.png" />
                ) : (
                  <img src="../../static/images/wishlist_empty.png" />
                )}
              </Heart> */}
            </UpperContainer>
            <LowerContainer>
              <Details>{product.title}</Details>
              {/* <RatingContainer>
                <Rating>
                  <StarRate name={"productRating"} value={4}></StarRate>
                </Rating>
                <Reviews>No Reviews Yet</Reviews>
              </RatingContainer> */}
              <LabelText>Price Starts at</LabelText>
              <CartContainer>
                {_.isEmpty(livePrice) ? (
                  <Price>Rs {this._lowest()}</Price>
                ) : (
                  <Price>Rs {this._liveLowest()}</Price>
                )}
              </CartContainer>
            </LowerContainer>

            {_.map(SUB, (d, i) => (
              <Detail
                key={i}
                onClick={() => this.props.handleSubMenuClick(d.name)}
              >
                <Title>{d.name}</Title>
              </Detail>
            ))}
          </ProductBox>
        </Container>
      </Wrapper>
    );
  }
}

export default ProductContainer;
