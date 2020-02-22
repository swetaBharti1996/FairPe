import React, { Component } from "react";
import styled from "styled-components";
import ListingSection from "./listingsection";
import Category from "./category";
import Filters from "./filter";
import Price from "./price";
import _ from "lodash";

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  background: #f7f7f7;
  margin-top: 70px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 93%;
    margin: 0 auto;
    background: #fff;
    margin-top: 80px;
  }
`;
const FilterSection = styled.div`
  width: 20%;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;
const Container = styled.div`
  /* margin-left: 40px;
  margin-right: 40px; */
`;
const SearchByCategories = styled.div`
  height: 110px;
  background: #e3e3e3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  > div {
    display: flex;
    width: 70%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    > p {
      color: #000000;
      font-size: 18px;
      font-family: "Karla", sans-serif;
      /* margin-right: 90px; */

      margin-bottom: 0;
    }
    > img {
      cursor: pointer;
      height: 25px;
    }
  }
`;
class Search extends Component {
  state = {
    showCat: true
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  toggleCategory = () => {
    this.setState({ showCat: !this.state.showCat });
  };
  render() {
    const {
      filters,
      query,
      total,
      count,
      applyFilter,
      applyPriceFilter,
      applyCategoryFilter,
      clearAll
    } = this.props;
    return (
      <Wrapper>
        <FilterSection>
          <SearchByCategories>
            <div>
              <p>All categories</p>
              {this.state.showCat ? (
                <img
                  src="../../static/images/Category_Menu_D@2x.png"
                  onClick={this.toggleCategory}
                />
              ) : (
                <img
                  src="../../static/images/Category_Menu@2x.png"
                  onClick={this.toggleCategory}
                />
              )}
            </div>
          </SearchByCategories>
          {!_.isEmpty(filters) &&
            filters.map((filter, index) => (
              <>
                {Object.keys(filter).map((key, i) => (
                  <Container>
                    {key == "categoryBuckets" && this.state.showCat && (
                      <Category
                        bucket={filter[key]}
                        updateCategory={applyCategoryFilter}
                      />
                    )}
                    {key != "price" &&
                      key != "categoryBuckets" &&
                      !_.isEmpty(filter[key]) && (
                        <Filters
                          bucket={filter[key]}
                          updateFilter={applyFilter}
                          title={key}
                          query={query}
                        />
                      )}
                    {key == "price" && !_.isEmpty(filter[key]) && (
                      <Price
                        bucket={filter[key]}
                        updateFilter={applyPriceFilter}
                      />
                    )}
                  </Container>
                ))}
              </>
            ))}
        </FilterSection>
        <ListingSection
          products={this.props.products}
          applyFilter={applyFilter}
          count={count}
          total={total}
          query={query}
          filters={filters}
          showCat={this.state.showCat}
          applyCategoryFilter={applyCategoryFilter}
          applyPriceFilter={applyPriceFilter}
        />
      </Wrapper>
    );
  }
}

export default Search;
