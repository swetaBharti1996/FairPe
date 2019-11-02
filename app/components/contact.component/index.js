import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../UI";

const Wrapper = styled.div`
  min-height: 750px;
  margin-top: 80px;
`;

const HeaderBackground = styled.div`
  background-image: url("../../static/images/contact.jpg");
  background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  background-position-y: -281px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
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

  > h2 {
    font-size: 32px;
    font-family: ${props => props.theme.font};
    margin: 0;
    font-weight: 600;
    color: ${props => props.theme.white};
  }
  > h3 {
    font-size: 48px;
    font-family: ${props => props.theme.font};
    letter-spacing: -1px;
    margin: 0;
    font-weight: 600;
    color: ${props => props.theme.white};
  }
`;

const Body = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding-top: 32px;

    flex-flow: column-reverse;
  }
`;

const Detail = styled.ul`
  width: 45%;
  margin-top: 50px;
  > li {
    padding-right: 0 24px;
    margin-bottom: 16px;
    > b {
      font-size: 22px;
    }

    > p {
      font-size: 17px;
      color: #5a5a5a;
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 90%;
    margin: 0 auto;

    > li {
      > b {
        letter-spacing: -1px;
      }
      > p {
        letter-spacing: -0.5px;
      }
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

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    position: static;
    width: 100%;
    margin-bottom: 24px;
    height: auto;
  }
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

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 24px;

    > b {
      font-size: 24px;
      letter-spacing: -1px;
      margin-bottom: 24px;
    }
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
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-bottom: 16px !important;
    height: 40px;
  }
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
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 130px;
    height: 39px;
    font-size: 16px;
  }
`;

const Status = styled.p`
  color: #ff632a;
  font-size: 14px;
  text-align: left;
  padding: 0 47px;
  margin-bottom: 0;
  margin-top: -19px;
`;

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  _handleInput = event =>
    this.setState({ [event.target.name]: event.target.value });

  _onSubmit = () => {
    this.props.contact(this.state);
  };

  render() {
    const { name, email, message } = this.state;

    const { error } = this.props;
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

        <PageWrapper style={{ marginTop: 0, position: "static" }}>
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
                <Input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={this._handleInput}
                ></Input>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={this._handleInput}
                ></Input>

                <TextArea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  value={message}
                  onChange={this._handleInput}
                ></TextArea>

                <SubmitButton onClick={this._onSubmit}>Submit</SubmitButton>
              </FormInside>

              {error && error.error && (
                <Status>{error.error.password2 || error.error.error}</Status>
              )}
            </FormContainer>
          </Body>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default Contact;
