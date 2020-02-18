import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../UI";
import _ from "lodash";
import { Modal, Input, Spin, Menu, Dropdown, Icon } from "antd";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Operation from "antd/lib/transfer/operation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 16px 0;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const Location = styled.div`
  display: flex;
  padding: 8px 0;
  align-items: center;
  > img {
    margin-top: -5px;
    width: auto;
    height: 25px;
    width: auto;
  }
`;
const Address = styled.p`
  margin-left: 8px;
  color: ${props => props.theme.default};
  line-height: 19px;
  font-size: 16px;
  align-items: left;
  letter-spacing: -0.2px;
  margin-bottom: 0;
`;
const AddText = styled.a`
  color: ${props => props.theme.primary};
  line-height: 19px;
  font-size: 16px;
  align-items: left;
  margin-left: 10px;
  letter-spacing: -0.2px;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Store = styled.div`
  width: 100%;
  margin-top: 24px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.p`
  font-size: 24px;
  align-content: left;
  line-height: 36px;
  font-weight: bold;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  padding-left: 8px;

  color: ${props => props.theme.default};
`;

const Allresult = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-content: left;
  color: #666666;
`;

const PriceRefreshContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const PriceUpdate = styled.p`
  color: #999999;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  letter-spacing: -0.2px;
  margin-bottom: 0;
`;

const Refresh = styled.p`
  color: ${props => props.theme.primary};
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  margin-left: 8px;
  letter-spacing: -0.2px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  display: flex;
  flex-flow: column;
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #999;
`;

