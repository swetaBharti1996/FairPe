import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #360a6a;
  /* height: 50vh; */
  width: 100%;
  margin-top: -30px;
  border-radius: 10px;
`;
const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  > h3 {
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 24px;
    margin-bottom: 50px;
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
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
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
`;

class Form extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <h3>Not satisfied? Write to us.</h3>
            <input type="text" placeholder="Your full name*" />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Mobile" />
            <textarea rows="4" placeholder="Your concern/question*"></textarea>
          </Container>
        </Wrapper>
        <Button>Submit</Button>
      </>
    );
  }
}

export default Form;
