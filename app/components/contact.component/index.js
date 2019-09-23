import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../UI";

const Wrapper = styled.div`
  min-height: 750px;
`;

const HeaderBackground = styled.div`
  background-image: url("../../static/images/contact.jpg");
  background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  background-position-y: -281px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    background-position-y: -165px;
  }
`;
const Header = styled.div`
  height: 307px;
  background: transparent
    linear-gradient(
      270deg,
      #c80707 0%,
      #ad170cd1 31%,
      #8f2912ba 65%,
      #803215c4 100%
    )
    0% 0% no-repeat padding-box;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  height: 100%;

  color: ${props => props.theme.white};
  > h2 {
    font-size: 32px;
    font-family: ${props => props.theme.font};
  }
  > h3 {
    font-size: 48px;
    font-family: ${props => props.theme.font};
    letter-spacing: -1px;
  }
`;

const Body = styled.div`
  position: relative;
`;

const Detail = styled.ul`
  width: 45%;
  margin-top: 50px;
  > li {
    padding-right: 0 24px;
    margin-bottom: 16px;
    > b {
      font-size: 22px;
      color: ${props => props.theme.primary};
    }

    > p {
      font-size: 17px;
      color: #5a5a5a;
    }
  }
`;

const FormContainer = styled.div`
  background: #360a6a 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  opacity: 1;
  width: 504px;
  position: absolute;
  height: 481px;
  top: -146px;
  right: 0;
`;

const FormInside = styled.div`
  position: relative;
  padding: 32px;
  > b {
    font-size: 32px;
    color: ${props => props.theme.white};
    margin-bottom: 32px;
    display: block;
  }
`;

const Input = styled.input`
  background: #ffffff30 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px !important;
  opacity: 1;
  border: none !important;
  height: 56px;
  width: 100%;
  padding: 10px 14px;
  font-size: 18px;
  margin-bottom: 24px !important;
  color: ${props => props.theme.white} !important;
`;

const TextArea = styled.textarea`
  background: #ffffff30 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px !important;
  opacity: 1;
  border: none !important;
  height: 56px;
  width: 100%;
  padding: 10px 14px;
  font-size: 18px;
  margin-bottom: 24px !important;
  color: ${props => props.theme.white} !important;
  height: 173px;
`;

const SubmitButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 25px;
  opacity: 1;
  height: 56px;
  width: 175px;
  text-align: center;
  color: #360a6a;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  border: none;
`;

class Contact extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <HeaderBackground>
          <Header>
            <PageWrapper>
              <HeaderContainer>
                <h2>Contact Us</h2>
                <h3>Get To Know Us Better</h3>
              </HeaderContainer>
            </PageWrapper>
          </Header>
        </HeaderBackground>

        <PageWrapper>
          <Body>
            <Detail>
              <li>
                <b>Address</b>
                <p>
                  #415, 2nd Floor, 16th Cross Road,, 17th Main Road, HSR Layout
                  Sector 4, Bengaluru, Karnataka 560102
                </p>
              </li>
              <li>
                <b>Email</b>
                <p>contact@fairpe.com</p>
              </li>
              <li>
                <b>Phone</b>
                <p>+91-7832452645</p>
              </li>
            </Detail>

            <FormContainer>
              <FormInside>
                <b>Send Us A Message</b>
                <Input type="text" placeholder="Name"></Input>
                <Input type="text" placeholder="Email"></Input>

                <TextArea placeholder="Message" rows="10"></TextArea>

                <SubmitButton>Submit</SubmitButton>
              </FormInside>
            </FormContainer>
          </Body>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default Contact;
