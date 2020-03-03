import React, { Component } from "react";
import styled from "styled-components";
import Search from "../../containers/searchbar.container";
import Stores from "./stores";
import Categories from "./categories";
import Description from "./description";
import { Link } from "../../../server/routes";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageWrapper } from "../../UI";
import { Button, Spin } from "antd";
import StoreCard from "./storeCard";
import Info from "./info";
import Popular from "./popular";

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
  font: menu;
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
  font-family: "Changa", sans-serif;
  width: 100%;
  font-size: 50px;

  padding-left: 4px;
  display: flex;
  letter-spacing: -0.5px;
  justify-content: flex-start;
  align-items: center;
  color: rgba(0, 0, 0, 0.68);
  font-weight: 600;
  line-height: 1.1;
  margin-top: 66px;
  margin-bottom: 8px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    font-size: 39px;
    margin-bottom: 0px;
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
  margin-top: 8px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const Illustrator = styled.div`
  position: absolute;
  top: -100px;
  right: -13px;
  width: 63%;
  /* height: 614px; */
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

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }

  > span {
    margin-left: 3px;
    padding-right: 12px;
    font-weight: 600;
    color: #62646a;
    letter-spacing: -0.3px;
    font-size: 15px;
    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      margin-bottom: 8px;
    }
  }
  > ul {
    display: flex;
    width: 100%;
    margin-bottom: 0;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      flex-flow: row wrap;
    }

    > li {
      display: flex;
      margin-right: 12px;
      background: #f5f5f5c9;
      margin-bottom: 8px;
      > a {
        font: menu;
        background-color: transparent;
        padding: 3px 8px;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
        color: #555;
        font-size: 14px;
        text-transform: capitalize;
        letter-spacing: 0.2px;

        &:hover {
          color: #000000de;
        }
      }
    }
  }
`;

const StoresNear = styled.div`
  margin-top: 109px;
  > div {
    &:nth-child(2) {
      display: flex;

      margin-top: 32px;
      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        flex-flow: column;
      /* } */

      /* > div {
        border: 1px solid #dfdfdf;
        border-radius: 3;

        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
        display: flex;
        flex-direction: column;
        -webkit-box-flex: 0;
        flex-grow: 0;
        flex-shrink: 1;
        -webkit-box-pack: justify;
        justify-content: space-between;
        position: relative;

        background-color: rgb(255, 255, 255);
        color: rgb(153, 153, 153);
        width: 100%;
        box-sizing: border-box;
        border-radius: 4px;

        text-decoration: none;

        margin-right: 24px;

        justify-content: center;
        align-items: center;
        font: menu;
        text-transform: capitalize;

        @media only screen and (max-width: ${props => props.theme.bpxs}) {
          margin-bottom: 16px;
        } */

        > a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          font: menu;
          flex-flow: column;

          position: relative;

          > div {
          }
          > img {
            width: 100px;
          }
          > p {
            margin-bottom: 0;
            margin-top: 4px;
            font-size: 13px;
            color: #555;
          }
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    &:first-child {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        flex-flow: column;
        align-items: flex-start;
      }
      > span {
        font: menu;
        font-size: 27px;
        color: mediumseagreen;
        font-weight: 600;
        letter-spacing: -0.4px;
      }
      > p {
        font: menu;
        margin: 0;
        font-weight: 600;
        font-size: 27px;
        letter-spacing: -1.2px;
        margin-right: 8px;
        color: #263238;
      }

      >div{


      width:8%;
      >a{
        font:menu;
      }
      }
    }
  }
  > p {
    margin-bottom: 0;
    padding: 8px 0;
    margin-top: 4px;
    font: menu;
    text-align: right;
  }
`;

const LoginInfoContainer = styled.div`
  height: 350px;
  width: 100%;
  margin-top: 24px;
  display: flex;

  &:first-child {
    flex: 1;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }

  > div {
    background: #f8f8f8;

    &:first-child {
      flex: 1;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;

      > h2 {
        margin-bottom: 8px;
        font: menu;
        font-size: 38px;
        font-weight: bold;
        letter-spacing: -0.2px;
        max-width: 80%;
      }

      > p {
        margin-bottom: 0;
        font: menu;
        font-size: 17px;
        max-width: 80%;
        letter-spacing: -0.2px;
      }
    }

    &:last-child {
      flex: 1;
      padding: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      background: #f8f8f8;
      > img {
        width: 100%;
        height: 100%;
      }

      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        width: 100%;
      }
    }
  }
`;

