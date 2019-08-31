import React, { Component } from "react";
import styled from "styled-components";
import Router from "next/router";

const Wrapper = styled.div`
  height: 100px;
  background: #fff;
  display: flex;
  box-shadow: 0 2px 4px 0px #ddd;
  font-family: 'Karla', sans-serif;
  z-index: 10;
  @media only screen and (max-width: 1440px){
    height: 80px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  width:45%;
  >img{
    width: 120px;
  }
  @media only screen and (max-width: 1440px){
    width: 35%;
    >img{
      width: 100px;
    }
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 55%;
  justify-content: space-between;
  @media only screen and (max-width: 1440px){
    width: 65%;
  }
`;
const Link = styled.a`
  font-size: 18px;
  color: #666666;
  @media only screen and (max-width: 1440px){
    font-size: 16px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-between;

`;
const Button = styled.a`
  padding: 15px 30px;
  /* font-family: 'Helvetica', sans-serif; */
  font-weight: bolder;
  /* width: 110px; */
  text-align: center;
  font-size: 16px;
  border-radius: 24px;
  background: ${props=>props.active? 'linear-gradient(111deg, #FF632A, #E20000)': '#fff' };
  color: ${props => props.active? '#fff': "#000"};
  border: 1px solid #FF632A;
  @media only screen and (max-width: 1440px){
    padding: 10px 25px;
    font-size: 14px;
  }
`;
class Header extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo onClick={()=> Router.push(`/`)}>
            <img src="../../static/images/logo.png"/>
          </Logo>
          <LinkContainer>
            <Link>Why FairPe</Link>
            <Link>Offline partners</Link>
            <Link>Contact us</Link>
            <ButtonContainer>
              <Button>Refer and earn</Button>
              <Button active onClick={()=> this.props.openModal()}>Sign up</Button>
            </ButtonContainer>
          </LinkContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
