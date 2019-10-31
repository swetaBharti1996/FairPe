import React,{Component} from "react";
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
`;

const Empty = styled.p`
  font-size: 20px;
  letter-spacing: -1px;
`;

class Specification extends Component{
  render(){
    const {specification} = this.props;
  return (
    <Wrapper>
      <Title>Specification</Title>

      <Body>
        <Empty>{specification}</Empty>
      </Body>
    </Wrapper>
  );
  }
};

export default Specification;
