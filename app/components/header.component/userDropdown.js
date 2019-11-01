import styled from "styled-components";
import { Link, Router } from "../../../server/routes";

const AfterAuthContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.primary};
  border-left: 1px solid #999;
  padding: 6px 24px;
  font-size: 18px;
  background: #f7f7f7;
`;

const AfterAuthDropdown = styled.ul`
  background-color: #eee;
  border-radius: 5px;
  position: absolute;
  padding: 10px 20px;
  width: 200px;
  top: 70px;
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
        font-size: 18px;
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
      font-size: 18px;
      font-weight: 400;
      color: #220a3e;
      border-bottom: 1px solid #ccc;
      line-height: 1.3;
      &:hover {
        color: ${props => props.theme.primary};
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.bpxs}) {
    top: 46px;
    right: 8px;
  }
`;

class UserDropdown extends React.Component {
  state = { authDropdown: false };

  onLogout = () => this.props.logout();

  onAfterClick = event => this.props.notVisible();

  render() {
    const { authDropdown } = this.state;

    const { user } = this.props;

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
          {user.name}
        </a>

        {authDropdown && (
          <AfterAuthDropdown>
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
                  Router.pushRoute("account", { ext: "password" })
                }
              >
                Change password
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
