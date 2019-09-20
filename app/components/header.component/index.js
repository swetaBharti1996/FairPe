import React, { Component } from "react";
import styled from "styled-components";
import Router from "next/router";
import UserDropdown from "./userDropdown";
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
  height: 100px;
  background: #fff;
  display: flex;
  box-shadow: 0 2px 4px 0px #ddd;
  font-family: "Karla", sans-serif;
  z-index: 10;
  @media only screen and (max-width: 1440px) {
    height: 80px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 50%;
  > img {
    width: 120px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1440px) {
    width: 50%;
    > img {
      width: 100px;
    }
  }
  @media only screen and (max-width: 992px) {
    > img {
      width: 80px;
    }
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 35%;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    width: 35%;
  }
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
const List = styled.a`
  font-size: 18px;
  color: #666666;
  cursor: pointer;
  @media only screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: flex-end;
  @media only screen and (max-width: 992px) {
    width: 40%;
  }
`;
const Button = styled.a`
  cursor: pointer;
  padding: 15px 30px;
  /* font-family: 'Helvetica', sans-serif; */
  font-weight: bolder;
  /* width: 110px; */
  text-align: center;
  font-size: 16px;
  border-radius: 24px;
  background: ${props =>
    props.active ? "linear-gradient(111deg, #FF632A, #E20000)" : "#fff"};
  color: ${props => (props.active ? "#fff" : "#000")};
  border: 1px solid #ff632a;
  @media only screen and (max-width: 1440px) {
    padding: 10px 25px;
    font-size: 14px;
  }
  @media only screen and (max-width: 992px) {
  }
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <Logo>
            <img
              src="../../static/images/logo.png"
              onClick={() => Router.push(`/`)}
            />
          </Logo>
          <LinkContainer>
            <Link route={"about"}>
              <List>Why FairPe</List>
            </Link>

            <Link route={"offline"}>
              <List>Offline partners</List>
            </Link>
            <Link route={"contact"}>
              <List>Contact us</List>
            </Link>
          </LinkContainer>
          <ButtonContainer>
            {/* <Button>Refer and earn</Button> */}
            {!this.props.user ? (
              <Button active onClick={() => this.props.openModal(true)}>
                Sign up
              </Button>
            ) : (
              <UserDropdown name={this.props.user} logout={this.props.logout} />
            )}
          </ButtonContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
