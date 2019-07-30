import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100px;
  background: #fff;
  opacity: 97%;
  box-shadow: 0 3px 8px 5% #000000;
`;

class Header extends Component {
  state = {};
  render() {
    return <Wrapper>Header</Wrapper>;
  }
}

export default Header;
