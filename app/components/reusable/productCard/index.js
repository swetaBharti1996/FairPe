import React from "react";
import styled from "styled-components";
import { AddToCart } from "../../../UI";

const Wrapper = styled.div`
  /* width: 100%; */
  margin-bottom: 100px;
`;
const Container = styled.div`
  width: 205px;
  font-family: 'Karla', sans-serif;
`;
const ImageContainer = styled.div`
  width: 107px;
  height: 160px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: left;
  width: 100%;
  margin-top: 17px;
  color: #000;
`;

const Author = styled.p`
  margin-top: 12px;
  line-height: 19px;
  font-size: 16px;

  color: #666;
  > b {
    color: #333;
  }
`;

const Binding = styled.p`
  line-height: 17px;
  font-size: 14px;
  margin-top: 16px;
  color: #666;
`;

const Box = styled.div`
  padding: 21px 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom: 1px solid #cecece;
  border-top: 1px solid #cecece;
  margin-top: 11px;
`;

const PriceContainer = styled.div`
  > p {
    line-height: 19px;
    font-size: 16px;
    color: #666;
  }
  b {
    line-height: 28px;
    font-size: 24px;
    color: #000;
    margin-top: 6px;
  }
`;

const Wishlist = styled.i``;

const ProductCard = () => {
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/51DwqenW78L._SL300_.jpg"
            alt="Solved Papers Karnataka CET Engineering Entrance"
          />
        </ImageContainer>
        <Title>Solved Papers Karnataka CET Engineering Entrance</Title>

        <Author>
          By <b>Robert Vein</b>
        </Author>
        <Binding>Paperback,Hardcover</Binding>

        <Box>
          <PriceContainer>
            <p>Price starts at</p>
            <b>Rs. 10372</b>
          </PriceContainer>
          <Wishlist>Wishlist</Wishlist>
        </Box>
        {/* <AddToCart /> */}
      </Container>
    </Wrapper>
  );
};

export default ProductCard;
