import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 400px;
  width: 100%;
  height: 328px;
  background: #f8f8f8;
  opacity: 100%;
  border-top: 1px solid #ff632a;
`;
const Box = styled.div`
  width: 964px;
  height: 400px;
  margin: 0 auto;
  margin-top: -250px;
  background: #fff;
  z-index: 50;
  display: flex;
  border: 1px solid #ededed;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex-direction: row;
`;
const Container = styled.div`
  margin: auto;
  /* display: flex; */
  width: 964px;
  margin-bottom: 100px;
`;
const MailBox = styled.div`
  width: 670px;
  height: 62px;
  display: flex;
  margin-top: -32px;
  margin-left: 250px;
`;
const MailInput = styled.input`
  width: 399px;
  border-radius: 31px 0px 0px 31px;
  border: 1px solid #707070;
  font-size: 18px;
  padding: 20px 36px;
  line-height: 60px;
  vertical-align: middle;
`;
const MailButton = styled.div`
  width: 271px;
  background: #220a3e;
  font-size: 18px;
  text-align: center;
  color: white;
  font-family: Helvetica, sans-serif;
  border-radius: 0px 31px 31px 0px;
  font-style: bold;
  padding: 20px 36px;
`;

const ImageBox = styled.div`
  display: flex;
  width: 35%;
  align-items: flex-start;
  justify-content: center;
  > img {
    margin-top: 50px;
    width: 70%;
  }
`;

const LabelBox = styled.div`
  width: 65%;
  margin-top: 150px;
  height: 74px;
`;
const BoxTextHead = styled.div`
  width: 456px;
  height: 74px;
  font-size: 30px;
  font-family: "Karla", sans-serif;
  font-weight: bolder;
  text-align: left;
  line-height: 36px;
  vertical-align: middle;
`;
const BoxText = styled.div`
  width: 411px;
  margin-top: 20px;
  height: 84px;
  font-family: "Karla", sans-serif;
  font-size: 18px;
  text-align: left;
  color: #333333;
`;
const Foot = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  justify-content: space-between;
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
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <Box>
            <ImageBox>
              <img src="../../static/images/deliver.svg" />
            </ImageBox>
            <LabelBox>
              <BoxTextHead>
                "Will you deliver the products from a local shop to my place?"
              </BoxTextHead>
              <BoxText>
                We are listening, we know your pain.
                <br />
                We are working hard to make your life simpler.
                <br />
                Watch this space, something great is on its way!
              </BoxText>
            </LabelBox>
          </Box>
          <MailBox>
            <MailInput placeholder="Your email address/ Mobile number" />
            <MailButton>Notify me about this</MailButton>
          </MailBox>
        </Container>
        <Foot>
          <Logo src="../../static/images/logo.png" />
          <PolicyBox>
            <p>Policy</p>
            <p>Terms</p>
          </PolicyBox>
        </Foot>
      </Wrapper>
    );
  }
}

export default Footer;
