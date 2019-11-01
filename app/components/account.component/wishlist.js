import React, { Component } from "react";
import styled from "styled-components";
import ProductCard from "../reusable/productCard";
import _ from "lodash";
const Wrapper = styled.div``;

const Navbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #999;
  padding-bottom: 8px;
`;
const NavItem = styled.p`
  font-size: 22px;
  font-weight: bolder;
  color: ${props => props.theme.default};
  letter-spacing: -0.9px;
  margin: 0;
`;
const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  height: 100%;
  padding-top: 24px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    > a {
      width: 46.7% !important;
    }
  }
`;

const Wishlist = props => {
  const { wishlist, wishlistData } = props;

  return (
    <Wrapper>
      <Navbar>
        <NavItem>
          My Wishlist (
          {(wishlistData && wishlistData.data && wishlistData.data.length) || 0}
          )
        </NavItem>
      </Navbar>
      <Content>
        {wishlist &&
          _.map(wishlistData.data, (data, index) => {
            return (
              <ProductCard
                style={{ width: "25%" }}
                product={data}
                key={index}
              />
            );
          })}
      </Content>
    </Wrapper>
  );
};

export default Wishlist;
