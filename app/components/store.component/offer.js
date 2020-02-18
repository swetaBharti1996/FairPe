import React, { useState } from "react";
import styled from "styled-components";
import { Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

const OfferContainer = styled.div`
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
  > div {
    &:nth-child(2) {
      min-height: 200px;
      /* background: #fff;
      border: 1px solid #e8e8e8; */
      width: 100%;
      margin-top: 24px;
    }

    &:first-child {
      > h1 {
        margin-bottom: 0;
        font: menu;
        font-size: 24px;
        margin-bottom: 0;
        letter-spacing: -0.3px;
        font-weight: 600;
        color: #555;
      }
    }
  }
`;

const OfferBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > div {
    margin-left: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: flex-start;
    /* border: 1px solid #e8e8e8; */
    padding: 4px 0px;
    margin-bottom: 8px;
    /* background: #fff; */
    flex-flow: column;
    justify-content: center;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    > p {
      &:nth-child(2) {
        margin-bottom: 0;
        letter-spacing: -0.2px;
        font-size: 13px;
        opacity: 0.9;
      }
      &:first-child {
        font: menu;
        letter-spacing: -0.3px;
        margin-bottom: 4px;
        font-size: 16px;
        margin-bottom: 6px;
      }
    }
  }
`;

const DetailBox = styled.div`
  margin-bottom: 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 34px;
  margin-right: 20px;
  > ul {
    margin-bottom: 0;
    > li {
      list-style-type: circle;
      > p {
        margin-bottom: 0;
        color: #444;
        font: menu;
        font-size: 14px;
        line-height: 1.3;
      }
    }
  }
`;

const Offer = props => {
  const { store } = props;

  const [detail, setDetail] = useState(0);

  const onDetail = id => {
    if (detail === id) setDetail();
    else setDetail(id);
  };

  return (
    <OfferContainer>
      <div>
        <h1>Offers </h1>
      </div>

      <div>
        <ul>
          {_.map(store.offer || [], (d, i) => {
            return (
              <li>
                <OfferBox>
                  <span>
                    <FontAwesomeIcon
                      icon={"tags"}
                      style={{
                        fontSize: "16px",
                        color: "#8289f3"
                      }}
                    />
                  </span>
                  <div>
                    <p style={{ textTransform: "capitalize" }}>{`${d.day}`}</p>
                    {/* <p>
                      Available in
                      <Tag style={{ marginLeft: 4 }} color="blue">
                        Online
                      </Tag>
                      &
                      <Tag style={{ marginLeft: 4 }} color="purple">
                        Offline
                      </Tag>
                    </p> */}
                  </div>

                  <span
                    style={{ marginLeft: 8, cursor: "pointer" }}
                    onClick={() => onDetail(i)}
                  >
                    <FontAwesomeIcon
                      icon={"angle-down"}
                      style={{
                        fontSize: "20px",
                        color: "#8289f3"
                      }}
                    />
                  </span>
                </OfferBox>

                {i === detail && (
                  <DetailBox>
                    <ul>
                      {_.map(d.offer, (o, i) => {
                        return (
                          <li>
                            <p>{`${o}`}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </DetailBox>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </OfferContainer>
  );
};

export default Offer;
