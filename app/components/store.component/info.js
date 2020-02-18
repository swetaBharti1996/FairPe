import React from "react";
import styled from "styled-components";
import _ from "lodash";

const StoreInformation = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  padding: 8px 16px;
  align-items: flex-start;
  flex-flow: column;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 0;
    margin-top: 16px;
    overflow: hidden;
  }
  > h1 {
    font: menu;
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: -0.3px;
    font-weight: 600;
    color: #555;
  }
  > div {
    margin: 24px 0 0;

    > h3 {
      float: left;
      width: 220px;
      font-weight: bold;
      font-size: 15px;
      letter-spacing: -0.2px;
      font: menu;
      font-weight: 600;
      color: #666;
    }
    > p {
      float: right;
      width: 62%;
      width: -webkit-calc(100% - 220px);
      width: calc(100% - 220px);
      color: #707070;
      letter-spacing: -0.3px;
      font: menu;
      font-size: 14px;
    }
  }
`;

const Info = props => {
  const { store } = props;
  return (
    <StoreInformation>
      <h1>Store Information</h1>

      <div>
        <h3>Communication</h3>
        <p>
          <span style={{ paddingRight: 4 }}>website</span>:
          <a style={{ paddingLeft: 4, color: "#6276f1" }} type="link">
            {store.website}
          </a>
        </p>
        <p>
          <span style={{ paddingRight: 4 }}>phone</span>:
          <a style={{ paddingLeft: 4, color: "#6276f1" }} type="link">
            {store.number && store.number.main}
          </a>
        </p>
        <p>
          <span style={{ paddingRight: 4 }}>email</span>:
          <a style={{ paddingLeft: 4, color: "#6276f1" }} type="link">
            {store.email}
          </a>
        </p>
      </div>

      <div>
        <h3 style={{ marginBottom: 20 }}>Payment methods</h3>

        {_.map(store.payment || [], (d, i) => {
          return (
            <p key={i}>
              <span
                style={{
                  paddingRight: 4,
                  display: "block",
                  textTransform: "capitalize"
                }}
              >
                {d.name}
              </span>
            </p>
          );
        })}
      </div>
    </StoreInformation>
  );
};

export default Info;
