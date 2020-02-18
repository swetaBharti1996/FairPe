import styled from "styled-components";

export default styled.div`
  width: ${props => props.theme.smallScreen};
  margin: 0 auto;
  height: 100%;
  padding-bottom: 24px;
  margin-top: 70px;
  min-height: 500px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 93%;
    margin: 0 auto;
    margin-top: 80px;
  }
`;
