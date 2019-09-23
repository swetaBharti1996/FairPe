import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "../../../server/routes";
import { Button } from "../../UI";

const Wrapper = styled.div``;
const MiniTitle = styled.p`
  font-size: 21px;
  margin-bottom: 60px;
  color: #220a3e;
  font-weight: 600;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap-reverse;
`;
const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  width: 60%;

  font-family: ${props => props.theme.font};
  margin-bottom: 12px;
  letter-spacing: -1px;
  line-height: 1.2;
  color: #333333;
  font-weight: 600;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;
const SubTitle = styled.h2`
  margin: 0px;
  color: #333333;
  font-size: 22px;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
`;
const Content = styled.p`
  font-size: 16px;
  color: #707070;
  margin-bottom: 25px;
`;
const ShopImage = styled.img`
  width: 60%;
`;

class Description extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftContainer>
            <MiniTitle>Why Fairpe?</MiniTitle>
            <Title>India’s first platform for Offline products.</Title>
            <SubTitle>Enjoy the advantages of shopping locally</SubTitle>
            <Content>
              We believe the customer should always win! FairPe is a product
              search engine where you can find details of the products available
              both online and offline. Along with the required details we
              provide you real-time price comparison across more than 300 online
              stores and nearby offline stores. This gives our users more
              flexibility and options to make the right shopping decisions.
            </Content>
            <Link route={"about"}>
              <Button active style={{ width: 140 }}>
                Know More
              </Button>
            </Link>
          </LeftContainer>
          <RightContainer>
            <ShopImage src="../../static/images/shopping.svg" />
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Description;
