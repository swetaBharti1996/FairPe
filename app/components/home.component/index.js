import React, { Component } from "react";
import styled from "styled-components";
import Search from "../../containers/searchbar.container";
import Stores from "./stores";
import Categories from "./categories";
import Description from "./description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageWrapper } from "../../UI";
import { Button, Spin } from "antd";

const Wrapper = styled.div`
  background: ${props => props.theme.white};
  width: 100%;
  position: relative;
  margin-top: 160px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    margin-top: 160px;
  }
`;

const CategoryTag = styled.p`
  border-left: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  padding: 12px;
  width: 310px;
  background: rgba(245, 245, 245, 0.57);
  font-size: 22px;
  font-weight: lighter;
  border-radius: 0px 35px 35px 0px;
  margin-bottom: 38px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 11px;
    width: 60%;
    font-size: 20px;
  }
`;
const MainCaption = styled.h1`
  font-family: "Roboto Slab", serif;
  width: 47%;
  text-transform: none !important;
  color: #263238;
  font-size: 45px;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  font-weight: 600;
  line-height: 1.1;
  margin-top: 66px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    font-size: 28px;
  }
`;
const Tagline = styled.p`
  display: none;
  font-size: 24px;
  color: ${props => props.theme.gray600};
  margin-bottom: 70px;
  font-weight: bold;
  letter-spacing: -0.7px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 19px;
    margin-bottom: 70px;
  }
`;
const SearchContainer = styled.div`
  position: relative;
  z-index: 90;
  margin-bottom: 16px;
  width: 55%;
  margin-top: 32px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const Illustrator = styled.div`
  position: absolute;
  top: -100px;
  right: -13px;
  width: 63%;
  height: 614px;
  /* background: url("../../static/images/maybe.png"); */
  direction: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  /* display: none; */

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    > img {
      position: absolute;
      width: 51%;
      height: auto;
      top: 99px;
      right: 52px;
    }
    > div {
      position: absolute;
      top: 466px;
      right: 160px;
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const PopularBox = styled.div`
  display: flex;
  > span {
    padding-right: 12px;
    font-weight: 600;
    color: #62646a;
    letter-spacing: -0.3px;
    margin-left: 2px;
  }
  > ul {
    display: flex;
    width: 100%;
    margin-bottom: 0;
    > li {
      display: flex;
      margin-right: 12px;
      background: #f5f5f5c9;
      > a {
        background-color: transparent;
        padding: 0 8px;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
        color: #62646a;
        transition: background-color 0.3s ease-in-out,
          border-color 0.3s ease-in-out;
      }
    }
  }
`;

const StoresNear = styled.div`
  margin-top: 109px;
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > span {
      font-size: 30px;
      color: mediumseagreen;
      font-weight: 600;
      letter-spacing: -1.4px;
    }
    > p {
      margin: 0;
      font-weight: 600;
      font-size: 24px;
      letter-spacing: -1.2px;
      margin-right: 8px;
      color: #263238;
    }
  }
`;

const CATEGORY = ["Jewellery", "Electronics", "Fashion", "Toys", "Sports"];
class Home extends Component {
  state = {
    current: 0,
    category: ""
  };
  componentDidMount = () => this.typeWriter();

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
        } else {
          (str = ""), (i = 0);
          if (index < CATEGORY.length - 1) index++;
          else index = 0;
        }
      }, 250);
    }
  };

  render() {
    const { category } = this.state;
    return (
      <PageWrapper>
        <Wrapper>
          {/* <CategoryTag>{category}|</CategoryTag> */}
          <CategoryTag>Fashion|</CategoryTag>
          <MainCaption>
            Shop at Online & Offline , Near you
            <FontAwesomeIcon
              style={{
                marginLeft: 22,
                fontSize: "38px",
                color: "mediumseagreen"
              }}
              icon="search-location"
            />
          </MainCaption>
          <Tagline>Search and buy at the cheapest price</Tagline>
          <SearchContainer>
            <Search />
          </SearchContainer>

          <PopularBox>
            <span>Popular: </span>
            <ul>
              <li>
                <a>Redmi Note 8</a>
              </li>

              <li>
                <a>One Plus 6</a>
              </li>

              <li>
                <a>Dell XP 15 </a>
              </li>

              <li>
                <a>Iphone 11 pro </a>
              </li>
              <li>
                <a>One Plus 6</a>
              </li>
            </ul>
          </PopularBox>

          <StoresNear>
            <div>
              <p>Top stores near</p>
              <span style={{ minWidth: 74, textAlign: "center" }}>
                {true ? <Spin /> : "HSR Layout"}
              </span>
              <FontAwesomeIcon
                style={{ marginLeft: 12, fontSize: 24 }}
                icon="angle-down"
              />
            </div>
          </StoresNear>

          <Illustrator>
            <div>
              <img src={"../../static/images/ill2.svg"}></img>

              <div>
                <Button
                  type="ghost"
                  size="large"
                  style={{ borderRadius: 6, font: "menu" }}
                >
                  Download App to Scan NOW
                </Button>
              </div>
            </div>
          </Illustrator>
          <Stores />

          <Categories
            filterResults={this.props.filterResults}
            categoryData={this.props.categoryData}
            categoryResults={this.props.categoryResults}
          />
          <Description />
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Home;
