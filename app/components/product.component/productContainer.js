import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 327px;
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
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 223px;
  > img {
    height: 100%;
  }
`;

const Heart = styled.i``;
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
  border-bottom: 2px solid #eee;
`;

const Rating = styled.div``;

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

const Cart = styled.div``;
const DetailBox = styled.div`
  margin: 0px;
  height: 100%;
  background: #f7f7f7;
`;
const Detail = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  margin-bottom: 4px;
  background: #eaeaea;

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

const SUB = [
  { name: "Specification" },
  { name: "Description" },
  { name: "Review" }
];

class ProductContainer extends Component {
  state = {};
  render() {
    const { product } = this.props;

    return (
      <Wrapper>
        <Container>
          <ProductBox>
            <UpperContainer>
              <ImageContainer>
                <img src={product.image} />
              </ImageContainer>
              {/* <Heart>
                <img src="../../static/images/wishlist_fill.png" />
              </Heart> */}
            </UpperContainer>
            <LowerContainer>
              <Details>{product.title}</Details>
              <RatingContainer>
                <Rating>Rating</Rating>
                <Reviews>Reviews</Reviews>
              </RatingContainer>
              <LabelText>Price Starts at</LabelText>
              <CartContainer>
                <Price>Rs 10372</Price>
                {/* <Cart>
                  <AddToCart />
                </Cart> */}
              </CartContainer>
            </LowerContainer>

            {_.map(SUB, (d, i) => {
              return (
                <Detail>
                  <Title>{d.name}</Title>
                </Detail>
              );
            })}
          </ProductBox>

          {/* <DetailBox>
            {Object.keys(SUB).map(item => (
              <Detail>
                <Title>{"Specifiation"}</Title>
                <Desc>
                  <DescContent>{"test"}</DescContent>
                </Desc>
              </Detail>
            ))}
          </DetailBox> */}
        </Container>
      </Wrapper>
    );
  }
}

export default ProductContainer;
