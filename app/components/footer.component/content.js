import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
  display: flex;
  width: ${props => props.theme.smallScreen};
  margin: 0 auto;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    margin: 0 auto;
  }
`;
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
    justify-content: flex-start;
  }
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
    font-weight: 600;
  }
  > p {
    font-family: "Karla", sans-serif;
    font-size: 16px;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    margin-bottom: 24px;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    flex-flow: column;
  }
`;
const Column = styled.div`
  display: flex;
  width: 30%;
  flex-flow: column wrap;
  > h1 {
    font-family: "Karla", sans-serif;
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 8px;
    color: #000;
  }
  > a {
    font-family: "Karla", sans-serif;
    font-size: 16px;
    font-weight: lighter;
    margin-bottom: 4px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.primary};
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    margin-bottom: 16px;
    > h1 {
    }
    &:last-child {
      margin-bottom: 0;
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
              <Link route={"vendor"}>
                <a>Become Partners </a>
              </Link>
              <Link route={"about"}>
                <a>About us</a>
              </Link>
              <Link route={"careers"}>
                <a> Careers</a>
              </Link>
            </Column>
            <Column>
              <h1>Support</h1>
              <Link route={"faq"}>FAQ</Link>
              <Link route={"contact"}>Message us</Link>
            </Column>
            <Column>
              <h1>Contact us</h1>
              <Link>
                <a
                  href={"https://www.facebook.com/searchonfairpe/"}
                  target={"_blank"}
                >
                  Facebook
                </a>
              </Link>
              <Link>
                <a
                  href={"https://www.linkedin.com/company/searchonfairpe/"}
                  target={"_blank"}
                >
                  LinkedIn
                </a>
              </Link>
              <Link>
                <a href={"https://twitter.com/FairpeS"} target={"_blank"}>
                  Twitter
                </a>
              </Link>
            </Column>
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Content;
