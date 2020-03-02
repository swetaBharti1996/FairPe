import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Breadcrumb, Button, Rate, Tag, message } from "antd";
import _ from "lodash";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Button } from "../../UI";
import STORE_DATA from "./data.json";
import Review from "./review";
import Offer from "./offer";
import Basic from "./basic";
import Info from "./info";
import Menu from "./menu";
import Popular from "./popular";
import WeeklyOffer from "./weeklyoffer";
import PopularBrand from "./popularbrand";

const PageWrapper = styled.div`
  margin-top: 70px;

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
  /* border: 1px solid #e8e8e8; */
  min-height: 300px;
  display: flex;
  margin-right: 24px;
  background: #fff;

  flex-flow: column;

  position: relative;
  /* position: sticky;
  top: 220px; */

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    min-height: 100px;
  }
  /* > div {
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
  } */
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
  position: relative;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;

const Head = styled.div`
  margin-top: -24px;
  margin-bottom: 16px;

  display: flex;
  flex-flow: column;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 180px;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    margin: 0;
    font: menu;
  }
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
          {/* <Breadcrumb separator=">" style={{ font: "menu", fontSize: "14px" }}>
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Store</Breadcrumb.Item>
            <Breadcrumb.Item>{store.name}</Breadcrumb.Item>
          </Breadcrumb> */}

          <MapContainer>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAVVdU_-mfoW6jMtUDgLlSadGsy2vt4E3k"
              }}
              defaultCenter={{
                lat: 12.912984199999999,
                lng: 77.64214659999999
              }}
              defaultZoom={10}
            >
              {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              /> */}
            </GoogleMapReact>
          </MapContainer>
        </Head>

        <Body>
          <LeftContainer>
            <Menu MENU={[]} store={store} setBlock={setBlock} block={block} />
          </LeftContainer>
          <RightContainer>
            <WeeklyOffer />
            {/* <Basic store={store} />
            <Offer store={store} /> */}
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
            {/* <Info store={store} /> */}
            <Popular />
            <PopularBrand />
          </RightContainer>
        </Body>
      </Wrapper>
    </PageWrapper>
  );
};

export default Index;
