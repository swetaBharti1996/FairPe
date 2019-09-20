import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 500px;
  text-align: center;
`;

class Offline extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <h1>Offline Partners page</h1>
      </Wrapper>
    );
  }
}

export default Offline;
