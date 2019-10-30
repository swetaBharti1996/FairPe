import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  /* border-bottom: 1px solid #ff632a; */
`;
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  > h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #000;
    margin-bottom: 10px;
  }
  > p {
    font-family: "Karla", sans-serif;
    font-size: 16px;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  width: 30%;
  flex-flow: column wrap;
  > h1 {
    font-family: "Karla", sans-serif;
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 10px;
    color: #000;
  }
  > a {
    font-family: "Karla", sans-serif;
    font-size: 16px;
    font-weight: lighter;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;
class Content extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftContainer>
            <h1>Who we are</h1>
            <p>
              We are India’s first-ever product search engine which can help you
              find the realtime pricing across online and offline stores. Now
              you can walk into any offline store and compare the prices with
              Amazon & Flipkart websites. Also, with just one search on FairPe,
              you can get the nearby store availability of any product
            </p>
          </LeftContainer>
          <RightContainer>
            <Column>
              <h1>Partner with us</h1>
              <Link route={"vendor"}>Become Partners</Link>
              <Link route={"about"}>About us</Link>
              <Link route={"careers"}>Careers</Link>
            </Column>
            <Column>
              <h1>Support</h1>
              <Link route={"faq"}>FAQ</Link>
              <Link route={"contact"}>Message us</Link>
            </Column>
            <Column>
              <h1>Contact us</h1>
              <Link>hello@fairpe.com</Link>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>Twitter</Link>
            </Column>
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Content;
