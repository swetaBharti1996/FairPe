import React from "react";
import styled from "styled-components";
import { AddToCart } from "../../../UI";

const Wrapper = styled.a`
  margin-bottom: 100px;
  text-decoration: none;
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
  }
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: left;
  width: 100%;
  margin-top: 17px;
  color: #000;
  @media only screen and (max-width: 1440px){
    font-size: 16px;
  }
`;

const Author = styled.p`
  margin-top: 12px;
  line-height: 19px;
  font-size: 16px;

  color: #666;
  > b {
    color: #333;
  }
  @media only screen and (max-width: 1440px){
    font-size: 14px;
  }
`;

const Binding = styled.p`
  line-height: 17px;
  font-size: 14px;
  margin-top: 16px;
  color: #666;
  @media only screen and (max-width: 1440px){
    font-size: 12px;
  }
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
  @media only screen and (max-width: 1440px){
    padding: 14px 0;
  }
`;

const PriceContainer = styled.div`
  > p {
    line-height: 19px;
    font-size: 16px;
    color: #666;
  }
  >b {
    line-height: 28px;
    font-size: 24px;
    color: #000;
    margin-top: 6px;
  }
  @media only screen and (max-width: 1440px){
    >p{
      font-size: 14px;
    }
    >b{
      font-size: 22px;
    }
  }
`;

const Wishlist = styled.div`
  >img{
    margin-top: 10px;
    width: 80%;
  }
`;

const ProductCard = ({product}) => {
  let specs = JSON.parse(product.specifications);
  return (
    <Wrapper href={'/product/'+product.pid} target="_blank">
      <Container>
        <ImageContainer>
          <img
            src={product.image}
            alt={product.title}
          />
        </ImageContainer>
        <Title>{product.title}</Title>

        <Author>
          By <b>{specs.author}</b>
        </Author>
        <Binding>{specs.binding}</Binding>

        <Box>
          <PriceContainer>
            <p>Price starts at</p>
            <b>Rs. {product.mprice}</b>
          </PriceContainer>
          <Wishlist>
            <img src="../../../static/images/wishlist_empty.png"/>
          </Wishlist>
        </Box>
        {/* <AddToCart /> */}
      </Container>
    </Wrapper>
  );
};

export default ProductCard;
