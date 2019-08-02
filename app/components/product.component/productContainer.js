import React, { Component } from "react";
import styled from "styled-components";
import { AddToCart } from "../../UI";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 20%;
  flex: 1;
  box-shadow: 0 2px 4px 2px #ddd;
  z-index: 15;

  /* margin-right: 10%; */
`;

const ProductBox = styled.div``;

const UpperContainer = styled.div`
  display: flex;
  margin: 0 50px;
  margin-top: 40px;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 223px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const Heart = styled.i`
  padding: 20px;
`;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
`;

const Details = styled.div`
  width: 205px;
  font-size: 18px;
  color: #333333;
  line-height: 24px;
  font-weight: bold;
  justify-content: center;
  background: #f7f7f7;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
`;

const Rating = styled.div``;

const Reviews = styled.div``;

const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LabelText = styled.div`
  margin-top: 10px;
  color: #666666;
`;
const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 12px;
`;

const Cart = styled.div``;
const DetailBox = styled.div`
  margin: 30px 50px;
  height: 100%;
  background: #f7f7f7;
`;
const Detail = styled.div`
  width: 320px;
  height: 73px;
  display: flex;

  &:nth-child(n) {
    background: #eaeaea;
  }
  &:nth-child(2n) {
    background: #f7f7f7;
  }
`;

const Title = styled.div`
  font-size: 14px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666666;
  line-height: 17px;
`;
const Desc = styled.div`
  font-size: 14px;
  width: 50%;
  align-items: left;
  color: #666666;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
const DescContent = styled.div`
  font-size: 14px;
  color: #444444;
  line-height: 24px;
`;

class ProductContainer extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <ProductBox>
            <UpperContainer>
              <ImageContainer>
                <img src="../../static/images/imagebook.png" />
              </ImageContainer>
              <Heart>WishList</Heart>
            </UpperContainer>
            <LowerContainer>
              <Details>
                Determinants And Their Applications In Mathematical Physics{" "}
              </Details>
              <RatingContainer>
                <Rating>Rating</Rating>
                <Reviews>Reviews</Reviews>
              </RatingContainer>
              <LabelText>Price Starts at</LabelText>
              <CartContainer>
                <Price>Rs. 10372</Price>
                <Cart>
                  <AddToCart />
                </Cart>
              </CartContainer>
            </LowerContainer>
          </ProductBox>
          <DetailBox>
            <Detail>
              <Title>Author</Title>
              <Desc>
                <DescContent>Robert Vein</DescContent>
                <DescContent>PaulDate</DescContent>
              </Desc>
            </Detail>
            <Detail>
              <Title>Publisher</Title>
              <Desc>
                <DescContent>Springer</DescContent>
              </Desc>
            </Detail>
            <Detail>
              <Title>Pages</Title>
              <Desc>
                <DescContent>376</DescContent>
              </Desc>
            </Detail>
            <Detail>
              <Title>Cover</Title>
              <Desc>
                <DescContent>Robert Vein</DescContent>
                <DescContent>Hardcover</DescContent>
              </Desc>
            </Detail>
          </DetailBox>
        </Container>
      </Wrapper>
    );
  }
}

export default ProductContainer;
