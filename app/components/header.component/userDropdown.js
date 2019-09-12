import styled from "styled-components";
import { Link, Router } from "../../../server/routes";

const AfterAuthContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #FF6300;
    border-left: 1px solid #ddd;
    padding-left: 40%;
`;

const AfterAuthDropdown = styled.ul`
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    padding: 10px 20px;
    width: 200px;
    top: 50px;
    right: 0px;
    z-index: 1000;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);

    > li {
        &:last-child {
        padding: 0;
        > a {
            display: block;
            width: 100%;
            font-weight: 500;
            border: 0;
            font-size: 14px;
            padding: 10px 0px;
            margin: 0;
            cursor: pointer;
            text-align: left;
            color: ${props => props.theme.secondary};
        }
        }
        > a {
            display: block;
            padding: 10px 0px;
            font-size: 14px;
            font-weight: 400;
            color: #220A3E;
            border-bottom: 1px solid #ccc;
            line-height: 1.3;
            &:hover{
                color: #ff6300;
            }
        }
    }

    @media screen and (max-width: ${props => props.theme.bpxs}) {
        position: static;
        padding-top: 2px;
        margin-top: 10px;
    }
`;

class UserDropdown extends React.Component {
  state = { authDropdown: false };

  onLogout = () => {
    this.props.logout();
  };

  onAfterClick = event => {
    this.props.notVisible();
  };
  render() {
    const { authDropdown } = this.state;
    return (
      <AfterAuthContainer
        tabIndex="0"
        onBlur={() => this.setState({ authDropdown: false })}
      >
        <a
          name="auth"
          onClick={() => {
            this.setState(prevState => ({
              authDropdown: !prevState.authDropdown
            }));
          }}
        >
          {this.props.name}
        </a>

        {authDropdown && (
          <AfterAuthDropdown>
            <li>
              <a
                onMouseDown={() =>
                  Router.pushRoute("account", { ext: "recent" })
                }
              >
                Recent Viewed
              </a>
            </li>
            <li>
              <a
                onMouseDown={() =>
                  Router.pushRoute("account", { ext: "wishlist" })
                }
              >
                My wishlist
              </a>
            </li>
            <li>
              <a
                onMouseDown={() =>
                  Router.pushRoute("account", { ext: "recent" })
                }
              >
                Change password
              </a>
            </li>
            <li>
              <a
                onMouseDown={() =>
                  Router.pushRoute("account", { ext: "recent" })
                }
              >
                Change phone number
              </a>
            </li>
            <li>
              <a onMouseDown={this.onLogout}>Logout</a>
            </li>
          </AfterAuthDropdown>
        )}
      </AfterAuthContainer>
    );
  }
}

export default UserDropdown;
