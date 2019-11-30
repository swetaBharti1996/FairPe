import styled from "styled-components";
import Router from "next/router";
import UserDropdown from "./userDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../server/routes";
import { Button } from "../../UI";
import { Drawer } from "antd";

const CustomDrawer = styled(Drawer)`
  > div[class="ant-drawer-content-wrapper"] {
    position: absolute;
    top: 80px;
  }
`;

const Wrapper = styled.div`
  height: 80px;
  background: ${props => props.theme.white};
  box-shadow: 0 2px 4px 0px ${props => props.theme.gray300};
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  z-index: 100;
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
  margin: 0;

  > li {
    margin-right: 6px;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      margin-bottom: 8px;
    }

    &:last-child {
      display: flex;
      justify-content: flex-end;
      width: 228px;
      flex: 1;
      position: relative;

      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        justify-content: flex-start;
        width: 100%;
        margin-top: 32px;
      }
    }

    &:nth-child(3) {
      margin-right: 40px;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
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
  margin-right: 40px;
  width: 35%;
  position: relative;
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  display: none;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 28px;
    margin-right: 16px;
    display: block;
    cursor: pointer;
    color: ${props => props.theme.default};

    &:active {
      color: inherit;
    }

    &:hover {
      color: inherit;
    }
  }
`;

class Header extends React.Component {
  state = { showSearch: false, displaySearch: false, drawer: false, term: "" };

  _onSearch = event => {
    this.setState(prevState => ({
      showSearch: !prevState.showSearch
    }));

    // if (this.state.showSearch) {
    //   this.props.onSearch(term);
    // }
  };

  _toggleDrawer = () => {
    this.setState(prevState => ({
      drawer: !prevState.drawer
    }));
  };

  _renderSearch = () => {
    const { pathname } = this.props.newRouter;
    const { showSearch, term } = this.state;

    if (pathname === "/product") {
      return (
        <SearchContainer>
          {/* {showSearch ? ( */}
          <Search>
            <input
              value={term}
              onChange={() => this.setState({ term: event.target.value })}
            />
            <NormalSearchIcon
              onClick={() => {
                term && this.props.onSearch(term);
              }}
            >
              <FontAwesomeIcon icon="search" />
            </NormalSearchIcon>
          </Search>
          {/* // ) : ( //{" "}
          <SearchIcon onClick={this._onSearch}>
            // <FontAwesomeIcon icon="search" />
            //{" "}
          </SearchIcon>
          // )} */}
        </SearchContainer>
      );
    } else return null;
  };

  // _renderHeader = () => {
  //   window.addEventListener("scroll", () => {
  //     if (window.screenY > 500) this.setState({ displaySearch: true });
  //     else this.setState({ displaySearch: false });
  //   });
  // };

  render() {
    const { user, logout } = this.props;

    const { drawer } = this.state;

    return (
      <Wrapper>
        <Container>
          <div>
            <Icon onClick={this._toggleDrawer}>
              <FontAwesomeIcon icon="bars" />
            </Icon>
          </div>
          <Logo>
            <img
              src="../../static/images/logo.png"
              onClick={() => Router.push(`/`)}
            />
          </Logo>

          <LeftContainer>
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

        <CustomDrawer
          placement="left"
          visible={drawer}
          onClose={this._toggleDrawer}
          closable={false}
        >
          <Nav>
            <li>
              <Link route={"vendor"}>
                <List onClick={() => this.setState({ drawer: false })}>
                  Become Partner
                </List>
              </Link>
            </li>
            <li>
              <Link route={"about"}>
                <List onClick={() => this.setState({ drawer: false })}>
                  Why FairPe
                </List>
              </Link>
            </li>

            <li>
              <Link route={"contact"}>
                <List onClick={() => this.setState({ drawer: false })}>
                  Contact us
                </List>
              </Link>
            </li>

            {user && !user.name ? (
              <li>
                <Button
                  style={{ marginRight: 12 }}
                  onClick={() => {
                    this.props.openModal(true);
                    this.setState({ drawer: false });
                  }}
                >
                  Log In
                </Button>

                <Button
                  active
                  onClick={() => {
                    this.props.openModal(true);
                    this.setState({ drawer: false });
                  }}
                >
                  Sign up
                </Button>
              </li>
            ) : (
              <li>
                <UserDropdown user={user} logout={logout} />
              </li>
            )}
          </Nav>
        </CustomDrawer>
      </Wrapper>
    );
  }
}

export default Header;
