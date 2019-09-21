import styled from "styled-components";

export default styled.div`
  width: 75%;
  margin: auto;
  height: 100%;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 90%;
  }
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;
