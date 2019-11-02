import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #360a6a;
  /* height: 50vh; */
  width: 100%;
  margin-top: 30px;
  border-radius: 10px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin: 0;
  }
`;
const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  > h3 {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 24px;
    margin-bottom: 50px;
    font-weight: 600;
  }
  > input {
    font-family: "Karla", sans-serif;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px !important;
    font-size: 18px;
    width: 100%;
    border: none !important;
    padding: 20px 30px;
    color: #fff !important;
    margin-bottom: 20px !important;
    ::placeholder {
      color: #fff !important;
    }
  }
  > textarea {
    font-family: "Karla", sans-serif;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px !important;
    font-size: 18px;
    width: 100%;
    border: none !important;
    padding: 20px 30px;
    color: #fff !important;
    margin-bottom: 20px !important;
    ::placeholder {
      color: #fff !important;
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin: 0;
    padding: 24px;
    width: 100%;

    box-sizing: border-box;
    > h3 {
      font-size: 21px;
      margin-bottom: 24px;
    }
    > input {
      padding: 13px 25px;
    }
  }
`;
const Button = styled.button`
  padding: 13px;
  text-align: center;
  border: none;
  font-size: 18px;
  background: transparent linear-gradient(106deg, #ff632a 0%, #e20000 100%);
  color: #fff;
  width: 32%;
  margin-left: 10%;
  margin-top: -25px;
  font-weight: bolder;
  border-radius: 24px;
  outline: none;
  cursor: pointer;
`;

const Status = styled.p`
  color: #ff632a;
  font-size: 14px;
  margin-bottom: 0;
  text-align: left;
  margin-top: 8px;
  padding: 0 54px;
`;

class Form extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    question: ""
  };

  _handleInput = event =>
    this.setState({ [event.target.name]: event.target.value });

  _onSubmit = () => {
    this.props.question(this.state);
  };

  render() {
    const { name, email, mobile, question } = this.state;
    const { error } = this.props;

    return (
      <>
        <Wrapper>
          <Container>
            <h3>Not satisfied? Write to us.</h3>
            <input
              name="name"
              type="text"
              placeholder="Your full name*"
              value={name}
              onChange={this._handleInput}
            />
            <input
              name="email"
              type="text"
              placeholder="Email*"
              value={email}
              onChange={this._handleInput}
            />
            <input
              name="mobile"
              type="number"
              placeholder="Mobile"
              value={mobile}
              onChange={this._handleInput}
            />
            <textarea
              name="question"
              rows="4"
              placeholder="Your concern/question*"
              value={question}
              onChange={this._handleInput}
            ></textarea>
          </Container>
        </Wrapper>
        <Button onClick={this._onSubmit}>Submit</Button>{" "}
        {error && error.error && (
          <Status>{error.error.password2 || error.error.error}</Status>
        )}
      </>
    );
  }
}

export default Form;
