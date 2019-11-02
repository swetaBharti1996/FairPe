import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 50%;
  > a {
    font-size: 18px;
    color: ${props => props.theme.primary};
    text-align: right;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 1440px) {
    width: 50%;
  }
  @media only screen and (max-width: 992px) {
    width: 80%;
  }
`;
const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;
const CustomInput = styled.input`
  border: none;
  font-size: 16px;
  color: #707070;
  padding: 20px 35px;
  border: 1px solid #707070;
  border-radius: 5px;
  margin-bottom: 10px !important;
  width: 100%;
  font-family: "Karla", sans-serif;
  @media only screen and (max-width: 1440px) {
    padding: 15px 25px;
  }
`;
const Status = styled.p`
  color: #ff632a;
  font-size: 14px;
  text-align: right;
  margin-bottom: 10px;
`;
class Login extends Component {
  render() {
    const { changeHandler, data, error } = this.props;
    const { loginEmail, loginPassword } = data;

    return (
      <>
        <FormContainer>
          <Title>Login to your account</Title>
          <CustomInput
            type="text"
            placeholder="Email/Mobile number"
            name="loginEmail"
            value={loginEmail}
            onChange={changeHandler}
          />
          {error && error.error && <Status>{error.error.email}</Status>}
          <CustomInput
            type="password"
            placeholder="Password"
            name="loginPassword"
            value={loginPassword}
            onChange={changeHandler}
          />
          {error && error.error && (
            <Status>{error.error.password || error.error.error}</Status>
          )}
          {/* <a>Forgot password?</a> */}
        </FormContainer>
      </>
    );
  }
}

export default Login;
