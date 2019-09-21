import styled from "styled-components";
import Router from "next/router";
import UserDropdown from "./userDropdown";
import { Link } from "../../../server/routes";
import { Button } from "../../UI";

const Wrapper = styled.div`
  height: 100px;
  background: ${props => props.theme.white};
  display: flex;
  box-shadow: 0 2px 4px 0px ${props => props.theme.gray300};
  @media only screen and (max-width: 1440px) {
    height: 80px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 80%;
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
  @media only screen and (max-width: 1440px) {
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

const List = styled.a`
  font-size: 18px;
  color: ${props => props.theme.gray700};
  cursor: pointer;
  padding: 6px;
  letter-spacing: -0.2px;
  @media only screen and (max-width: 1440px) {
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

class Header extends React.Component {
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

          <Nav>
            <li>
              <Link route={"about"}>
                <List>Why FairPe</List>
              </Link>
            </li>
            <li>
              <Link route={"offline"}>
                <List>Offline partners</List>
              </Link>
            </li>
            <li>
              <Link route={"contact"}>
                <List>Contact us</List>
              </Link>
            </li>
            <li>
              <Button>Log In</Button>
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
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
