import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper, Button } from "../../UI";

const Wrapper = styled.div`
  margin-bottom: 300px;
  font-family: "Karla", sans-serif;
`;
const HeaderContainer = styled.div`
  height: 60vh;
  width: 100%;
  background: url("../../static/images/careers.jpg");
  background-position: bottom;
  background-size: cover;
  margin-bottom: 50px;
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
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
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
  }
  > h3 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #ff632a;
  }
  > p {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
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
        <PageWrapper>
          <Container>
            <h2>Current Openings</h2>
            <CardContainer>
              {Data.map((item, key) => (
                <Card key={`career${key}`}>
                  <h2>{item.title}</h2>
                  <h3>{item.location}</h3>
                  <p>{item.description}</p>
                  <Button style={{ width: "45%" }}>Apply</Button>
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
