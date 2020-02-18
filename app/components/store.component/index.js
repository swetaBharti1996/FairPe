import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Breadcrumb, Button, Rate, Tag, message } from "antd";
import _ from "lodash";

// import { Button } from "../../UI";
import STORE_DATA from "./data.json";
import Review from "./review";
import Offer from "./offer";
import Basic from "./basic";
import Info from "./info";
import Menu from "./menu";
import Popular from "./popular";

const PageWrapper = styled.div`
  margin-top: 70px;
  background: #f8f8f8;
  min-height: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  width: 1280px;
  margin: 0 auto;
  flex-flow: column;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 16px;
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid #e8e8e8;
  min-height: 300px;
  display: flex;
  margin-right: 24px;
  background: #fff;

  flex-flow: column;
  position: sticky;
  top: 100px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
  > div {
    &:nth-child(2) {
      > ul {
        margin: 0;

        > li {
          &:first-child {
            > a {
              border-top: 1px solid #e8e8e8;
            }
          }
        }
      }
    }
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      font: menu;
      font-size: 18px;
      min-height: 230px;
    }
  }
`;

const RightContainer = styled.div`
  flex: 3;
  height: 100%;
  /* border: 1px solid; */
  display: flex;
  flex-flow: column;
`;

const Body = styled.div`
  display: flex;
  min-height: 900px;
`;

const Head = styled.div`
  margin-bottom: 16px;
`;

const MENU = [
  { name: "reliance digital", type: "main" },
  { name: "offers", type: "offers" },
  // { name: "reviews", type: "reviews" },
  { name: "store information", type: "store" },
  { name: "popular product", type: "popular" }
];

const Index = props => {
  const {
    query,
    authModal,
    auth,
    modal,
    reviewModal,
    postStoreReview,
    getStoreReview,
    review
  } = props;

  const [block, setBlock] = useState("main");
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState({});

  useEffect(() => {
    let sel = _.filter(STORE_DATA, data => data.name === query.name);
    if (sel.length) {
      setStore(sel[0]);
      getStoreReview({ id: store.id }, bol => {});
    }
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <Head>
          <Breadcrumb separator=">" style={{ font: "menu", fontSize: "14px" }}>
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Store</Breadcrumb.Item>
            <Breadcrumb.Item>{store.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Head>

        <Body>
          <LeftContainer>
            <Menu MENU={MENU} store={store} setBlock={setBlock} block={block} />
          </LeftContainer>
          <RightContainer>
            <Basic store={store} />
            <Offer store={store} />
            {/* <Review
              authModal={authModal}
              auth={auth}
              modal={modal}
              reviewModal={reviewModal}
              postStoreReview={postStoreReview}
              getStoreReview={getStoreReview}
              store={store}
              review={review}
            /> */}
            <Info store={store} />
            <Popular />
          </RightContainer>
        </Body>
      </Wrapper>
    </PageWrapper>
  );
};

export default Index;
