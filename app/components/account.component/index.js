import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import ProductCard from '../reusable/productCard2';
import Search from '../reusable/search';

const Wrapper = styled.div`
    /* background: #fff; */
    min-height: 40vh;
    font-family: 'Karla', sans-serif;
    margin-bottom: 400px;
`;
const TopContainer = styled.div`
    padding-left: 5%;
    background: #F7F7F7;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 5%;
    >img{
        margin-right: 50px;
    }
`;
const SearchContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;
const RightContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 50px;
    padding-top: 20px;
`;
const Location = styled.div`
  display: flex;
  margin-bottom: 50px;
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
const Navbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #FF632A;
    padding-bottom: 15px;
`;
const NavItem = styled.div`
    font-size: 24px;
    font-weight: ${props => props.active ? 'bolder' : 'lighter'};
    color: ${props => props.active ? '#000' : '#666'};
    margin-right: 50px;
`;
const Content = styled.div`
    padding-top: 50px;
`;
const MODE = {
    WISHLIST: 'WISHLIST',
    REVIEWS: 'REVIEWS'
}
class Account extends Component {
    state = {
        active: MODE.WISHLIST
    }
    render() {
        return (
            <Wrapper>
                <TopContainer>
                    <img src="../../static/images/Category_Menu@2x.png" />
                    <SearchContainer>
                        <Search/>
                    </SearchContainer>
                </TopContainer>
                <Container>
                    <Profile />
                    <RightContainer>
                        <Location>
                            <img src="../../static/images/location_1.png" />

                            <Address>9th Main, HSR Layout, Bangalore</Address>
                            <AddText>Change your location</AddText>
                        </Location>
                        <Navbar>
                            <NavItem active>My Wishlist (2)</NavItem>
                            <NavItem>My Reviews (0)</NavItem>
                        </Navbar>
                        <Content>
                            <ProductCard />
                            <ProductCard />
                        </Content>
                    </RightContainer>
                </Container>
            </Wrapper>
        )
    }
}

export default Account;