import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../UI";

const Show = styled.h1`
  font-size: 33px;
  margin-top: 30px;
`;

const Header = styled.div`
  background: transparent linear-gradient(117deg, #ff632a 0%, #b80303c7 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 273px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    color: ${props => props.theme.white};
    font-size: 38px;
    letter-spacing: -1px;
  }
`;

const Body = styled.div`
  width: 84%;
  margin: auto;
  padding-top: 40px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const Box = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-items: center;
  &:first-child {
    padding-bottom: 80px;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      padding-bottom: 24px;
    }
  }
  &:last-child {
    margin-bottom: 40px;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      flex-flow: column;

      margin-bottom: 24px;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin: 0;
    flex-flow: column-reverse;
  }
`;

const TextContainer = styled.div`
  width: 44%;

  > b {
    font-size: 29px;
    display: block;
    margin-bottom: 16px;
    font-family: "Montserrat";
  }
  > p {
    color: #6d6d6d;
    font-size: 16px;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    > b {
      font-size: 21px;
    }
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 384px;
  opacity: 1;
  > img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 80%;
  }
`;

const OverlayImage = styled.div`
  width: 50%;
  height: 384px;
  /* opacity: 1;
  position: absolute;
  top: -99px;
  left: 0; */
  > img {
    width: 100%;
    height: 100%;

    border-radius: 10px;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 80%;
  }
`;

class About extends Component {
  state = {};
  render() {
    return (
      <PageWrapper>
        <Body>
          <Box>
            <OverlayImage>
              <img src={"../../static/images/about1.svg"}></img>
            </OverlayImage>
            <TextContainer>
              <b>What is Fairpe ?</b>
              <p>
                We believe the customer should always win! Fairpe is a product
                search engine where you can find details of the products
                available both online and offline. Along with the required
                details we provide you real time price comparison across more
                than 300 online stores and nearby offline stores. This gives our
                users more flexibility and options to make the right shopping
                decisions.
              </p>
            </TextContainer>
          </Box>
          <Box>
            <TextContainer>
              <b>How fairpe works?</b>
              <p>
                Search the product you want to buy. Just like you search on
                Amazon or Flipkart. Check out the details of the product, along
                with the price on the online marketplaces and the nearby stores.
                With the help of latest tools and technologies and our in
                process patent algorithms we are able to analyse the products
                and prices all places and give you the right insights.
              </p>
            </TextContainer>
            <ImageContainer>
              <img src={"../../static/images/about2.svg"}></img>
            </ImageContainer>
          </Box>
        </Body>
      </PageWrapper>
    );
  }
}

export default About;
