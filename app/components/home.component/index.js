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
  margin-top: 100px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    margin-top: 50px;
  }
  @media only screen and (max-width: ${props => props.theme.bpmd}) {
  }
`;

const CategoryTag = styled.div`
  border-left: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  padding: 15px 15px;
  width: 310px;
  background: rgba(245, 245, 245, 0.57);
  font-size: 36px;
  font-weight: lighter;
  border-radius: 0px 35px 35px 0px;
  margin-bottom: 50px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    font-size: 28px;
    width: 250px;
  }
  @media only screen and (max-width: ${props => props.theme.bpmd}) {
    font-size: 24px;
    padding: 10px 15px;
    margin-bottom: 30px;
    width: 200px;
  }
`;
const MainCaption = styled.h1`
  font-family: ${props => props.theme.font2};
  width: 53%;

  text-transform: none !important;
  color: ${props => props.theme.black200};
  /* line-height: 60px; */
  font-size: 44px;
  margin-bottom: 20px;
  /* letter-spacing: -1px; */
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    width: 50%;
    font-size: 36px;
    line-height: 44px;
  }
  @media only screen and (max-width: ${props => props.theme.bpmd}) {
    width: 100%;
    font-size: 32px;
  }
`;
const Tagline = styled.p`
  font-size: 24px;
  color: ${props => props.theme.black600};
  margin-bottom: 70px;
  font-weight: bold;
  letter-spacing: -0.7px;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    margin-bottom: 50px;
    font-size: 22px;
  }
  @media only screen and (max-width: ${props => props.theme.bpmd}) {
    margin-bottom: 100px;
  }
`;
const SearchContainer = styled.div`
  position: relative;
  z-index: 100;
  /* height: 90px; */
  margin-bottom: 30px;
  height: 90px;
  width: 70%;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    height: 70px;
  }
  @media only screen and (max-width: ${props => props.theme.bpmd}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Illustrator = styled.div`
  position: absolute;
  top: -61px;
  right: -15px;
  width: 61%;
  height: 610px;
  background: url("../../static/images/maybe.png");
  direction: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  @media only screen and (max-width: ${props => props.theme.bpxlg}) {
    top: -68px;
    height: 533px;
  }
  > div {
    position: relative;

    width: 100%;
    height: 100%;
    > img {
      position: absolute;
      width: 51%;
      height: auto;
      top: 171px;
      right: 139px;
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
      <PageWrapper style={{ position: "relative" }}>
        <Wrapper>
          <CategoryTag>{category}|</CategoryTag>
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

          <Categories filterResults={this.props.filterResults} categoryData={this.props.categoryData}/>
          <Description />
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Home;
