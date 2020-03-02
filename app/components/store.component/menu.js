import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import _ from "lodash";
import { Button } from "antd";

const Wrapper = styled.div``;

const StoreMenu = styled.a`
  display: block;
  padding: 14px 18px;
  border-bottom: 1px solid #e8e8e8;
  font: menu;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;

  background: ${props => (props.sel ? "#e8e8e8" : "#ffffff")};
  color: ${props => (props.sel ? "#6376f1" : "#666")};

  border-right: 3px solid ${props => (props.sel ? "#6376f1" : "transparent")};

  &:hover {
    color: ${props => (props.sel ? "#6376f1" : "#555")};
  }
`;

const StoreImage = styled.div`
  width: 217px;
  height: 217px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px #6376f136;
  border-radius: 6px;
  position: absolute;
  left: 65px;
  top: -30%;
  background: #ffffff 0% 0% no-repeat padding-box;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 125px;
    height: 125px;
    left: 6%;
    top: -70%;
  }

  > img {
    width: 68%;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100px;
  top: 162px;
  padding-left: 16px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: fit-content;
    min-height: auto;
    top: 0;
    padding-left: 16px;
    left: 200px;
  }
  > h1 {
    margin-bottom: 8px;
    font: menu;
    text-transform: capitalize;
    font-weight: bold;
    color: #555;
    font-size: 17px;
  }

  > ul {
    display: flex;
    flex-flow: column;
    margin: 0;
    > li {
      > div {
        display: flex;
        > span {
        }

        > p {
          margin: 0;
        }
      }
    }
  }
`;

const Menu = props => {
  const { MENU, store, setBlock, block } = props;
  return (
    <Wrapper>
      <StoreImage>
        <img src={"../../static/images/offlineshop.svg"} />
      </StoreImage>

      <InfoContainer>
        <h1>{store.name}</h1>

        <ul>
          <li>
            <div>
              <Button
                type="link"
                style={{
                  font: "menu",
                  color: "#6276f1",
                  fontSize: 14,
                  paddingLeft: 0
                }}
              >
                <span style={{ paddingRight: 8 }}>
                  <FontAwesomeIcon icon={"globe"} />
                </span>
                website
              </Button>
            </div>
          </li>

          <li>
            <div>
              <Button
                type="link"
                style={{
                  font: "menu",
                  color: "#6276f1",
                  fontSize: 14,
                  paddingLeft: 0
                }}
              >
                <span style={{ paddingRight: 8 }}>
                  <FontAwesomeIcon icon={"phone"} />
                </span>
                1800-889-1044
              </Button>
            </div>
          </li>
        </ul>
      </InfoContainer>

      {/* <div>
        <ul>
          {_.map(MENU, (data, i) => {
            return (
              <li>
                <StoreMenu
                  href={`#${data.type}`}
                  onClick={() => {
                    setBlock(data.type);
                  }}
                  sel={data.type === block ? true : false}
                >
                  {i === 0 ? (
                    <span>{store.name}</span>
                  ) : (
                    <span>{data.name}</span>
                  )}
                </StoreMenu>
              </li>
            );
          })}
        </ul>
      </div> */}
    </Wrapper>
  );
};

export default Menu;
