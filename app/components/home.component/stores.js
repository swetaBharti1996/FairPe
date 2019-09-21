import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 25%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
  @media only screen and (max-width: 1440px) {
    width: 35%;
  }
  > p {
    font-size: 14px;
    color: #666666;
    text-align: right;
    margin-bottom: 9px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    > p {
      margin-bottom: 5px;
    }
  }
`;
const StoreContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > img {
    height: 45px;
  }
  > p {
    color: #666666;
    font-size: 16px;
    font-weight: bolder;
  }
`;
class Stores extends Component {
  render() {
    return (
      <Wrapper>
        <p> Results showing from </p>
        <StoreContainer>
          <img src="../../static/images/amazon.png" />
          <img src="../../static/images/flipkart.png" />
          <img src="../../static/images/paytm.png" />
          <p>& Offline shops</p>
        </StoreContainer>
      </Wrapper>
    );
  }
}

export default Stores;
