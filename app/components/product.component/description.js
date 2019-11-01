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
`;

const Body = styled.div`
  background: #eee;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  border-radius: 15px;
`;

const Empty = styled.p`
  font-size: 20px;
  letter-spacing: -1px;
  padding: 10px;
`;

class Description extends Component{


render(){
  const {description}= this.props;
  console.log("description",this.props.description)
  return (
    <Wrapper>
      <Title>Description</Title>
      <Body>
        <Empty>{description}</Empty>
      </Body>
    </Wrapper>
  );
}
};

export default Description;
