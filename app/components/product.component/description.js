import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 24px;
`;

const Title = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: #404041;
  margin: 0;
`;

const Body = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Empty = styled.p`
  font-size: 17px;
  letter-spacing: -0.4px;
  padding: 10px 0;
  margin: 0;
`;

class Description extends Component {
  render() {
    const { description } = this.props;
    return (
      <Wrapper>
        <Title>Description</Title>
        <Body>
          <Empty>{description}</Empty>
        </Body>
      </Wrapper>
    );
  }
}

export default Description;
