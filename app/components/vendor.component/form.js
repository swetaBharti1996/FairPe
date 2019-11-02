import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: transparent
    linear-gradient(141deg, rgb(113, 119, 242) 0%, rgb(218, 180, 74) 100%) 0% 0%
    no-repeat padding-box;
  width: 100%;
  min-height: 80vh;
  border-radius: 10px;
  box-shadow: 0px 0px 12px #00000014;
  font-family: "Karla", sans-serif;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 5%;
  margin-bottom: 10%;
`;
const Header = styled.h1`
  color: #fff;
  font-size: 46px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 600;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-bottom: 24px;
    font-size: 28px;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }
`;
const SubHeader = styled.h4`
  color: #fff;
  font-size: 22px;
  font-family: "Karla", sans-serif;
  margin-bottom: 20px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-bottom: 8px;
  }
`;
const Content = styled.p`
  color: #fff;
  font-family: "Karla", sans-serif;
  margin-bottom: 20px;
  font-size: 16px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    letter-spacing: -0.3px;
  }
`;
const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px !important;
  font-size: 16px;
  width: 80%;
  border: none !important;
  padding: 20px 30px;
  color: #fff !important;
  margin-bottom: 20px !important;
  ::placeholder {
    color: #fff !important;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;
const Button = styled.button`
  font-weight: bolder;
  font-size: 18px;
  color: ${props => props.theme.primary};
  background: #fff;
  border: none;
  border-radius: 24px;
  width: 25%;
  outline: none;
  cursor: pointer;
  padding: 15px 0;
  font-family: "Karla", sans-serif;
  text-align: center;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 15px;

    width: 100%;
  }
`;

const Status = styled.p`
  text-align: left;
  color: red;
  font-size: 14px;
  margin-top: 8px;
  padding: 0 8px;
`;

class Form extends Component {
  state = {
    name: "",
    email: "",
    address: ""
  };

  _handleInput = event =>
    this.setState({ [event.target.name]: event.target.value });

  _onSubmit = () => {
    this.props.partner(this.state);
  };

  render() {
    const { name, email, address } = this.state;

    const { error } = this.props;
    return (
      <Wrapper>
        <Container>
          <Header>Register your shop with FairPe</Header>
          <SubHeader>But why?</SubHeader>
          <Content>
            These days every offline store requires online promotion to bring in
            more customers. So by registering your shop with FairPe we can drive
            some impressions to your store. It will help you get real-time
            consumers. Also, you can beat your competition to become the best
            store in your area.
          </Content>
          <Input
            name="name"
            type="text"
            placeholder="Your full name*"
            value={name}
            onChange={this._handleInput}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this._handleInput}
          />
          <Input
            name="address"
            type="text"
            placeholder="Location URL / Address of the shop*"
            value={address}
            onChange={this._handleInput}
          />
          <Button onClick={this._onSubmit}>Register shop</Button>
          {error && error.error && <Status>{error.error.error}</Status>}
        </Container>
      </Wrapper>
    );
  }
}

export default Form;
