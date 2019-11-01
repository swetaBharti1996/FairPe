import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import Profile from "./profile";
import ProductCard from "../reusable/productCard2";
import Search from "../../containers/searchbar.container";
import { PageWrapper } from "../../UI";
import Wishlist from "./wishlist";
import Password from "./password";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 24px;
`;
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding: 16px;
`;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #999;
  padding-bottom: 8px;
`;
const NavItem = styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: ${props => props.theme.default};
  letter-spacing: -0.9px;
`;
const Content = styled.div`
  padding-top: 50px;
`;
const LoginText = styled.div`
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 50px;
  font-weight: bolder;
  font-size: 32px;
  color: #333;
`;
const NoLogin = styled.img`
  height: 400px;
  display: block;
  margin: auto;
`;
const MODE = {
  WISHLIST: "wishlist",
  PASSWORD: "password"
};
class Account extends Component {
  state = {
    active: MODE.WISHLIST
  };

  componentDidMount = () => {
    const { query } = this.props;
    this.setState({ active: query.ext });
  };

  _handleTabChange = tab => this.setState({ active: tab });

  _renderPage = page => {
    const { changePassword, logout, wishlistData, wishlist } = this.props;

    switch (page) {
      case MODE.WISHLIST:
        return <Wishlist wishlist={wishlist} wishlistData={wishlistData} />;

      case MODE.PASSWORD:
        return <Password changePassword={changePassword} logout={logout} />;

      default:
        return null;
    }
  };

  render() {
    const { user, query } = this.props;
    const { active } = this.state;

    return (
      <PageWrapper>
        {!_.isEmpty(user) ? (
          <>
            <Container>
              <Profile
                user={user}
                active={active}
                handleTabChange={this._handleTabChange}
              />
              <RightContainer>{this._renderPage(query.ext)}</RightContainer>
            </Container>
          </>
        ) : (
          <>
            <LoginText>
              Login to keep track of your favourite products!
            </LoginText>
            <NoLogin src="../../static/images/authenticate.svg" />
          </>
        )}
      </PageWrapper>
    );
  }
}

export default Account;
