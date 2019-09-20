import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 500px;
  text-align: center;
`;

class Contact extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <h1>Contact us page</h1>
      </Wrapper>
    );
  }
}

export default Contact;
