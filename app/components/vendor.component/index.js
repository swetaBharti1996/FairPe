import React, { Component } from "react";
import styled from "styled-components";
import Form from "./form";
import { PageWrapper } from "../../UI";

const Wrapper = styled.div`
  margin: auto;
  padding-top: 30px;
  display: flex;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;
const BigColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 59%;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;
const SmallColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 39%;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;
const Data = styled.div`
  margin-bottom: 30px;
`;
const Image = styled.div`
  height: 50vh;
  width: 100%;
  background: ${props => "url(" + props.image + ")"};
  background-origin: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 12px #00000014;
  margin-bottom: 10px;
`;
const Desc = styled.p`
  font-size: 16px;
  font-style: italic;
  font-family: "Karla", sans-serif;
  color: #666;
  :hover {
    color: #ff632a;
    cursor: pointer;
  }
`;

class Vendor extends Component {
  render() {
    const { partner, error } = this.props;
    return (
      <PageWrapper>
        <Wrapper>
          <Row>
            <BigColumn>
              <Data>
                <Form partner={partner} error={error} />
              </Data>
              <Data>
                <Image image="../../static/images/vendor_2.jpg" />
                <Desc>Blossom Bookhouse, MG Road</Desc>
              </Data>
            </BigColumn>
            <SmallColumn>
              <Data>
                <Image image="../../static/images/vendor_1.jpg" />
                <Desc>MiniSo, Jayanagar</Desc>
              </Data>
              <Data>
                <Image image="../../static/images/vendor_3.jpg" />
                <Desc>Blossom Bookhouse, MG Road</Desc>
              </Data>
            </SmallColumn>
          </Row>
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Vendor;
