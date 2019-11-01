import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "../../containers/searchbar.container";
import ProductCard from "../reusable/productCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import DropDown from "../reusable/dropdown";
import { Drawer } from "antd";
import Filters from "./filter";
import Price from "./price";
import Category from "./category";

const CustomDrawer = styled(Drawer)`
  > div[class="ant-drawer-content-wrapper"] {
    position: absolute;
    top: 80px;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  background: #f7f7f7;
  margin-bottom: 40px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 110px;
  justify-content: center;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    display: none;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SearchContainer = styled.div`
  width: 80%;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;
const DataContainer = styled.div`
  background: #fff;
`;
const ResultDetails = styled.div`
  font-family: "Karla", sans-serif;
  font-size: 16px;
  color: #666666;
  width: 100%;
  padding: 16px 0px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  > span {
    margin-left: 42px;
    font-size: 18px;
    color: #220a3e;
    width: inherit;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    align-items: center;
    flex-flow: column-reverse;

    > span {
      margin: 0;
      margin-right: 6px;
      font-size: 14px;
      width: 93%;
      display: block;
    }
  }
`;
const ProductListing = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 0 24px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    padding: 0;
  }

  /* display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  padding: 80px 0;
  padding-left: 30px;
  @media only screen and (max-width: 1440px) {
    grid-template-columns: repeat(auto-fit, 290px);
    padding-left: 50px;
  } */
  /* margin-bottom: 50px; */
`;
const LoadMore = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > a {
    color: ${props => props.theme.primary};
    font-weight: bolder;
    font-size: 22px;
  }
  > i {
    color: ${props => props.theme.primary};
    font-size: 32px;
  }
`;
const NoDataText = styled.div`
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
  color: #888;
  margin-top: 100px;
`;
const NoDataImg = styled.img`
  display: block;
  margin: 50px auto;
  height: 300px;
`;
const DropDownContainer = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 42px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    height: 34px;
    justify-content: flex-start;
  }
`;

const FilterBox = styled.div`
  > span {
    display: none;
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 12px;
    align-items: center;
    > span {
      display: block;
    }
  }
`;

const ContainerFilter = styled.div`
  /* margin-left: 40px;
  margin-right: 40px; */
`;

const Icon = styled.span`
  cursor: pointer;
`;
const list = [
  "Price -- Low to High",
  "Price -- High to Low",
  "Dis -- Low to High",
  "Dis -- High to Low"
];

const ProductContainer = styled.div`
  width: 100%;
  margin: 16px 0;
`;
class ListingSection extends Component {
  state = {
    load: true,
    query: {},
    drawer: false
  };
  isBottom(el) {
    return el.getBoundingClientRect().bottom - 300 <= window.innerHeight;
  }
  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({ load: true });
      this.setState({ query: this.props.query });
    }
  }
  onSort = type => {
    this.props.applyFilter("sort", type);
  };

  trackScrolling = () => {
    const { products, total } = this.props;
    let length;
    if (products) length = Object.keys(products).length;
    const wrappedElement = document.getElementById("products");
    if (this.isBottom(wrappedElement) && length < total) {
      if (this.state.load && this.props.query.page < 5) this.loadMore();
      // document.removeEventListener('scroll', this.trackScrolling);
    }
  };
  loadMore = () => {
    this.setState({ load: false });
    let page = Number(this.props.query.page) + 1;
    this.props.applyFilter("page", page);
    this.setState({ page: page });
  };

  _toggleDrawer = () => {
    this.setState(prevState => ({
      drawer: !prevState.drawer
    }));
  };
  render() {
    const {
      products,
      count,
      total,
      query,
      filters,
      showCat,
      applyCategoryFilter,
      applyFilter,
      applyPriceFilter
    } = this.props;
    let length;
    if (products) length = Object.keys(products).length;

    const { drawer } = this.state;
    return (
      <Wrapper id="products">
        <Container>
          <SearchContainer>
            <SearchBar />
          </SearchContainer>
        </Container>
        <DataContainer>
          {!_.isEmpty(products) ? (
            <InnerContainer>
              <CustomDrawer
                title={"Filter"}
                placement="left"
                visible={drawer}
                onClose={this._toggleDrawer}
                closable={false}
              >
                {!_.isEmpty(filters) &&
                  _.map(filters || [], (filter, index) => (
                    <>
                      {Object.keys(filter).map((key, i) => (
                        <ContainerFilter>
                          {key == "categoryBuckets" && showCat && (
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
                        </ContainerFilter>
                      ))}
                    </>
                  ))}
              </CustomDrawer>
              <ResultDetails>
                <span>
                  <b>{length} Results</b> from {total} results for "{query.term}
                  "
                </span>
                <FilterBox>
                  <DropDownContainer>
                    <DropDown list={list} onSort={this.onSort} />
                  </DropDownContainer>

                  <Icon onClick={this._toggleDrawer}>
                    <FontAwesomeIcon icon="filter" />
                  </Icon>
                </FilterBox>
              </ResultDetails>
              <ProductContainer>
                <ProductListing>
                  {_.map(products, (product, id) => (
                    <ProductCard key={id} product={product} />
                  ))}
                </ProductListing>
              </ProductContainer>
              {products && length < total && (
                <LoadMore onClick={() => this.loadMore()}>
                  <a>Load More</a>
                  <i className="material-icons">keyboard_arrow_down</i>
                </LoadMore>
              )}
            </InnerContainer>
          ) : (
            <Container>
              <NoDataText>
                Sorry we didn't find anything. Try exploring something else!
              </NoDataText>
              <NoDataImg src="../../static/images/empty.svg" />
            </Container>
          )}
        </DataContainer>
      </Wrapper>
    );
  }
}

export default ListingSection;
