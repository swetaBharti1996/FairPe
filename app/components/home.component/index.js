import React, { Component } from "react";
import styled from "styled-components";
import Search from "../../containers/searchbar.container";
import Stores from "./stores";
import Categories from "./categories";
import Description from "./description";
import { PageWrapper } from "../../UI";

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
  padding: 15px;
  width: 310px;
  background: rgba(245, 245, 245, 0.57);
  font-size: 27px;
  font-weight: lighter;
  border-radius: 0px 35px 35px 0px;
  margin-bottom: 32px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 11px;
    width: 60%;
    font-size: 20px;
  }
`;
const MainCaption = styled.h1`
  font-family: ${props => props.theme.font2};
  width: 53%;
  text-transform: none !important;
  color: ${props => props.theme.default};
  font-size: 40px;
  margin-bottom: 16px;
  letter-spacing: -0.7px;
  font-weight: 600;
  line-height: 1.2;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    font-size: 28px;
  }
`;
const Tagline = styled.p`
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
  /* height: 90px; */
  margin-bottom: 16px;
  width: 70%;
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
  background: url("../../static/images/maybe.png");
  direction: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    > img {
      position: absolute;
      width: 51%;
      height: auto;
      top: 222px;
      right: 103px;
    }
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
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
          {/* <CategoryTag>{category}|</CategoryTag>
          <MainCaption>
            The best prices Online/Offline to shop locally
          </MainCaption>
          <Tagline>Search and buy at the cheapest price</Tagline>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <Illustrator>
            <div>
              <img src={"../../static/images/home1.svg"}></img>
            </div>
          </Illustrator>
          <Stores />

          <Categories
            filterResults={this.props.filterResults}
            categoryData={this.props.categoryData}
            categoryResults={this.props.categoryResults}
          />
          <Description /> */}
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Home;
