import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 500px;
  text-align: center;
`;
const Show = styled.h1`
  font-size: 33px;
  margin-top: 30px;
`;

class Offline extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Show>Offline Partners page</Show>
      </Wrapper>
    );
  }
}

export default Offline;
