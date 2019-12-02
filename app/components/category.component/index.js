import React, { Component } from "react";
import styled from "styled-components";
import ProductCard from "../reusable/productCard";
import { PageWrapper } from "../../UI";
import { clearCategoryData } from "../../actions/syncAction";
import _ from "lodash";
import { categoryResults } from "../../actions/asyncAction";

const Header = styled.div`
  padding-top: 24px;
  position: relative;

  > div {
    &:first-child {
      width: 80%;
      height: 339px;
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    > div {
      &:first-child {
        width: 100%;
        height: 160px;
      }
    }
  }
`;

const HeaderInfo = styled.div`
  width: 346px;
  height: 230px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
  position: absolute;
  right: 3px;
  top: 81px;
  display: flex;
  align-items: flex-end;

  > div {
    height: 70%;
    width: 69%;
    margin: 0 auto;
    > p {
      color: #504d4d;
      font-family: "Montserrat";
      font-size: 24px;
      text-align: left;
      margin-bottom: 12px;
      line-height: 1.2;
    }
    > b {
      color: #504d4d;
      font-size: 18px;
      text-align: left;
      display: block;
      margin-bottom: 12px;
    }
    > span {
      color: ${props => props.theme.primary};
      font-size: 14px;
      display: block;
      font-family: "Karla";
      text-align: left;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const Body = styled.div`
  margin-top: 32px;
  display: flex;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column-reverse;
  }
`;

const LeftBody = styled.div`
  width: 81%;

  > div > h3 {
    font-family: "Montserrat";
    font-size: 23px;
    color: #292929;
    text-align: left;
    font-weight: 600;
    margin: 0;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    > div > h3 {
      font-size: 24px;
    }
  }
`;

const RightBody = styled.div`
  flex: 1;

  > div {
    margin-left: 50px;

    > p {
      font-family: "Karla";
      color: #1d1d1d;
      font-size: 22px;
      text-align: left;
      letter-spacing: -1px;
      margin: 0;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    > div {
      margin: 0;
    }
  }
`;

const Stores = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-flow: row wrap;

  > li {
    width: 48.401%;
    margin-right: 32px;
    margin-bottom: 35px;

    &:nth-child(2n) {
      margin-right: 0;
    }
    > div {
      opacity: 1;
      height: auto;
      > img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
      }
    }
    > span {
      display: block;
      color: #1d1d1d;
      font-family: "Karla";
      font-size: 18px;
      text-align: left;
      padding: 0 10px;
      margin-top: 8px;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    border-top: 1px solid #999;
  }
`;

const ListCategory = styled.div`
  margin-top: 40px;

  > ul {
    > li {
      text-align: left;
      > b {
        color: #1d1d1d;
        font-size: 18px;
        text-transform: capitalize;
        line-height: 1.2;
        letter-spacing: -0.5px;
        display: block;
        margin-bottom: 16px;
      }

      > ul {
        > li {
          margin-top: 8px;
          color: #1d1d1d;
          font-size: 16px;
          text-transform: capitalize;

          &:last-child {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;

const ProductListing = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    justify-content: center;
    > a {
      width: 46.5% !important;
    }
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  margin: 16px 0;
`;

const SimilarStore = styled.div`
  flex: 1;
  margin-right: 16px;
  height: 200px;
  &:last-child {
    margin-right: 0;
  }
`;

const SimilarStoreContainer = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 16px;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 16px;
  justify-content: flex-start;
`;

const BrandBox = styled.a`
  display: block;
  width: 134.35px;
  height: 75px;
  border: 1px solid #eee;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 16px;

  &:nth-child(7n) {
    margin-right: 0;
  }

  > img {
    width: 80%;
    height: 80%;
  }
`;

const ContentBox = styled.div`
  margin-bottom: 24px;

  > p {
    margin: 0;
    font-size: 16px;
    color: #333333;
    > a {
      color: #6376f1;
      font-weight: bold;
    }
  }
`;

class Category extends Component {
  state = {};

  componentWillUnmount = () => {
    clearCategoryData();
  };

  capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  render() {
    const { filters, products, category, onSubCat, onSearch } = this.props;

    return (
      <PageWrapper>
        <Header>
          <div>
            <img src={category.banner && category.banner.url}></img>
          </div>

          <HeaderInfo>
            <div>
              <p>Present the best version of yourself</p>
              <b>{category.category && category.category.toUpperCase()}</b>
              <span>Explore</span>
            </div>
          </HeaderInfo>
        </Header>

        <Body>
          <LeftBody>
            {!_.isEmpty(category.content) && (
              <ContentBox
                dangerouslySetInnerHTML={{ __html: category.content }}
              />
            )}

            {!_.isEmpty(category.store) && (
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ marginBottom: 16 }}>Similar Offline Store</h3>

                <SimilarStoreContainer>
                  {_.map(category.store, (data, i) => {
                    return (
                      <SimilarStore>
                        <img
                          style={{ width: "100%", height: "100%" }}
                          src={data.url}
                        />
                      </SimilarStore>
                    );
                  })}
                </SimilarStoreContainer>
              </div>
            )}

            {!_.isEmpty(category.brand) && (
              <div style={{ marginBottom: 32 }}>
                <h3>Top {this.capitalize(category.category)} Brand</h3>

                <BrandContainer>
                  {_.map(category.brand, (data, i) => {
                    return (
                      <BrandBox
                        onClick={() => onSearch(_.lowerCase(data.brand))}
                      >
                        <img src={data.url} />
                      </BrandBox>
                    );
                  })}
                </BrandContainer>
              </div>
            )}

            <div>
              <h3>
                {`Explore Your favourite ${this.capitalize(category.category)}
                 Product`}
              </h3>

              <Stores>
                <ProductContainer>
                  {products.products && (
                    <ProductListing>
                      {_.map(products.products, (product, id) => (
                        <ProductCard
                          style={{ width: "25%" }}
                          key={id}
                          product={product}
                        />
                      ))}
                    </ProductListing>
                  )}
                </ProductContainer>
              </Stores>
            </div>
          </LeftBody>
          <RightBody>
            <div>
              <p>Explore A Category</p>
              {category.subcategory ? (
                <ListCategory>
                  <ul>
                    {_.map(category.subcategory, (category, index1) => (
                      <li>
                        <b>{category.main}</b>
                        <ul>
                          {_.map(category.sub, (d, index2) => (
                            <li>
                              <a
                                style={{ color: "inherit" }}
                                onClick={() => onSubCat(d)}
                              >
                                {d}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ListCategory>
              ) : (
                <ListCategory>
                  <p>No Data</p>
                </ListCategory>
              )}
            </div>
          </RightBody>
        </Body>
      </PageWrapper>
    );
  }
}

export default Category;
