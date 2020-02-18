import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 27%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
  display: none;
  > p {
    font-size: 14px;
    color: ${props => props.theme.black600};
    text-align: right;
    margin: 0;
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 73%;
  }
`;

const StoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > img {
    height: auto;
    width: 40px;
    margin-right: 8px;
  }
  > p {
    color: #666666;
    font-size: 14px;
    font-weight: bolder;
    margin: 0;
  }
`;
class Stores extends Component {
  render() {
    return (
      <Wrapper>
        <p> Results showing from </p>
        <StoreContainer>
          <img src="../../static/images/amazon.jpg" />
          <img src="../../static/images/flipkart.jpg" />
          <img src="../../static/images/paytmmall.jpg" />
          <p>& Offline shops</p>
        </StoreContainer>
      </Wrapper>
    );
  }
}

export default Stores;
