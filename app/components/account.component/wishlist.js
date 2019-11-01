import React,{Component} from "react";
import styled from "styled-components";
import ProductCard from "../reusable/productCard2";
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
`;
const Content = styled.div`
  padding-top: 50px;
`;



class Wishlist extends Component{
  render(){
  const {wishlist} = this.props;
  console.log("wishlist",wishlist)
  return (
    <Wrapper>
      <Navbar>
        <NavItem>My Wishlist ({wishlist.data.length})</NavItem>
      </Navbar>
      <Content>
        {wishlist &&
          _.map(wishlist.data, (data, index) => {
            return <ProductCard data={data} />;
          })}
      </Content>
    </Wrapper>
  );
        }
};

export default Wishlist;
