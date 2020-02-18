import React, { Component } from "react";
import styled from "styled-components";
import Content from "./content";
import { message } from "antd";
import _ from "lodash";

const Wrapper = styled.div`
  margin: 0 auto;
  background: #f8f8f8;
  border-top: 1px solid ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.primary};
  position: relative;
  margin-top: 260px;
  width: 100%;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-top: 40px;
  }
`;
const Box = styled.div`
  position: absolute;
  top: -36%;
  left: -50%;
  right: -50%;
  width: 740px;
  height: 300px;
  margin: 0 auto;
  background: #fff;
  z-index: 50;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    position: static;
    width: 100%;
    height: 200px;
    margin-bottom: 40px;
    display: none;
  }
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  border: 1px solid #ededed;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-flow: row;
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.smallScreen};
  padding: 50px 0;
  margin-top: 165px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 93%;
    margin: 0 auto;
    padding: 24px 0;
  }
`;
// const Container = styled.div`
//   display: flex;
//   width: 80%;
//   margin: 0 auto;
//   flex-direction: column;
//   @media only screen and (max-width: ${props => props.theme.bpxlg}) {
//     width: 90%;
//   }
// `;
const MailBox = styled.div`
  display: flex;
  z-index: 100;
  position: absolute;
  right: 150px;
  bottom: -24px;
  flex-flow: column-reverse;
  line-height: 0.7;

  box-sizing: content-box !important;
  &::before {
    box-sizing: content-box !important;
  }
  &::after {
    box-sizing: content-box !important;
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
  }
`;
const MailInput = styled.input`
  border-radius: 31px 0px 0px 31px !important;
  border: 1px solid #707070;
  font-size: 14px;
  outline: none;
  padding: 17px 30px;
  border-right: none;
  width: 298px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
  }
`;

const MailButton = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  background: ${props => props.theme.primary};
  font-size: 16px;
  text-align: center;
  color: white;
  border-radius: 0px 31px 31px 0px;
  font-style: bold;
  padding: 17px 30px;
  letter-spacing: -0.5px;
  width: 200px;

  &:hover {
    color: #fff;
  }
`;
const RespMailButton = styled.div`
  cursor: pointer;
  display: none;
  width: 40%;
  background: #220a3e;
  font-size: 16px;
  text-align: center;
  color: white;
  font-family: Helvetica, sans-serif;
  font-style: bold;
  padding: 20px 36px;
  @media only screen and (max-width: 992px) {
    display: block;
    margin: 0px auto;
    margin-top: -30px;
    z-index: 100;
    border-radius: 30px;
  }
`;
const ImageBox = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: center;
  > div {
    margin: 0 24px;
    > img {
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
  }
`;

const LabelBox = styled.div`
  flex: 1;
  padding: 0 16px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 0 4px;
  }
`;

const BoxTextHead = styled.div`
  width: 80%;
  font-weight: bolder;
  text-align: left;
  vertical-align: middle;
  letter-spacing: -1px;
  font-size: 24px;
  line-height: 28px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 17px;
    line-height: 1.2;
  }
`;
const BoxText = styled.div`
  width: 80%;
  margin-top: 20px;
  height: 84px;
  font-size: 16px;
  text-align: left;
  color: #333333;
  letter-spacing: -0.2px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 13px;
    line-height: 1.2;
  }
`;
const Foot = styled.div`
  background: #f8f8f8;
`;

const FootInside = styled.div`
  width: ${props => props.theme.smallScreen};
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    padding: 16px;
  }
`;

const Logo = styled.img`
  display: flex;
  width: 72px;
  height: 16.25px;
`;
const PolicyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > p {
    color: #707070;
    font-size: 14px;
    font-family: "Karla", sans-serif;
    margin: 0;
    letter-spacing: -0.5px;
    margin-right: 24px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 992px) {
  }
`;

const Status = styled.p`
  color: #ff632a;
  font-size: 14px;
  text-align: right;
  margin-bottom: 10px;
  padding-right: 16px;
`;

class Footer extends Component {
  state = {
    email: ""
  };

  _handleInput = event =>
    this.setState({ [event.target.name]: event.target.value });

  _onSubscribe = email => {
    if (!_.isEmpty(email)) {
      this.props.subscribe({ email });
    }
  };

  render() {
    const { email } = this.state;

    const { error } = this.props;
    return (
      <>
        <Wrapper>
          <Container>
            <Box>
              <InnerBox>
                <ImageBox>
                  <div>
                    <img src="../../static/images/delivery.svg" />
                  </div>
                </ImageBox>
                <LabelBox>
                  <BoxTextHead>
                    " Will you deliver the products from a local shop to my
                    place? "
                  </BoxTextHead>
                  <BoxText>
                    We are listening, we know your pain.
                    <br />
                    We are working hard to make your life simpler.
                    <br />
                    Watch this space, something great is on its way!
                  </BoxText>
                </LabelBox>
                <MailBox>
                  <div style={{ display: "flex" }}>
                    <MailInput
                      name="email"
                      type="email"
                      value={email}
                      placeholder="Your email address/ Mobile number"
                      onChange={this._handleInput}
                    />

                    <MailButton onClick={() => this._onSubscribe(email)}>
                      Notify me about this
                    </MailButton>
                  </div>

                  {error && error.error && <Status>{error.error.error}</Status>}
                </MailBox>
              </InnerBox>
            </Box>

            <Content />
          </Container>
        </Wrapper>
        <Foot>
          <FootInside>
            <Logo src="../../static/images/logo.png" />
            <PolicyBox>
              <p>Terms & Service</p>
              <p>Privacy Policy</p>
            </PolicyBox>
          </FootInside>
        </Foot>
      </>
    );
  }
}

export default Footer;
