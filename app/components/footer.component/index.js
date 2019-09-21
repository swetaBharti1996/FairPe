import React, { Component } from "react";
import styled from "styled-components";
import Content from "./content";

const Wrapper = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-top: 1px solid #ff632a;
  margin-top: 254px;
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
  flex-flow: row wrap;
  @media only screen and (max-width: 1440px) {
    width: 740px;
    height: 300px;
    margin-top: -200px;
  }
  @media only screen and (max-width: 992px) {
    width: 80%;
    margin: 0px auto;
    min-height: 400px;
    padding: 40px 20px;
    margin-top: -100px;
  }
`;
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 80px;
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
  width: 670px;
  height: 62px;
  display: flex;
  margin-top: -32px;
  margin-left: 635px;
  z-index: 100;
  @media only screen and (max-width: 1440px) {
    width: 480px;
    height: 54px;
    margin-left: 434px;
  }
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
const MailInput = styled.input`
  width: 55%;
  border-radius: 31px 0px 0px 31px;
  border: 1px solid #707070;
  font-size: 16px;
  padding: 20px 36px;
  line-height: 60px;
  vertical-align: middle;
  outline: none;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    border-radius: 5px;
    padding: 0px 15px;
    line-height: 5px;
  }
`;
const RespMailInput = styled.input`
  border: 1px solid #707070;
  font-size: 16px;
  display: none;
  vertical-align: middle;
  outline: none;
  @media only screen and (max-width: 992px) {
    display: block;
    width: 100%;
    border-radius: 5px;
    padding: 20px 15px;
    font-size: 14px;
    line-height: 5px;
  }
`;
const MailButton = styled.div`
  cursor: pointer;
  width: 40%;
  background: #220a3e;
  font-size: 16px;
  text-align: center;
  color: white;
  font-family: Helvetica, sans-serif;
  border-radius: 0px 31px 31px 0px;
  font-style: bold;
  padding: 20px 36px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 992px) {
    margin: 20px auto;
    z-index: 100;
    border-radius: 30px;
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
  align-items: flex-start;
  justify-content: center;
  > img {
    margin-top: 50px;
    width: 70%;
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
  width: 65%;
  margin-top: 150px;
  /* height: 74px; */
  @media only screen and (max-width: 1440px) {
    margin-top: 100px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const BoxTextHead = styled.div`
  width: 80%;
  /* height: 74px; */
  font-size: 30px;
  font-family: "Karla", sans-serif;
  font-weight: bolder;
  text-align: left;
  line-height: 36px;
  vertical-align: middle;
  letter-spacing: -1px;
  @media only screen and (max-width: 1440px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
const BoxText = styled.div`
  width: 80%;
  margin-top: 20px;
  height: 84px;
  font-family: "Karla", sans-serif;
  font-size: 18px;
  text-align: left;
  color: #333333;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;
const Foot = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 20px;
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
                " Will you deliver the products from a local shop to my place? "
              </BoxTextHead>
              <BoxText>
                We are listening, we know your pain.
                <br />
                We are working hard to make your life simpler.
                <br />
                Watch this space, something great is on its way!
              </BoxText>
            </LabelBox>
            <RespMailInput placeholder="Your email address/ Mobile number" />
          </Box>
          <RespMailButton>Notify me about this</RespMailButton>
          <MailBox>
            <MailInput placeholder="Your email address/ Mobile number" />
            <MailButton>Notify me about this</MailButton>
          </MailBox>
        </Container>
        <Content />
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
