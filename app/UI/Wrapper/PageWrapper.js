import styled from "styled-components";

export default styled.div`
  width: 75%;
  margin: auto;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 80%;
  }
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;
