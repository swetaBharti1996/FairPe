import React, { useState } from "react";
import { Rate, Button, message, Modal, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import _ from "lodash";
import { getStoreReview } from "../../actions/syncAction";

const { TextArea } = Input;

const ReviewContainer = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  padding: 8px 16px;
  align-items: flex-start;
  flex-flow: column;
  > h1 {
    font: menu;
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: -0.3px;
    font-weight: 600;
    color: #555;
  }

  > div {
    display: flex;
    flex-flow: column;
  }
  > ul {
    margin-top: 40px;
    position: relative;
    width: 100%;
    > li {
      position: relative;
      padding: 30px;
      border: 1px solid #e8e8e8;
      border-radius: 2px;
      background: #fff;
      margin: 0 0 15px;

      > div {
        &:last-child {
          max-width: 60em;
          margin: 20px 0 10px;
          word-wrap: break-word;
          margin-top: 14px;
          > p {
            margin-bottom: 0;
            color: #666;
          }
        }

        &:first-child {
          position: relative;
          white-space: nowrap;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          > div {
            &:first-child {
              margin-right: 16px;
            }
            &:last-child {
              > span {
                color: rgba(0, 0, 0, 0.85);
                letter-spacing: -0.3px;
              }
            }
          }
        }
      }
    }
  }
`;

const NoReview = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;

  margin-top: 24px;
  width: 100%;
  align-items: center;
  border-radius: 3px;
  background: #fff;
  border: 1px solid #e8e8e8;
  margin-bottom: 24px;

  > p {
    margin-bottom: 0;
    font: menu;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.3px;
    color: #666;
  }
`;

const Review = props => {
  const {
    authModal,
    auth,
    reviewModal,
    modal,
    postStoreReview,
    store,
    review,
    getStoreReview
  } = props;
  const [data, setData] = useState({ rate: "", para: "" });
  const [loading, setLoading] = useState(false);

  const onReview = () => {
    if (_.isEmpty(auth.name)) {
      message.error("Login to add review", 1);
      authModal(true);
    } else {
      reviewModal(true);
    }
  };

  const onSave = () => {
    setLoading(true);
    postStoreReview(
      { id: store.id, rate: data.rate, review: data.para },
      bol => {
        setLoading(false);

        if (bol) {
          getStoreReview(() => {});
          setData({ rate: "", para: "" });
          reviewModal(false);
        } else {
          message.error("error", 1);
        }
      }
    );
  };

  return (
    <ReviewContainer>
      <h1>Review</h1>

      <div>
        <Rate disabled allowHalf value={0} />
        <span>0 reviews</span>
        <Button
          type={"primary"}
          style={{ borderRadius: 3, marginTop: 8 }}
          size="large"
          onClick={onReview}
        >
          Rate Store
        </Button>
      </div>

      {_.isEmpty(review) ? (
        <NoReview>
          <p>No Review Yet</p>
        </NoReview>
      ) : (
        <ul>
          {_.map(review.data, (d, i) => {
            return (
              <li>
                <div>
                  <div>
                    <FontAwesomeIcon
                      style={{ fontSize: "24px", opacity: 0.7 }}
                      icon="user-circle"
                    />
                  </div>
                  <div>
                    <span>{d.name}</span> on {d.date}
                  </div>
                </div>
                <div>
                  <Rate
                    style={{
                      fontSize: "14px",
                      marginBottom: 4,
                      color: "#6276f1"
                    }}
                    disabled
                    allowHalf
                    value={d.rating}
                  />
                  <p>{d.review}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <Modal
        centered
        destroyOnClose={true}
        visible={modal.review}
        onCancel={() => reviewModal(false)}
        onOk={onSave}
        title={"Add Review"}
        okText={"Save"}
        confirmLoading={loading}
      >
        <Rate
          allowHalf
          allowClear
          value={data.rate}
          onChange={val => {
            let temp = { ...data };
            temp.rate = val;
            setData(temp);
          }}
        />
        <TextArea
          style={{ marginTop: 16 }}
          placeholder={"Your review matters"}
          rows={4}
          value={data.para}
          onChange={val => {
            let temp = { ...data };
            temp.para = val.target.value;
            setData(temp);
          }}
        />
      </Modal>
    </ReviewContainer>
  );
};

export default Review;
