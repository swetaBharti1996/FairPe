import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../UI";

const Wrapper = styled.div`
  min-height: 500px;
`;

const Show = styled.h1`
  font-size: 33px;
  margin-top: 30px;
`;

const Header = styled.div`
  background: transparent linear-gradient(117deg, #ff632a 0%, #b80303c7 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  height: 273px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    color: ${props => props.theme.white};
    font-size: 48px;
    letter-spacing: -1px;
  }
`;

const Body = styled.div`
  width: 84%;
  margin: auto;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 100%;
  }
`;

const Box = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &:first-child {
    justify-content: flex-end;
    padding-bottom: 80px;
  }
  &:last-child {
    margin-bottom: 40px;
  }
`;

const TextContainer = styled.div`
  width: 44%;

  > b {
    font-size: 36px;
    display: block;
    margin-bottom: 16px;
    font-family: "Montserrat";
  }
  > p {
    color: #6d6d6d;
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  width: 591px;
  height: 422px;
  opacity: 1;
  > img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
  }
`;

const OverlayImage = styled.div`
  width: 591px;
  height: 422px;
  opacity: 1;
  position: absolute;
  top: -99px;
  left: 0;
  > img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
  }
`;

class About extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Header>
          <h2>Why Fairpe ?</h2>
        </Header>
        <PageWrapper>
          <Body>
            <Box>
              <OverlayImage>
                <img src={"../../static/images/about1.jpg"}></img>
              </OverlayImage>
              <TextContainer>
                <b>Changing Your Shopping Experience</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl
                  vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
                  et dui fringilla consectetur id nec massa. Aliquam erat
                  volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt
                  neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
                  Duis nunc eros, mattis at dui ac, convallis semper risus. In
                  adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                </p>
              </TextContainer>
            </Box>
            <Box>
              <TextContainer>
                <b>What We do and why we do it?</b>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl
                  vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
                  et dui fringilla consectetur id nec massa. Aliquam erat
                  volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt
                  neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
                  Duis nunc eros, mattis at dui ac, convallis semper risus. In
                  adipiscing ultrices tellus, in suscipit massa vehicula eu.”
                </p>
              </TextContainer>
              <ImageContainer>
                <img src={"../../static/images/about2.jpg"}></img>
              </ImageContainer>
            </Box>
          </Body>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default About;
