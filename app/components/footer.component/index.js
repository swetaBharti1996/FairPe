import React, { Component } from "react";
import styled from "styled-components";
import Content from "./content";

const Wrapper = styled.div`
  margin: 0 auto;
  background: #f8f8f8;
  border-top: 1px solid ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.primary};
  position: relative;
  margin-top: 260px;
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
`;

const InnerBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  border: 1px solid #ededed;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-flow: row wrap;
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 50px 0;
  margin-top: 165px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 90%;
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
`;
const MailInput = styled.input`
  border-radius: 31px 0px 0px 31px !important;
  border: 1px solid #707070;
  font-size: 14px;
  outline: none;
  padding: 17px 30px;
  border-right: none;
`;

const MailButton = styled.a`
  cursor: pointer;
  display: block;
  width: 40%;
  background: ${props => props.theme.primary};
  font-size: 16px;
  text-align: center;
  color: white;
  border-radius: 0px 31px 31px 0px;
  font-style: bold;
  padding: 17px 30px;
  letter-spacing: -0.5px;
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
      height: 100%;
    }
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    justify-content: flex-start;
    img {
      width: 40%;
      margin-top: 30px;
    }
  }
`;

const LabelBox = styled.div`
  flex: 1;
  padding: 0 16px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const BoxTextHead = styled.div`
  width: 80%;
  font-weight: bolder;
  text-align: left;
  vertical-align: middle;
  letter-spacing: -1px;
  font-size: 24px;
  line-height: 28px;
  @media only screen and (max-width: 1440px) {
    font-size: 24px;
    line-height: 28px;
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
`;
const Foot = styled.div`
  background: #f8f8f8;
`;

const FootInside = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 20px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 90%;
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
  width: 10%;
  justify-content: space-between;
  > p {
    color: #707070;
    font-size: 14px;
    font-family: "Karla", sans-serif;
  }
  @media only screen and (max-width: 992px) {
    width: 30%;
  }
`;

class Footer extends Component {
  state = {
    email: null
  };

  _handleInput = event =>
    this.setState({ [event.target.name]: event.target.value });

  _onSubscribe = email => this.props.subscribe({ email });
  render() {
    const { email } = this.state;
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
              <p>Policy</p>
              <p>Terms</p>
            </PolicyBox>
          </FootInside>
        </Foot>
      </>
    );
  }
}

export default Footer;
