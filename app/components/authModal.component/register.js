import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 50%;
  > a {
    font-size: 18px;
    color: #ff632a;
    text-align: right;
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
class Register extends Component {
  render() {
    const { data, changeHandler, error } = this.props;
    const {
      registerName,
      registerEmail,
      registerPhone,
      registerPassword1,
      registerPassword2
    } = data;

    return (
      <>
        <FormContainer>
          <Title>Signup to shop at best prices</Title>
          <CustomInput
            type="text"
            placeholder="Your full name *"
            name="registerName"
            value={registerName}
            onChange={changeHandler}
          />
          {error && error.error && <Status>{error.error.name}</Status>}
          <CustomInput
            type="text"
            placeholder="Email ID *"
            name="registerEmail"
            value={registerEmail}
            onChange={changeHandler}
          />
          {error && error.error && <Status>{error.error.email}</Status>}
          <CustomInput
            type="text"
            placeholder="Mobile number *"
            name="registerPhone"
            value={registerPhone}
            onChange={changeHandler}
          />
          {error && error.error && <Status>{error.error.mobile}</Status>}
          <CustomInput
            type="password"
            placeholder="Password *"
            name="registerPassword1"
            value={registerPassword1}
            onChange={changeHandler}
          />
          {error && error.error && <Status>{error.error.password}</Status>}
          <CustomInput
            type="password"
            placeholder="Confirm Password *"
            name="registerPassword2"
            value={registerPassword2}
            onChange={changeHandler}
          />
          {error && error.error && (
            <Status>{error.error.password2 || error.error.error}</Status>
          )}
        </FormContainer>
      </>
    );
  }
}

export default Register;
