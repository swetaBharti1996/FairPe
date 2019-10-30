import styled from "styled-components";
import Router from "next/router";
import UserDropdown from "./userDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../server/routes";
import { Button } from "../../UI";

const Wrapper = styled.div`
  height: 100px;
  background: ${props => props.theme.white};
  display: flex;
  box-shadow: 0 2px 4px 0px ${props => props.theme.gray300};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;

  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    height: 80px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 90%;
  }
`;
const Logo = styled.div`
  > img {
    width: 120px;
    cursor: pointer;
  }
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    > img {
      width: 100px;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpmd}) {
    > img {
      width: 80px;
    }
  }
`;

const List = styled.a`
  font-size: 18px;
  color: ${props => props.theme.gray700};
  cursor: pointer;
  padding: 6px;
  letter-spacing: -0.2px;
  transition-duration: 300ms;

  &:hover {
    color: ${props => props.theme.primary};
  }
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    font-size: 16px;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;

  > li {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }

    &:nth-child(4) {
      margin-right: 8px;
    }
    &:nth-child(3) {
      margin-right: 40px;
    }
  }
`;
const SearchIcon = styled.a`
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  line-height: 19px;
  cursor: pointer;
  position: absolute;
  right: 0;
  font-size: 17px;
  padding: 4px 11px;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0s;
    background-color: #f8f8f8;
    background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
    border: 1px solid #c6c6c6;
  }
  &:active {
    background-color: #f6f6f6;
    background-image: -webkit-linear-gradient(top, #f6f6f6, #f1f1f1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const NormalSearchIcon = styled.a`
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  line-height: 19px;
  font-size: 17px;
  cursor: pointer;
  padding: 4px 11px;
  border: 1px solid transparent;
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #b2b2b2;
  border-radius: 24px;
  padding: 0.525rem 1.55rem;
  padding-right: 0;
  > input {
    width: 100%;
    border: none;
    box-shadow: none;
    outline: none;
  }
`;

const SearchContainer = styled.div`
  margin-right: 16px;
  width: 35%;
  position: relative;
  display: flex;
  align-items: center;
`;

class Header extends React.Component {
  state = { showSearch: false, displaySearch: false };

  _onSearch = event => {
    this.setState(prevState => ({
      showSearch: !prevState.showSearch
    }));
  };

  _renderSearch = () => {
    const { pathname } = this.props.newRouter;
    const { showSearch } = this.state;

    if (pathname === "/product") {
      return (
        <SearchContainer>
          {showSearch ? (
            <Search>
              <input></input>
              <NormalSearchIcon onClick={this._onSearch}>
                <FontAwesomeIcon icon="search" />
              </NormalSearchIcon>
            </Search>
          ) : (
            <SearchIcon onClick={this._onSearch}>
              <FontAwesomeIcon icon="search" />
            </SearchIcon>
          )}
        </SearchContainer>
      );
    } else return null;
  };

  _renderHeader = () => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 500) this.setState({ displaySearch: true });
      else this.setState({ displaySearch: false });
    });
  };

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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end"
            }}
          >
            {this._renderSearch()}
            <Nav>
              <li>
                <Link route={"vendor"}>
                  <List>Become Partner</List>
                </Link>
              </li>
              <li>
                <Link route={"about"}>
                  <List>Why FairPe</List>
                </Link>
              </li>

              <li>
                <Link route={"contact"}>
                  <List>Contact us</List>
                </Link>
              </li>
              <li>
                {!this.props.user ? (
                  <Button onClick={() => this.props.openModal(true)}>
                    Log In
                  </Button>
                ) : (
                  <UserDropdown
                    name={this.props.user}
                    logout={this.props.logout}
                  />
                )}
              </li>
              <li>
                {!this.props.user ? (
                  <Button active onClick={() => this.props.openModal(true)}>
                    Sign up
                  </Button>
                ) : (
                  <UserDropdown
                    name={this.props.user}
                    logout={this.props.logout}
                  />
                )}
              </li>
            </Nav>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
