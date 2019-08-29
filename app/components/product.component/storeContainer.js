import React, { Component } from "react";
import styled from "styled-components";

import ProductCard from "../reusable/productCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding-left: 4%;
`;
const Wrapper = styled.div`
  /* width: 70%; */
  height: 100%;
  flex: 3.5;
  background: #eee;
  margin-top: 20px;
  @media only screen and (max-width: 1440px){
    flex: 2.5;
  }
`;
const BoldText = styled.b`
  color: #000;
  margin-right: 5px;
`;

const Location = styled.div`
  display: flex;
  /* margin-left: 2%; */
  >img{
    margin-top: -5px;
    width: auto;
    height: 25px;
    width: auto;
  }
`;
const Address = styled.div`
  margin-left: 10px;
  color: #666666;
  line-height: 19px;
  font-size: 16px;
  align-items: left;
`;
const AddText = styled.div`
  color: #ff632a;
  line-height: 19px;
  font-size: 16px;
  align-items: left;
  margin-left: 10px;
`;

const Store = styled.div`
  width: 100%;
  margin-top: 40px;
  /* margin-left: 2%; */
`;
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 24px;
  align-content: left;
  line-height: 36px;
  font-weight: bold;
`;

const TableHeader = styled.div`
  border-bottom: 1px solid #333333;
  border-top: 1px solid #333333;
  padding-top: 11px;
  padding-bottom: 11px;
  display: flex;
  margin-top: 1%;
`;

const H_Store = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
`;
const H_Name = styled.div`
  flex: 2;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  padding: 0px 25px;
`;
const H_Price = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
`;
const H_Discount = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
`;
const H_Pickup = styled.div`
  flex: 1;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
`;

const Description = styled.a`
  text-decoration: none;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #eee;
`;
const Offline_Description = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 40px;
  border-top: 1px solid #eee;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
`;
const D_Store = styled.div`
  flex: 1;
  width: 80px;
  > img {
    display: block;
    width: 50%;
  }
`;

const Offline_D_Store = styled.div`
  flex: 1;
  width: 80px;
  /* align-items: center;
  justify-content: center; */
  > img {
    display: block;
    width: 50%;
    /* height: 100%; */
  }
  display: flex;
  flex-direction: column;
`;
const D_Name = styled.div`
  flex: 2;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  padding: 0 25px;
  :hover{
    color: #ff632a;
    cursor: pointer;
  }
`;
const H_D_Name = styled.div`
  flex: 2;
  padding: 0 25px;
  color: #ff632a;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;
const D_Price = styled.div`
  flex: 1;
  font-size: 14px;
  align-content: left;
  line-height: 24px;
  font-weight: bold;
  color: #666;
  text-decoration: line-through;
`;
const D_Discount = styled.div`
  flex: 1;
  font-size: 16px;
  align-content: left;
  line-height: 24px;
  font-weight: bold;
`;
const D_Pickup = styled.div`
  flex: 1;
  font-size: 16px;
  align-content: left;
  line-height: 24px;
  font-weight: bold;
  color: #666666;
`;
const Off_Pickup = styled.div`
  flex: 1;
  font-size: 16px;
  align-content: left;
  line-height: 24px;
  font-weight: bold;
  color: #ff632a;
  display: flex;
`;
const Off_distance = styled.div`
  color: #666666;
  font-size: 16px;
  padding: 10px 0 0 0;
  align-content: left;
  line-height: 19px;
`;
const Off_dir = styled.div`
  font-size: 16px;
  align-content: left;
  line-height: 19px;
  font-weight: bold;
  color: #ff632a;
`;

const Allresult = styled.div`
  display: flex;
  margin-top: 2%;
  justify-content: center;
  font-size: 16px;
  align-content: left;
  line-height: 19px;
  color: #666666;
`;
const CardContainer = styled.div`
  margin-top: 15%;
`;
const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: space-between;
  margin-top: 4%;
`;

const CardContHead = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
`;

const PriceRefreshContainer = styled.div`
  display: flex;
  margin-left: auto;
  padding-right: 20px;
  align-items:center;
`;

const PriceUpdate = styled.div`
  color: #999999;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
`;

const Refresh = styled.div`
  color: #ff632a;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  margin-left: 10px;
`;
class StoreContainer extends Component {
  state = {};
  render() {
    const { product } = this.props;
    const { OnlineSites, OfflineSites } = product;
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

            <TableHeader>
              <H_Store>Store</H_Store>
              <H_Name>Iten name/code</H_Name>
              <H_Price>MRP</H_Price>
              <H_Discount>Price</H_Discount>
              <H_Pickup>Pick-up</H_Pickup>
            </TableHeader>
            <Desc>
              {
                Object.keys(OnlineSites).map((key,index) => (
                  <Description key={index} href={OnlineSites[key].productUrl} target="_blank">
                    <D_Store>
                      <img src="../../static/images/amazon.png" />
                    </D_Store>
                    <D_Name>
                      {this.props.product.title}
                    </D_Name>
                    <D_Price>Rs. {OnlineSites[key].mrp}</D_Price>
                    <D_Discount>Rs. {OnlineSites[key].price}</D_Discount>
                    <D_Pickup>Online</D_Pickup>
                  </Description>
                ))
              }
              {
                Object.keys(OfflineSites).map(key => (
                  <Offline_Description>
                    <Offline_D_Store>
                      <img src="../../static/images/crossword.png" />
                      <Off_distance>
                        <BoldText>5.2 km</BoldText>
                        away
                  </Off_distance>
                      <Off_dir>Show direction</Off_dir>
                    </Offline_D_Store>
                    <D_Name>
                      {this.props.product.title}
                    </D_Name>
                    <D_Price>Rs. {OfflineSites[key].mrp}</D_Price>
                    <D_Discount>Rs. {OfflineSites[key].price}</D_Discount>
                    <Off_Pickup>Offline</Off_Pickup>
                  </Offline_Description>
                )
                )}
            </Desc>
          </Store>

          <Allresult>
            <BoldText>All </BoldText> results listed
          </Allresult>
          {/* <CardContainer>
            <CardContHead>Related Products</CardContHead>
            <CardSection>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </CardSection>
          </CardContainer> */}
        </Container>
      </Wrapper>
    );
  }
}

export default StoreContainer;
