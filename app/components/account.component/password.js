import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../../UI";
import { logout } from "../../actions/asyncAction";

const Wrapper = styled.div``;

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
  margin: 0;
`;
const Content = styled.div`
  padding: 24px 0;
  margin-top: 24px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin: 0;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  width: 51%;
  margin-bottom: 24px;
  display: block;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-bottom: 32px;
  }
`;

class Password extends Component {
  state = {
    previousPassword: "",
    password: "",
    password2: ""
  };

  _handleInput = event =>
    this.setState({ [event.target.name]: event.target.value });

  _onSave = () => {
    const { changePassword, logout } = this.props;
    changePassword(this.state)
      .then(resp => {
        console.log("Message Sent");
        this.setState({ previousPassword: "", password: "", password2: "" });
        // logout();
      })
      .catch(err => console.error(err));
  };

  render() {
    const { previousPassword, password, password2 } = this.state;
    return (
      <Wrapper>
        <Navbar>
          <NavItem>Change Password</NavItem>
        </Navbar>
        <Content>
          <Input
            name="previousPassword"
            type="password"
            placeholder="Enter Old password"
            value={previousPassword}
            onChange={this._handleInput}
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            style={{ marginBottom: 16 }}
            value={password}
            onChange={this._handleInput}
          />
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={this._handleInput}
          />

          <Button active style={{ marginTop: 24 }} onClick={this._onSave}>
            Save Changes
          </Button>
        </Content>
      </Wrapper>
    );
  }
}

export default Password;
