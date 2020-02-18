import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoreContainer = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  padding: 8px 16px;
  align-items: flex-start;

  flex-flow: column;
  font: menu;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 0;
  }

  > div {
    &:nth-child(2) {
      display: flex;

      flex-flow: column;
      justify-content: center;
      align-items: flex-start;
      font: menu;
      flex: 1;
      > p {
        margin: 0;
      }
    }
    &:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      > h1 {
        font: menu;
        font-size: 24px;
        margin-bottom: 0;
        letter-spacing: -0.3px;
        font-weight: 600;
        color: #555;
      }
      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        margin-bottom: 24px;
      }
    }
  }
`;

const Basic = props => {
  const { store } = props;
  return (
    <StoreContainer>
      <div>
        <h1>{store.name}</h1>
        <Button
          size={"large"}
          style={{
            borderRadius: 3,
            font: "menu",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            target={"_blank"}
            href={store.website}
          >
            website
            <FontAwesomeIcon
              style={{
                paddingLeft: 8,
                fontSize: "38px",
                color: "#bf79f7"
              }}
              icon={"angle-right"}
            />
          </a>
        </Button>
      </div>

      <div>
        <p style={{ paddingBottom: 16, fontSize: 15 }}>
          Electronic Store - Mobile,Laptop and other electronic accessories
        </p>
        <p style={{ fontSize: 15, width: "85%" }}>
          Municipal No. 27/1, 100 feet Road, Ashoka Pillar Rd, 2nd Block,
          Jayanagar, Bengaluru, Karnataka 560011
        </p>
        <p style={{ fontSize: 13, color: "#6276F1", padding: "4px 0" }}>
          0.45 km
        </p>
        <p>-----------</p>
      </div>
    </StoreContainer>
  );
};

export default Basic;
