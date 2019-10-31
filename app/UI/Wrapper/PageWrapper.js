import styled from "styled-components";

export default styled.div`
  width: 75%;
  margin: auto;
  height: 100%;
  padding-bottom: 24px;
  position: relative;
  top: 100px;
  min-height: 500px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 90%;
    top: 80px;
  }
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;
