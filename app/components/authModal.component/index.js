import React, { Component } from "react";
import styled from "styled-components";
import Login from "./login";
import Register from "./register";

const Wrapper = styled.div`
  /* display: none; Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 11111; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  /* overflow: hidden; */
`;
const Container = styled.div`
  font-family: "Karla", sans-serif;
  background-color: #fff;
  margin: auto;
  padding: 30px 0px;
  border: 1px solid #eee;
  box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.4);
  width: 800px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  @media only screen and (max-width: 1440px) {
    width: 700px;
    padding: 15px 0px;
  }
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;
const Cross = styled.div`
  text-align: right;
  width: 95%;
  > span {
    font-size: 16px;
    color: ${props => props.theme.primary};
    padding: 12px 16px;
    background: #eeeeee;
    border-radius: 50%;
    cursor: pointer;
    @media only screen and (max-width: 1440px) {
      font-size: 14px;
      padding: 10px 12px;
    }
  }
`;
const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  > img {
    width: 100%;
    height: auto;
    display: block;
    margin: auto;
  }
`;
const Footer = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.primary};
  > p {
    font-size: 16px;
    color: #707070;
    text-align: center;
    margin-bottom: 20px;
    > span {
      color: ${props => props.theme.primary};
      font-size: 18px;
      font-weight: bolder;
      cursor: pointer;
    }
    @media only screen and (max-width: 1440px) {
      margin-bottom: 10px;
    }
  }
`;
const Button = styled.button`
  display: block;
  margin: auto;
  margin-top: -30px;
  border: none;
  background: ${props =>
    props.active
      ? `linear-gradient(111deg, ${props.theme.primary}, ${props.theme.secondary})`
      : "#fff"};
  border-radius: 30px;
  padding: 20px;
  width: 150px;
  text-align: center;
  font-family: "Karla", sans-serif;
  color: #fff;
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 30px;
  outline: none;
  cursor: pointer;
  @media only screen and (max-width: 1440px) {
    padding: 15px;
    font-size: 16px;
    margin-top: -25px;
    margin-bottom: 20px;
  }
`;

const MODE = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER"
};
class AuthModal extends Component {
  state = {
    mode: MODE.LOGIN,
    loginEmail: "",
    loginPassword: "",
    registerName: "",
    registerEmail: "",
    registerPhone: "",
    registerPassword1: "",
    registerPassword2: ""
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeMode = () => {
    if (this.state.mode == MODE.LOGIN) this.setState({ mode: MODE.REGISTER });
    else this.setState({ mode: MODE.LOGIN });
  };
  buttonHandler = () => {
    if (this.state.mode == MODE.LOGIN) {
      let data = {};
      data.email = this.state.loginEmail;
      data.password = this.state.loginPassword;
      this.props.login(data);
    } else {
      let data = {};
      data.name = this.state.registerName;
      data.email = this.state.registerEmail;
      data.mobile = this.state.registerPhone;
      data.password = this.state.registerPassword1;
      data.password2 = this.state.registerPassword2;
      this.props.signup(data);
    }
  };
  render() {
    const { error } = this.props;
    return (
      <Wrapper>
        <Container>
          <Cross>
            <span onClick={() => this.props.closeModal(false)}>&times;</span>
          </Cross>
          <Logo>
            <img src="../../static/images/logo.png" />
          </Logo>
          {this.state.mode == MODE.LOGIN ? (
            <Login
              data={this.state}
              changeHandler={this.changeHandler}
              error={error}
            />
          ) : (
            <Register
              data={this.state}
              changeHandler={this.changeHandler}
              error={error}
            />
          )}
          <Footer>
            <Button active onClick={() => this.buttonHandler()}>
              {this.state.mode == MODE.LOGIN ? "Login" : "Sign up"}
            </Button>
            {this.state.mode == MODE.LOGIN ? (
              <p>
                Not a member yet?
                <span
                  style={{ marginLeft: 8, letterSpacing: -0.5 }}
                  onClick={() => this.changeMode()}
                >
                  Sign up
                </span>
              </p>
            ) : (
              <p>
                Already a member?
                <span
                  style={{ marginLeft: 8, letterSpacing: -0.5 }}
                  onClick={() => this.changeMode()}
                >
                  Login
                </span>
              </p>
            )}
          </Footer>
        </Container>
      </Wrapper>
    );
  }
}

export default AuthModal;
