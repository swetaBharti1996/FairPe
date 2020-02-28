import React from "react";
import styled from "styled-components";
import _ from "lodash";

const Wrapper = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  padding: 8px 16px;
  align-items: flex-start;
  flex-flow: column;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 0;
    margin-top: 16px;
  }
`;

const Header = styled.div`
  > h1 {
    margin-bottom: 0;
    font: menu;
    font-size: 24px;
    margin-bottom: 0;
    letter-spacing: -0.3px;
    font-weight: 600;
    color: #555;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;

  margin-top: 24px;

  > ul {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    > li {
      flex: 1;
      min-height: 100px;

      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }

      > a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: 0.3s;
        background: #f8f8f8;

        &:hover {
          background: #eee;
        }
      }
    }
  }
`;

const BRAND1 = [
  { image: "../../static/images/puma.png" },
  { image: "../../static/images/samsung.png" },
  { image: "../../static/images/iphone.png" },
  { image: "../../static/images/boat.png" }
];

const BRAND2 = [
  { image: "../../static/images/nike.png" },
  { image: "../../static/images/adidas.png" },
  { image: "../../static/images/sony.png" },
  { image: "../../static/images/amazon.png" }
];

const PopularBrand = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Popular Brands</h1>
      </Header>

      <Container>
        <ul>
          {_.map(BRAND1, (b, i) => {
            return (
              <li>
                <a>
                  <img src={b.image} />
                </a>
              </li>
            );
          })}
        </ul>

        <ul>
          {_.map(BRAND2, (b, i) => {
            return (
              <li>
                <a>
                  <img src={b.image} />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default PopularBrand;
