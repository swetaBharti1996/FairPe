import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import _ from "lodash";
import Search from "../../containers/searchbar.container";

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

  > ul {
    display: flex;
    margin-bottom: 0;
    margin-left: 4px;
    > li {
      min-width: 87px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #e8e8e8;

      &:first-child {
        border-left: 1px solid #e8e8e8;
      }
    }
  }
`;

const SearchContainer = styled.div`
  width: 89%;
  margin-top: 24px;
`;

const WeekBody = styled.div`
  min-height: 64px;
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

const WeeklyOffer = () => {
  const [today, setDay] = useState();
  useEffect(() => {
    var d = new Date();
    var n = d.getDay();

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
              </li>
            );
          })}
        </ul>

        <WeekBody></WeekBody>
      </WeekTab>

      <SearchContainer>
        <Search placeholder={"Instore Search"} />
      </SearchContainer>
    </Wrapper>
  );
};

export default WeeklyOffer;
