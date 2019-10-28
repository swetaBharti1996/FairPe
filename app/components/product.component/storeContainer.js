import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "../../UI";
import _ from "lodash";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 16px 0;
`;
const Wrapper = styled.div`
  margin-left: 24px;
  flex: 1;
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
`;
const AddText = styled.span`
  color: ${props => props.theme.primary};
  line-height: 19px;
  font-size: 16px;
  align-items: left;
  margin-left: 10px;
`;

const Store = styled.div`
  width: 100%;
  margin-top: 24px;
  min-height: 237px;
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
`;

const TableBody = styled.tr`
  display: flex;

  font-weight: bold;
  color: ${props => props.theme.default};
  letter-spacing: -0.2px;
  padding: 8px;
  align-items: center;

  > td {
    flex: 1;
    text-align: left;

    &:nth-child(2) {
      flex: 2;
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
`;

const MainText = styled.h1`
  font-size: inherit;
`;

const ProductTitle = styled.h1`
  font-size: inherit;
  > a {
    cursor: pointer;
    font-size: inherit;
    transition-duration: 300ms;
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const StoreContainer = props => {
  const { allProduct } = props;
  return (
    <Wrapper>
      <Container>
        <Location>
          <img src="../../static/images/location_1.png" />

          <Address>9th Main, HSR Layout, Bangalore</Address>
          <AddText>Change your location</AddText>
        </Location>
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
                        <img src={`../../static/images/${product.site}.png`} />
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
                      <Button>
                        {product.type === "online" ? "Buy now" : "View Store"}
                      </Button>
                    </td>
                  </TableBody>
                );
              })}
            </tbody>
          </Table>
        </Store>

        <Allresult>--- All results listed ---</Allresult>
      </Container>
    </Wrapper>
  );
};

export default StoreContainer;
