import React, { Component } from "react";
import styled from "styled-components";
import queryString from "query-string";
import { Link } from "../../../server/routes";
import _ from "lodash";

const Wrapper = styled.div`
  margin-top: 200px;
  width: 100%;
  margin-bottom: 70px;
`;
const BigTitle = styled.h1`
  font-size: 88px;
  text-align: center;
  color: #f7f7f7;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;

  margin-bottom: 0;
  @media only screen and (max-width: 992px) {
    font-size: 50px;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-top: -42px;
  margin-bottom: 70px;

  @media only screen and (max-width: 992px) {
    font-size: 24px;
    margin-top: -32px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 18px;
    margin-top: -26px;
  }
`;
const Container = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-between;
  margin: 0;

  > li {
    display: flex;
    cursor: pointer;
    width: 15%;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    flex-flow: column;

    &:hover {
      color: ${props => props.theme.primary};
    }
    @media only screen and (max-width: 992px) {
      width: 24%;
    }
  }
`;

const CatImage = styled.img`
  height: 60px;
  display: block;
  margin: 0px auto;
  margin-bottom: 20px;
  @media only screen and (max-width: 992px) {
    height: 40px;
  }
`;
const CatTitle = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  color: ${props => props.theme.default};
  text-transform: capitalize;

  margin: 0;
  @media only screen and (max-width: 992px) {
    font-size: 16px;
  }
`;

class Categories extends Component {
  state = {
    categorys: [
      "electronics",
      "beauty",
      "baby",
      "books",
      "fashion",
      "gaming",
      "jewellery",
      "toys",
      "kitchen",
      "sports",
      "large-appliances",
      "more"
    ]
  };

  onSearchclick = category => {
    const newQuery = {
      term: category,
      page: 1
    };
    const query = queryString.stringify(newQuery);
    this.props.categoryResults(query);
    this.props.categoryData(category);
  };
  render() {
    const { categorys } = this.state;
    return (
      <Wrapper>
        <BigTitle>PRODUCTS</BigTitle>
        <Title>Buy from these product categories</Title>
        <Container>
          {_.map(categorys, (category, index) => (
            <li key={index}>
              <Link route={"category"} params={{ slug: category }}>
                <a onClick={() => this.onSearchclick(category)}>
                  <CatImage src={`../../static/images/${category}.png`} />
                  <CatTitle>{category}</CatTitle>
                </a>
              </Link>
            </li>
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default Categories;