const StoreImage = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  flex: 2;
  width: 100%;
  background-size: cover;
  background-image: url("https://lh5.googleusercontent.com/p/AF1QipO3zVN2Fd9sXDx0d1nT1C83GzIQMk0cJAX1-Fxy=w203-h152-k-no");
`;

const Tag = styled.div`
  position: absolute;
  left: -8px;
  top: 8px;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 9px 4px;
  max-width: 50%;
  text-transform: uppercase;
  background: rgb(250, 74, 91);
  color: rgb(255, 255, 255);
  border-color: rgb(209, 42, 59) transparent;

  &::before {
    position: absolute;
    bottom: -9px;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-color: inherit;
    left: 0;
    border-width: 9px 0 0 9px;
  }

  > span {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const CATEGORY = ["Mobile Phones", "Refrigerator", "Smart Watch", "Television"];

const STORES = [
  {
    name: "reliance digital",
    logo: "../../static/images/reliancedigitallogo.png",
    leftColor: "#338fb8",
    rightColor: "#11739d"
  },
  {
    name: "sangeetha mobiles",
    logo: "../../static/images/sangeetha-mobiles-logo.jpeg",
    leftColor: "#0266b2",
    rightColor: "#034878"
  },
  {
    name: "croma",
    logo: "../../static/images/croma.jpg",
    leftColor: "#44a7a3",
    rightColor: "#3a9e98"
  }
];

const POPULAR = ["oppo A5s", "samsung note 10", "iphone x", "vivo v15 pro"];

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

    const { location, onSearch, popularSearch } = this.props;
    return (
      <PageWrapper>
        <Wrapper>
          <CategoryTag>{category}|</CategoryTag>
          {/* <CategoryTag>Mobile Phones </CategoryTag> */}
          <MainCaption>
            Search Now
            <FontAwesomeIcon
              style={{
                marginLeft: 14,
                fontSize: "38px",
                color: "mediumseagreen"
              }}
              icon="search-location"
            />
          </MainCaption>
          <Tagline>Search and buy at the cheapest price</Tagline>
          <SearchContainer>
            <Search placeholder={"Search any mobiles"} />
          </SearchContainer>

          <PopularBox>
            <span>Popular: </span>
            <ul>
              {_.map(POPULAR, (p, i) => {
                return (
                  <li key={i}>
                    <a
                      onClick={() => {
                        onSearch(p);
                      }}
                    >
                      {p}
                    </a>
                  </li>
                );
                r;
              })}
            </ul>
          </PopularBox>

          <StoresNear>
            <div>
              <p>Top stores near</p>
              <span style={{ minWidth: 74, textAlign: "left", flex: 1 }}>
                {!_.isEmpty(location) ? (
                  location.results[0].address_components[1].long_name +
                  " , " +
                  location.results[0].address_components[2].long_name
                ) : (
                  <Spin />
                )}
              </span>

              <div>
                <Link route={"allstore"}>
                  <a>View all store</a>
                </Link>
              </div>
            </div>
            <div>
              {_.map(STORES || [], (s, i) => {
                return <StoreCard data={s} key={i} />;
              })}
            </div>
          </StoresNear>
          <Info />
          <Popular popularSearch={popularSearch} />

          {/* <LoginInfoContainer>
            <div>
              <img src={"../../static/images/feature.gif"}></img>
            </div>
            <div>
              <h2>Why login on FairPe ?</h2>
              <p>
                you don't have to search just copy-paste the URL get the list of
                a similar product in online and offline
              </p>
            </div>
          </LoginInfoContainer> */}

          <Illustrator>
            <div>
              <img src={"../../static/images/ill2.svg"}></img>

              <div></div>
            </div>
          </Illustrator>
          <Stores />
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Home;