const TableHeader = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
  border-top: 1px solid #999;
  padding: 8px;
  color: #666666;
  margin-bottom: 8px;
  > th {
    flex: 1;
    text-align: left;

    &:nth-child(2) {
      flex: 2;
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    > th {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;

const TableBody = styled.tr`
  display: flex;
  font-weight: bold;
  color: ${props => props.theme.default};
  letter-spacing: -0.2px;
  padding: 8px;
  align-items: center;
  border-bottom: 1px solid #dee2e6;

  &:last-child {
    border-bottom: none;
  }

  > td {
    flex: 1;
    text-align: left;

    &:nth-child(2) {
      flex: 2;
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    > td {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  border: 1px solid #b2b2b2;
  width: max-content;
  padding: 2px;
  > img {
    width: 90px;
    height: auto;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    > img {
      width: 53px;
    }
  }
`;

const MainText = styled.h1`
  font-size: inherit;
  margin: 0;
  color: ${props => (props.color ? "#000" : "red")};
`;

const ProductTitle = styled.h1`
  font-size: inherit;
  width: 90%;
  margin: 0;
  > a {
    cursor: pointer;
    font-size: inherit;
    transition-duration: 300ms;
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const BottomContainer = styled.div`
  min-height: 200px;
  background: #e1e1e16b;
  margin-top: 6px;
  padding: 12px;
`;

const BottomBox = styled.div`
  margin: 0 4px;
  position: relative;
  > a {
    display: block;
    color: ${props => props.theme.primary};
    border-bottom: 1px dotted;
    margin-bottom: 12px;
    width: fit-content;
    letter-spacing: -0.5px;
    font-size: 1.05rem;
  }

  > span {
    display: block;
    margin: 0;
    color: #404041;
    letter-spacing: -0.3px;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;

    > p {
      margin: 0;
      margin-right: 16px;
      letter-spacing: -0.3px;
      font-size: 0.9rem;
      color: #555;
      font-weight: 600;
    }
    > a {
      padding: 6px 18px;
      letter-spacing: -0.3px;
      font-size: 0.8rem;
    }
  }
`;

const AddressList = styled.li`
  border-bottom: 1px dashed #b2b2b2;
  padding-bottom: 6px;
  width: 50%;
  padding-top: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  > div {
    &:first-child {
      margin-right: 10px;
      font-size: 16px;
    }
    &:last-child {
      > p {
        margin-bottom: 0;
        font-size: 0.93rem;
        letter-spacing: -0.4px;
        color: #333333e3;
        line-height: 1.2;
        padding-bottom: 3px;
      }

      > span {
        font-size: 0.86rem;
        color: #404041;
        font-weight: 600;
      }
    }
  }
`;

const MapContainer = styled.div`
  position: absolute;
  right: 24px;
  height: 319px;
  bottom: 0;
  width: 400px;

  border: 1px solid;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const StoreContainer = props => {
  const [showModal, setModal] = useState(false);

  const [mapBlock, setMapBlock] = useState();

  const [curLoc, setCurLoc] = useState([]);

  const [locationLoader, setLocationLoader] = useState(false);

  const [livePriceLoader, setLivePriceLoader] = useState(true);

  const {
    allProduct,
    locationData,
    getCurrentLocation,
    location,
    livePrice,
    getLivePrice,
    product
  } = props;

  useEffect(() => {
    setTimeout(() => {
      getLivePrice(product.id, value => {
        setLivePriceLoader(false);
      });
    }, 1000);
  }, []);

  const renderMorePrice = site => {
    if (product.OnlineSites[site].length >= 2) {
      return (
        <Dropdown overlay={() => menu(product.OnlineSites[site])}>
          <a
            style={{
              fontSize: "0.9rem",
              marginLeft: 8,
              opacity: 0.8,
              display: "block",
              paddingTop: 3
            }}
            className="ant-dropdown-link"
            href="#"
          >
            See more prices <Icon type="down" />
          </a>
        </Dropdown>
      );
    }
  };

  const menu = data => {
    return (
      <Menu>
        {_.map(data, (d, i) => {
          if (i !== 0) {
            return (
              <Menu.Item key={i}>
                <a target="_blank" href={d.productUrl}>
                  {`Rs ${d.price}`}
                </a>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    );
  };

  const updatedPrice = () => {
    const updated = _.filter(allProduct, (data, i) => {
      return _.filter(livePrice, (d, j) => {
        if (data.url.includes(d[0])) {
          if (d[1] === "NOT FOUND") {
            data.price = "OUT OF STOCK";
            return data;
          } else {
            data.price = d[1];
            return data;
          }
        }
      });
    });

    return updated;
  };

  const distance = (lat1, lon1, lat2, lon2, unit) => {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  const currentLocation = () => {
    setLocationLoader(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
      setLocationLoader(false);
    }
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  const success = pos => {
    var crd = pos.coords;

    setCurLoc([crd.latitude, crd.longitude]);

    getCurrentLocation(
      {
        lat: crd.latitude.toString(),
        lng: crd.longitude.toString()
      },
      () => {
        setLocationLoader(false);
      }
    );
  };

  const error = err => {
    setLocationLoader(false);
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const renderDetail = loc => {
    if (_.isEmpty(location)) {
      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      );
    } else {
      const secLoc = _.filter(loc, (d, i) => {
        let allLoc = [...d["coordinates"].split(",")];

        let dist = distance(
          location.data.lat,
          location.data.lng,
          Number(allLoc[0].trim()),
          Number(allLoc[1].trim()),
          "K"
        );

        d["distance"] = dist;

        if (dist < 10) return d;
      });

      let newList = _.sortBy(secLoc, [o => o.distance]);

      return (
        <div style={{ height: "100%" }}>
          <ul>
            {_.map(newList, (data, i) => {
              if (i >= 10) return;
              return (
                <AddressList>
                  <div>
                    <FontAwesomeIcon icon="directions" color={"#6376f1"} />
                  </div>
                  <div>
                    <p>{data.address}</p>
                    <span> {`${data.distance.toFixed(2)} km`}</span>
                  </div>
                </AddressList>
              );
            })}
          </ul>

          <MapContainer>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={{
                lat: 59.95,
                lng: 30.33
              }}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </MapContainer>
        </div>
      );
    }
  };

  const renderLocation = (site, data, url) => {
    let loc = [...data[site]];

    return (
      <BottomBox>
        <a href={url} target={"_blank"}>
          Visit online website
        </a>

        {_.isEmpty(location) ? (
          <>
            <span>
              {` More than ${
                loc.length > 10 ? "10+" : loc.length
              } location near you`}
            </span>

            <div>
              <p>
                To get the exact store location from you ,we need location
                access :
              </p>

              <Button active onClick={currentLocation}>
                Current Location
              </Button>
            </div>
          </>
        ) : (
          <div>
            <strong style={{ letterSpacing: -0.3 }}>
              Showing Stores near you :
            </strong>
            <p>{location.results[3].formatted_address}</p>
          </div>
        )}

        <div
          style={{
            height: "50vh",
            width: "100%",
            marginTop: 16,
            borderTop: "1px solid rgba(0, 0, 0, 0.25)",
            padding: "16px 0",
            display: "flex",
            alignItems: "flex-start",
            overflowY: "scroll"
          }}
        >
          {locationLoader ? <Spin /> : renderDetail(loc)}
        </div>
      </BottomBox>
    );
  };

  return (
    <Wrapper>
      {/* <Location>
        <img src="../../static/images/location_1.png" />

        <Address>
          {locationLoader ? (
            <Spin />
          ) : (
            `${
              _.isEmpty(location)
                ? "No Location Access"
                : location.current.results[0].formatted_address
            }`
          )}
        </Address>

        <Address>9th Main, HSR Layout, Bangalore</Address>
        <AddText onClick={() => currentLocation()}>
          Get Current Location
        </AddText>
      </Location> */}
      <Modal
        visible={showModal}
        onCancel={() => setModal(false)}
        footer={false}
      >
        <div
          style={{
            widt: "100%",
            height: 40,
            borderBottom: "1px solid #b2b2b2",
            marginTop: 16,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0 8px"
          }}
        >
          <img
            style={{ marginRight: 8 }}
            src="../../static/images/location_1.png"
          />
          <a style={{ fontSize: 16 }}>Current Location</a>
        </div>

        <div style={{ marginTop: 16, minHeight: 300 }}>
          <Input placeholder={"Search Places ..."} size="large" />
        </div>
      </Modal>
      <Store>
        <TitleContainer>
          <Title>Product in Stores</Title>
          <PriceRefreshContainer>
            {livePriceLoader ? (
              <Spin tip={"updating price"} />
            ) : (
              <>
                <PriceUpdate>Prices Updated</PriceUpdate>
                {/* <Refresh>Refresh</Refresh> */}
              </>
            )}
          </PriceRefreshContainer>
        </TitleContainer>

        <Table>
          <thead>
            <TableHeader>
              <th>
                <span>Store</span>
              </th>
              <th>
                <span>Item Name / Code</span>
              </th>
              <th>
                <span>Price</span>
              </th>
              <th>
                <span>Discount</span>
              </th>
              <th>
                <span style={{ padding: "0 16px" }}>Pick-up</span>
              </th>
            </TableHeader>
          </thead>
          <tbody>
            {_.map(
              _.isEmpty(livePrice) ? allProduct : updatedPrice(),
              (product, i) => {
                return (
                  <>
                    <TableBody key={i}>
                      <td>
                        <LogoContainer>
                          <img
                            src={`../../static/images/${product.site}.jpg`}
                          />
                        </LogoContainer>
                      </td>
                      <td>
                        <ProductTitle>
                          <a href={product.url} target={"_blank"}>
                            {product.title}
                          </a>
                        </ProductTitle>
                      </td>
                      <td>
                        <MainText
                          color={
                            product.price === "OUT OF STOCK" ? false : true
                          }
                        >
                          {product.price === "OUT OF STOCK"
                            ? "OUT OF STOCK"
                            : `Rs ${product.price}`}
                        </MainText>
                      </td>
                      <td>
                        <MainText
                          color={true}
                        >{`${product.discount}%`}</MainText>
                      </td>
                      <td>
                        {product.type === "online" ? (
                          <div>
                            <Button href={product.url} target={"_blank"}>
                              visit website
                            </Button>

                            {renderMorePrice(product.site)}
                          </div>
                        ) : (
                          <Button
                            onClick={() => {
                              if (i === mapBlock) setMapBlock();
                              else setMapBlock(i);
                            }}
                            target={"_blank"}
                          >
                            view store +
                          </Button>
                        )}
                      </td>
                    </TableBody>
                    {i == mapBlock && (
                      <BottomContainer>
                        {renderLocation(
                          product.site,
                          locationData,
                          product.url
                        )}
                      </BottomContainer>
                    )}
                  </>
                );
              }
            )}
          </tbody>
        </Table>
      </Store>

      {/* <Allresult>--- All results listed ---</Allresult> */}
    </Wrapper>
  );
};

export default StoreContainer;
