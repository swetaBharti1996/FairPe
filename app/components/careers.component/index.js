import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper, Button } from "../../UI";
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
  margin-bottom: 300px;
  font-family: "Karla", sans-serif;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-bottom: 24px;
  }
`;
const HeaderContainer = styled.div`
  height: 60vh;
  width: 100%;
  background: url("../../static/images/careers.jpg");
  background-position: bottom;
  background-size: cover;
  margin-bottom: 50px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  /* background: transparent linear-gradient(108deg, rgba(255, 99, 42, 0.66) 0%, rgba(226, 0, 0, 0.66) 100%) 0% 0% no-repeat padding-box; */
  display: flex;
  background: transparent
    linear-gradient(
      270deg,
      #965252 0%,
      #ad170cd1 31%,
      #8f2912ba 65%,
      #803215c4 100%
    )
    0% 0% no-repeat padding-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubTitle = styled.p`
  color: #fff;
  font-weight: bolder;
  font-size: 48px;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-family: "Montserrat", sans-serif;
`;
const Container = styled.div`
  margin: 0 auto;
  > h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    color: #000;
    text-align: center;
    margin-bottom: 40px;
    font-weight: 600;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding-top: 40px;

    > h2 {
      letter-spacing: -0.5px;
    }
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;
const Card = styled.div`
  background: #fff;
  box-shadow: 0px 0px 12px #00000014;
  border-radius: 10px;
  padding: 30px 30px;
  width: 27%;
  > h2 {
    font-size: 24px;
    color: #000;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
    font-weight: 600;
  }
  > h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
  > p {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
    letter-spacing: -0.5px;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    flex: 1;
    padding: 24px;
    box-sizing: border-box;

    margin-bottom: 32px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const Data = [
  {
    title: "Full Stack Developer",
    location: "Bengaluru",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Sr. Data Scientist",
    location: "Bengaluru",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Big Data Engineer",
    location: "Bengaluru",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];
class Careers extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderContainer>
          <Overlay>
            <SubTitle>Careers</SubTitle>
            <Title>Join the wonderful team at FairPe</Title>
          </Overlay>
        </HeaderContainer>
        <PageWrapper style={{ position: "static" }}>
          <Container>
            <h2>Current Openings</h2>
            <CardContainer>
              {Data.map((item, key) => (
                <Card key={`career${key}`}>
                  <h2>{item.title}</h2>
                  <h3>{item.location}</h3>
                  <p>{item.description}</p>
                  <Link route={"contact"}>
                    <Button style={{ width: "45%" }}>Apply</Button>
                  </Link>
                </Card>
              ))}
            </CardContainer>
          </Container>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default Careers;
