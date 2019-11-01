import styled from "styled-components";

export default styled.a`
  font-family: ${props => props.theme.font2};
  font-size: 0.95rem;
  position: relative;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  will-change: transform;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 0.525rem 1.55rem;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 0.25rem;
  border-radius: 24px;
  user-select: none;
  outline: none;
  cursor: pointer;
  letter-spacing: -0.5px;
  width: ${props => (props.fluid ? "100%" : "initial")};
  color: ${props =>
    props.active ? `${props.theme.white}` : `${props.theme.default}`};
  background: ${props =>
    props.active
      ? `linear-gradient(111deg, ${props.theme.primary}, ${props.theme.secondary})`
      : "#fff"};

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${props =>
      props.active ? `${props.theme.white}` : `${props.theme.default}`};
  }
`;
