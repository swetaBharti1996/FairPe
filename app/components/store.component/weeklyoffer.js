import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Tag } from "antd";
import _ from "lodash";
import Search from "../../containers/searchbar.container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { CheckableTag } = Tag;

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

const WeekTab = styled.div`
  margin-top: 32px;
  display: flex;
  flex-flow: column;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: row;
  }

  > ul {
    display: flex;
    margin-bottom: 0;
    margin-left: 4px;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      flex-flow: column;
    }
    > li {
      min-width: 87px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #e8e8e8;

      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        border-right: none;
      }

      &:first-child {
        border-left: 1px solid #e8e8e8;

        @media only screen and (max-width: ${props => props.theme.bpxs}) {
          border-left: none;
        }
      }
    }
  }
`;

const SearchContainer = styled.div`
  width: 89%;
  margin-top: 40px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const WeekBody = styled.div`
  margin: 0 4px;
  min-height: 64px;
  box-shadow: 0px 3px 6px #6376f126;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  margin-top: 40px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-top: 0;
    justify-content: center;
  }

  > ul {
    margin-bottom: 0;
    > li {
      border-bottom: 1px solid #d9d9d9;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 8px;
      padding-bottom: 4px;

      &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      > span {
        margin-right: 16px;
      }
      > p {
        margin-bottom: 0;
        font: menu;
        font-size: 15px;
        @media only screen and (max-width: ${props => props.theme.bpxs}) {
          line-height: 1.25;
        }
      }
    }
  }
`;

const WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const WeekButton = styled.a`
  display: inline-block;
  padding: 8px 24px;
  border: 3px;
  text-transform: capitalize;
  font: menu;
  transition: 0.2s;
  border-radius: 3px;
  overflow: hidden;
  font-weight: bold;
  background: ${props => (props.selected ? "#6376f1" : "#fff")};
  color: ${props => (props.selected ? "#fff" : "#666")};

  &:hover {
    color: ${props => (props.selected ? "#fff" : "#6376f1")};
  }
`;

const DownButton = styled.span`
  position: absolute;
  bottom: -32px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const WeeklyOffer = () => {
  const [today, setDay] = useState();
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    var d = new Date();
    var n = d.getDay();

    if (screen.width < 576) {
      setShowOffer(true);
    }

    setDay(WEEK[n]);
  }, []);

  return (
    <Wrapper>
      <Header>
        <h1>Today's Offers</h1>
      </Header>

      <WeekTab>
        <ul>
          {_.map(WEEK, (data, i) => {
            return (
              <li>
                <WeekButton
                  onClick={() => {
                    setDay(data);
                  }}
                  selected={data === today ? true : false}
                  type="link"
                >
                  {data}
                </WeekButton>
                {data === today && (
                  <DownButton>
                    <CheckableTag
                      checked={showOffer}
                      style={{ cursor: "pointer", display: "flex", margin: 0 }}
                      onChange={() => {
                        if (showOffer) setShowOffer(false);
                        else setShowOffer(true);
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: 18 }}
                        icon="angle-down"
                      />
                    </CheckableTag>
                  </DownButton>
                )}
              </li>
            );
          })}
        </ul>

        {showOffer ? (
          <WeekBody>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon="wallet" />
                </span>
                <p>
                  Upto <b style={{ color: "#6276F0" }}>Rs 3000/-</b> cashback
                  from standard chartered
                </p>
              </li>

              <li>
                <span>
                  <FontAwesomeIcon icon="university" />
                </span>
                <p>
                  <b style={{ color: "#6276F0" }}>Rs 400/-</b> Cashback on min
                  transaction <b style={{ color: "#6276F0" }}>Rs 5000/- </b>
                  mobikwik
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon="credit-card" />
                </span>
                <p>
                  <b style={{ color: "#6276F0" }}>Rs 1000/- </b>
                  Cashback on min transaction
                  <b style={{ color: "#6276F0" }}>Rs 10000/-</b> on mobikwik
                </p>
              </li>
            </ul>
          </WeekBody>
        ) : (
          <div style={{ width: "100%", minHeight: 60 }}></div>
        )}
      </WeekTab>

      <SearchContainer>
        <Search placeholder={"Instore Search"} />
      </SearchContainer>
    </Wrapper>
  );
};

export default WeeklyOffer;
