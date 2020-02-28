import React from "react";
import styled from "styled-components";
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
  flex: 1;
  /* border: 1px solid; */
  height: 205px;
  margin-right: 24px;
  border-radius: 3px;
  display: flex;
  overflow: hidden;
  background-color: ${props => props.backColor};
  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-right: 0;
    display: flex;
    margin-bottom: 16px;
    height: 180px;
    flex: auto;
  }
`;

const LeftContainer = styled.div`
  flex: 1.3;
  /* border-right: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backColor};
  > img {
    width: 202px;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  background-color: ${props => props.backColor};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;

  > ul {
    margin: 0;
    display: flex;
    flex: 1;
    flex-flow: column;
    height: 100%;

    > li {
      flex: 1;
      border-bottom: 1px solid #fff;

      &:last-child {
        border-bottom: none;
      }
      > a {
        font: menu;
        color: #fff;
        font-size: 15px;
        letter-spacing: -0.2px;
        text-transform: capitalize;
        padding-left: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        font-weight: 600;

        &:hover {
          color: rgba(255, 255, 255, 0.65);
        }
      }
    }
  }
`;

const LogoContainer = styled.a``;

const storeCared = props => {
  const { data, key } = props;
  return (
    <Wrapper key={key} backColor={data.leftColor}>
      <LeftContainer backColor={data.leftColor}>
        <Link route={"store"} params={{ name: data.name }}>
          <a>
            <img style={{ width: 202 }} src={data.logo} />
          </a>
        </Link>
      </LeftContainer>
      <RightContainer backColor={data.rightColor}>
        <ul>
          <li>
            <Link route={"store"} params={{ name: data.name }}>
              <a>check offer</a>
            </Link>
          </li>
          <li>
            <Link route={"store"} params={{ name: data.name }}>
              <a>instore search</a>
            </Link>
          </li>
          <li>
            <Link route={"store"} params={{ name: data.name }}>
              <a>top products</a>
            </Link>
          </li>
          <li>
            <Link route={"store"} params={{ name: data.name }}>
              <a>more</a>
            </Link>
          </li>
        </ul>
      </RightContainer>
    </Wrapper>
  );
};

export default storeCared;
