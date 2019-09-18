import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "next/app";
import Search from "../../containers/searchbar.container";
import Stores from "./stores";
import Categories from "./categories";
import Description from "./description";

const Wrapper = styled.div`
  font-family: "Karla", sans-serif;
  background: #fff;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 400px;
  @media only screen and (max-width: 1440px){
    margin-top: 50px;
  }
  @media only screen and (max-width: 992px) {
    margin-bottom: 200px;
  }
`;
const Cont = styled.div`
  width: 70%;
  margin: auto;
  @media only screen and (max-width: 1440px){
    width: 80%;
  } 
  @media only screen and (max-width: 992px) {
    width: 90%;
  }
`;
const CategoryTag = styled.div`
  font-family: "Karla", sans-serif;
  border-left: 2px solid #ff0000;
  color: #ff632a;
  padding: 15px 15px;
  width: 310px;
  background: rgba(245,245,245, 0.57);
  font-size: 36px;
  font-weight: lighter;
  border-radius: 0px 35px 35px 0px;
  margin-bottom: 50px;
  @media only screen and (max-width: 1440px){
    font-size: 28px;
    width: 250px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 24px;
    padding: 10px 15px;
    margin-bottom: 30px;
    width: 200px;
  } 
`;
const MainCaption = styled.h1`
  font-family: "Karla", sans-serif;
  width: 53%;
  line-height: 60px;
  font-size: 48px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1440px){
    width: 50%;
    font-size: 36px;
    line-height: 40px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    font-size: 32px;
  } 
`;
const Tagline = styled.p`
  font-family: "Karla", sans-serif;
  font-size: 24px;
  color: #666666;
  margin-bottom: 70px;
  font-weight: bolder;
  @media only screen and (max-width: 1440px){
    margin-bottom: 50px;
    font-size: 22px;
  }
  @media only screen and (max-width: 992px) {
    margin-bottom: 100px;
  }
`;
const SearchContainer = styled.div`
  /* height: 90px; */
  margin-bottom: 55px;
  height: 90px;
  width: 90%;
  @media only screen and (max-width: 1440px){
    height: 70px;
  }
  @media only screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 20px;
  } 
`;
const Down = styled.button`
  background: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff632a;
  height: 72px;
  width: 72px;
  padding: 0px;
  border: 1px solid #e2e2e2;
  border-radius: 50%;
  margin-bottom: 160px;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

const CATEGORY = [
  "Jewellery", "Electronics", "Fashion", "Toys", "Sports"
]
class Home extends Component {
  state = {
    current: 0,
    category: ""
  };
  componentDidMount = () => {
    this.typeWriter()
  }
  typeWriter = () => {
    const { current, category } = this.state;
    let str = "";
    if (current < CATEGORY.length) {
      let i = 0;
      let index = 0;
      setInterval(() => {
        if (i < CATEGORY[index].length) {
          str = str + CATEGORY[index].charAt(i);
          this.setState({ category: str });
          i++;
        }
        else {
          str = "", i = 0;
          if (index < CATEGORY.length-1){
            index++;
          }
          else{
            index = 0;
          }
        }
      }, 250)
    }
  }
  render() {
    return (
      <Wrapper>
        <Cont>
          <CategoryTag>{this.state.category}|</CategoryTag>
          <MainCaption>
            The best prices Online/Offline to shop locally
          </MainCaption>
          <Tagline>Search and buy at the cheapest price</Tagline>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <Stores />
          <Down>
            <i className="material-icons">keyboard_arrow_down</i>
          </Down>
          <Categories />
          <Description />
        </Cont>
      </Wrapper>
    );
  }
}

export default Home;
