import styled from "styled-components";

export default styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: 0 0;
  font-family: ${props => props.theme.font} !important;
  font-size: 14px !important;
  > p {
    margin-bottom: 0;
  }
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: -1; */
`;
