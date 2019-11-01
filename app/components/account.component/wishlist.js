import React from "react";
import styled from "styled-components";

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
`;
const Content = styled.div`
  padding-top: 50px;
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
        {/* {this.props.wishlist &&
          _.map(this.props.wishlist.data, (data, index) => {
            return <ProductCard data={data} />;
          })} */}
      </Content>
    </Wrapper>
  );
};

export default Wishlist;
