import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "next/app";
import Search from "./search";
import Stores from "./stores";

const Wrapper = styled.div`
  font-family: 'Karla', sans-serif;
  background: #fff;
  width: 100%;
`;
const Cont = styled.div`
  width: 70%;
  margin: auto;
`;
const CategoryTag = styled.div`
font-family: 'Karla', sans-serif;
  border-left: 2px solid #FF0000;
  color: #FF632A;
  padding: 15px 15px;
  width: 310px;
  background: #F5F5F5;
  font-size: 36px;
  font-weight: lighter;
  border-radius: 0px 35px 35px 0px;
  margin-bottom: 50px;
`;
const MainCaption = styled.h1`
  font-family: 'Karla', sans-serif;
  width: 70%;
  line-height: 60px;
  font-size: 48px;
  margin-bottom: 20px;
`;
const Tagline = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  color: #666666;
  margin-bottom: 70px;
  font-weight: bolder;
`;
const Down = styled.button`
  background: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF632A;
  height: 72px;
  width: 72px;
  padding: 0px;
  border: 1px solid #E2E2E2;
  border-radius: 50%;
  margin-bottom: 80px;
`;
class Home extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Cont>
          <CategoryTag>
            Jewellery
          </CategoryTag>
          <MainCaption>
            The best prices Online/Offline to shop locally
          </MainCaption>
          <Tagline>Search and buy at the cheapest price</Tagline>
          <Search />
          <Stores />
          <Down>
            <i class="material-icons">
              keyboard_arrow_down
            </i>
          </Down>
        </Cont>
      </Wrapper>
    );
  }
}

export default Home;
