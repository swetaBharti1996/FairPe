import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  background: #fff;
  display: flex;
  box-shadow: 0 2px 4px 0px #ddd;
  font-family: 'Karla', sans-serif;
  z-index: 10;
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.div`
  width:45%;
  >img{
    width: 120px;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 55%;
  justify-content: space-between;
`;
const Link = styled.a`
  font-size: 18px;
  color: #666666;
`;
const Button = styled.a`
  padding: 15px 30px;
  font-family: 'Helvetica Neue', sans-serif;
  /* font-weight: bolder; */
  font-size: 16px;
  border-radius: 24px;
  background: ${props=>props.active? 'linear-gradient(111deg, #FF632A, #E20000)': '#fff' };
  color: ${props => props.active? '#fff': "#000"};
  border: 1px solid #FF632A;
`;
class Header extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>
            <img src="../../static/images/logo.png"/>
          </Logo>
          <LinkContainer>
            <Link>Why FairPe</Link>
            <Link>Offline partners</Link>
            <Link>Contact us</Link>
            <Button>Refer and earn</Button>
            <Button active>Sign up</Button>
          </LinkContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
