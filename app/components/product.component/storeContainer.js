import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../UI";
import _ from "lodash";
import { Modal, Input } from "antd";

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
`;
const Title = styled.p`
  font-size: 24px;
  align-content: left;
  line-height: 36px;
  font-weight: bold;
  letter-spacing: -0.5px;

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
  padding: 8px;
  > img {
    width: 74px;
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

const StoreContainer = props => {
  const [showModal, setModal] = useState(false);

  const { allProduct } = props;
  return (
    <Wrapper>
      <Location>
        <img src="../../static/images/location_1.png" />

        <Address>9th Main, HSR Layout, Bangalore</Address>
        <AddText onClick={() => setModal(true)}>Change your location</AddText>
      </Location>
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
            <PriceUpdate>Prices Updated</PriceUpdate>
            <Refresh>Refresh</Refresh>
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
            {_.map(allProduct, (product, i) => {
              return (
                <TableBody key={i}>
                  <td>
                    <LogoContainer>
                      <img src={`../../static/images/${product.site}.jpg`} />
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
                    <MainText>{`Rs ${product.price}`}</MainText>
                  </td>
                  <td>
                    <MainText>{`${product.discount}%`}</MainText>
                  </td>
                  <td>
                    <Button href={product.url} target={"_blank"}>
                      {product.type === "online" ? "Buy now" : "View Store"}
                    </Button>
                  </td>
                </TableBody>
              );
            })}
          </tbody>
        </Table>
      </Store>

      {/* <Allresult>--- All results listed ---</Allresult> */}
    </Wrapper>
  );
};

export default StoreContainer;
