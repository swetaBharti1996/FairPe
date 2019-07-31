import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 328px;
  background: #f8f8f8;
  opacity: 100%;
  border-top: 1px solid #ff632a;
  position: relative;
`;
// background: #f8f8f8;

const Box = styled.div`
  width: 964px;
  height: 400px;

  margin: 0 auto;
  margin-top: -250px;
  background: #fff;
  z-index: 50;
  display: flex;
  box-shadow: 0px 0px 25px #ededed;
`;
const MailBox = styled.div`
  width: 670px;
  height: 62px;
  margin: auto;
  margin-left: 18%;
  margin-top: 360px;
  position: absolute;
  z-index: 10;
  display: flex;
`;
const MailInput = styled.input`
  width: 399px;
  height: 58px;
  border-radius: 31px 0px 0px 31px;
  border: 1px solid #707070;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  vertical-align: middle;
`;

const MailButton = styled.div`
  width: 271px;
  height: 62px;
  background: #220a3e;
  font-size: 18px;
  text-align: center;
  color: white;
  font-family: Helevetica Neue;
  border-radius: 0px 31px 31px 0px;
  font-style: bold;
  line-height: 60px;
  vertical-align: middle;
`;

const ImageBox = styled.div`
  width: 450px;
`;
const LabelBox = styled.div`
  width: 456px;
  margin-top: 100px;
  height: 74px;
`;
const BoxTextHead = styled.div`
  width: 456px;
  height: 74px;
  font-size: 30px;
  font-family: karla;
  font-style: bold;
  text-align: left;
  line-height: 36px;
  vertical-align: middle;
`;
const BoxText = styled.div`
  width: 411px;
  margin-top: 20px;
  height: 84px;
  font-size: 18px;
  text-align: left;
  color: #333333;
`;
const Logo = styled.div``;
const PolicyBox = styled.div`
  width: 155px;
  height: 17px;
  position: absolute;
  display: flex;
  bottom: 50px;
  right: 30px;
  color: #707070;
`;

const Policy = styled.div`
  text-align: left;
`;
const Terms = styled.div`
  position: absolute;
  right: 0px;
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Box>
          <ImageBox />
          <LabelBox>
            <BoxTextHead>
              "Will you deliver the products <br />
              from a local shop to my place?"
            </BoxTextHead>
            <BoxText>
              We are listening, we know your pain.
              <br /> We are working hard to make your life simpler.
              <br /> Watch this space, something great is on its way!
            </BoxText>
          </LabelBox>

          <MailBox>
            <MailInput placeholder="Your email address/ Mobile number" />
            <MailButton>Notify me about this</MailButton>
          </MailBox>
        </Box>
        <PolicyBox>
          <Policy>Policy</Policy>
          <Terms>Terms</Terms>
        </PolicyBox>
        <Logo>
          <img src="../../img/logo.png" style={{ width: 72, height: "auto" }} />
        </Logo>
      </Wrapper>
    );
  }
}

export default Footer;
