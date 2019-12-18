import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import ProductContainer from "./productContainer";
import StoreContainer from "./storeContainer";
import { PageWrapper } from "../../UI";
import Description from "./description";
import Specification from "./specification";
import Review from "./review";
import Search from "../../components/reusable/search";
import Geocode from "react-geocode";

const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  padding-top: 24px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;

const ErrorText = styled.div`
  margin-top: 15vh;
  font-size: 32px;
  color: #333;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 50px;
`;
const ErrorImg = styled.img`
  width: 500px;
  display: block;
  margin: auto;
  margin-bottom: 100px;
`;

const RightSide = styled.div`
  margin-left: 24px;
  flex: 1;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin: 0;
    flex: 1;
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  > div {
    &:first-child {
      width: 327px;
      background: #e3e3e3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:last-child {
      background: #f7f7f7;
      flex: 1;
      display: flex;
      align-items: center;
      height: 100px;
    }
  }
`;

const Box = styled.div`
  width: 70%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  > p {
    color: #000000;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0;
  }
  > i {
  }
`;

const TAB = {
  COMPARISON: "comparison",
  SPECIFICATION: "specification",
  DESCRIPTION: "description"
};

const Product = props => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    currentLocation();
  }, []);

  const currentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  const success = pos => {
    var crd = pos.coords;

    // console.log(pos);

    // Geocode.fromLatLng(crd.latitude, crd.longitude).then(
    //   response => {
    //     const address = response.results[0].formatted_address;
    //     setLocation(address);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  };

  const error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const { products, authModal, wishlist, wishlistData, auth } = props;

  const _getAllPrice = products => {
    const ALL_PRICE = [];
    _.map(products.OnlineSites, (data, k) =>
      ALL_PRICE.push({ [k]: data.price })
    );
    _.map(products.OfflineSites, (data, k) =>
      ALL_PRICE.push({ [k]: data.price })
    );
    return ALL_PRICE;
  };

  const _calcDisount = (mrp, price) => {
    return (((mrp - price) / mrp) * 100).toFixed(2);
  };

  const _getLowestPrice = DATA => {
    return _.minBy(DATA, d => {
      return d[Object.keys(d)];
    });
  };

  const _getALLProduct = DATA => {
    const PRODUCT = [];
    _.map(DATA.OnlineSites, (data, k) =>
      PRODUCT.push({
        site: k,
        price: data.price,
        discount: _calcDisount(data.mrp, data.price),
        title: DATA.title,
        type: "online",
        url: data.productUrl
      })
    );

    _.map(DATA.OfflineSites, (data, k) =>
      PRODUCT.push({
        site: k,
        price: data.price,
        discount: 30,
        title: DATA.title,
        type: "offline",
        url: data.productUrl
      })
    );

    // Sort with Lowest Price then return

    return PRODUCT;
  };

  // console.log(location);
  return (
    <PageWrapper>
      <Wrapper>
        {_.isEmpty(products) ? (
          <Fragment>
            <ErrorText>Something went wrong! Please try again later!</ErrorText>
            <ErrorImg src="../../static/images/error.svg" />
          </Fragment>
        ) : (
          <Container>
            <ProductContainer
              lowestPrice={_getLowestPrice(_getAllPrice(products))}
              product={products}
              authModal={authModal}
              wishlist={wishlist}
              wishlistData={wishlistData}
              auth={auth}
            />
            <RightSide>
              <StoreContainer
                allProduct={_getALLProduct(products)}
                product={products}
              />
              {/* <Specification id={TAB.SPECIFICATION} /> */}
              <Description
                description={products.description || ""}
                id={TAB.DESCRIPTION}
              />
            </RightSide>
          </Container>
        )}
      </Wrapper>
    </PageWrapper>
  );
};

export default Product;
