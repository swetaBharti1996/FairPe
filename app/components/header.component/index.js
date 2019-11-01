import styled from "styled-components";
import Router from "next/router";
import UserDropdown from "./userDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../server/routes";
import { Button } from "../../UI";

const Wrapper = styled.div`
  height: 80px;
  background: ${props => props.theme.white};
  box-shadow: 0 2px 4px 0px ${props => props.theme.gray300};
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  z-index: 10000;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: ${props => props.theme.smallScreen};
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 90%;
    margin: 0 auto;
  }
`;
const Logo = styled.div`
  width: 120px;
  cursor: pointer;
  > img {
    width: 100%;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const List = styled.a`
  font-size: 17px;
  color: ${props => props.theme.default};
  cursor: pointer;
  padding: 6px;
  letter-spacing: -0.3px;
  transition-duration: 300ms;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;

  > li {
    margin-right: 6px;

    &:last-child {
      display: flex;
      justify-content: flex-end;
      width: 228px;
      flex: 1;
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

  // _renderSearch = () => {
  //   const { pathname } = this.props.newRouter;
  //   const { showSearch } = this.state;

  //   if (pathname === "/product") {
  //     return (
  //       <SearchContainer>
  //         {showSearch ? (
  //           <Search>
  //             <input></input>
  //             <NormalSearchIcon onClick={this._onSearch}>
  //               <FontAwesomeIcon icon="search" />
  //             </NormalSearchIcon>
  //           </Search>
  //         ) : (
  //           <SearchIcon onClick={this._onSearch}>
  //             <FontAwesomeIcon icon="search" />
  //           </SearchIcon>
  //         )}
  //       </SearchContainer>
  //     );
  //   } else return null;
  // };

  // _renderHeader = () => {
  //   window.addEventListener("scroll", () => {
  //     if (window.screenY > 500) this.setState({ displaySearch: true });
  //     else this.setState({ displaySearch: false });
  //   });
  // };

  render() {
    const { user, logout } = this.props;

    return (
      <Wrapper>
        <Container>
          <Logo>
            <img
              src="../../static/images/logo.png"
              onClick={() => Router.push(`/`)}
            />
          </Logo>

          <LeftContainer>
            {/* {this._renderSearch()} */}
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

              {user && !user.name ? (
                <li>
                  <Button
                    style={{ marginRight: 12 }}
                    onClick={() => this.props.openModal(true)}
                  >
                    Log In
                  </Button>

                  <Button active onClick={() => this.props.openModal(true)}>
                    Sign up
                  </Button>
                </li>
              ) : (
                <li>
                  <UserDropdown user={user} logout={logout} />
                </li>
              )}
            </Nav>
          </LeftContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
