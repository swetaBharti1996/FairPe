import React, { Component } from "react";
import styled from "styled-components";
import { PageWrapper } from "../../UI";
import _ from "lodash";

const Wrapper = styled.div`
  min-height: 500px;
  text-align: center;

  font-family: "Montserrat";
`;

const Header = styled.div`
  margin-top: 30px;
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
`;

const Body = styled.div`
  margin-top: 64px;
  display: flex;
`;

const LeftBody = styled.div`
  width: 81%;

  > h3 {
    font-family: "Montserrat";
    font-size: 28px;
    color: #292929;
    text-align: left;
  }
`;

const RightBody = styled.div`
  flex: 1;

  > div {
    margin-left: 50px;
    @media only screen and (max-width: ${props => props.theme.bpxlg}) {
      margin-left: 35px;
    }

    > p {
      font-family: "Karla";
      color: #1d1d1d;
      font-size: 24px;
      text-align: left;
      @media only screen and (max-width: ${props => props.theme.bpxlg}) {
        font-size: 23px;
      }
    }
  }
`;

const Stores = styled.ul`
  margin-top: 35px;

  display: flex;
  flex-flow: row wrap;

  > li {
    width: 48.401%;
    margin-right: 32px;
    margin-bottom: 35px;

    @media only screen and (max-width: ${props => props.theme.bpxlg}) {
      width: 48.37%;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
    > div {
      opacity: 1;
      height: 250px;
      > img {
        /* box-shadow: 0px 3px 6px #00000029; */
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
`;

const ListCategory = styled.div`
  margin-top: 35px;

  > ul {
    > li {
      text-align: left;
      > b {
        color: #1d1d1d;
        font-size: 18px;
        text-transform: capitalize;
      }

      > ul {
        > li {
          margin-top: 20px;
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

const BrandContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 30px;
  > h3 {
    font-family: "Montserrat";
    font-size: 28px;
    color: #292929;
    text-align: left;
  }
  > ul {
    display: flex;
    flex-flow: row wrap;
    margin-top: 24px;

    > li {
      margin-right: 40px;
      > div {
        /* border: 1px solid; */
        width: 100px;
        height: 50px;

        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

class Category extends Component {
  state = {
    categorys: [
      {
        sub: "men",
        data: { value: ["formals", "shoes", "shirts", "casuals", "jeans"] }
      },
      {
        sub: "woman",
        data: { value: ["formals", "shoes", "shirts", "casuals", "jeans"] }
      },
      {
        sub: "kids",
        data: { value: ["formals", "shoes", "shirts", "casuals", "jeans"] }
      }
    ]
  };
  render() {
    return (
      <Wrapper>
        <PageWrapper>
          <Header>
            <div>
              <img src={"../../static/images/fashion1.png"}></img>
            </div>

            <HeaderInfo>
              <div>
                <p>Present the best version of yourself</p>
                <b>Fashion</b>
                <span>Explore</span>
              </div>
            </HeaderInfo>
          </Header>

          <Body>
            <LeftBody>
              <h3>Explore Your favourite Fashion Stores</h3>

              <Stores>
                <li>
                  <div>
                    <img src={"../../static/images/image1.png"}></img>
                  </div>
                  <span>Max</span>
                </li>

                <li>
                  <div>
                    <img src={"../../static/images/image2.png"}></img>
                  </div>
                  <span>Reliance Trends</span>
                </li>
                <li>
                  <div>
                    <img src={"../../static/images/image3.png"}></img>
                  </div>
                  <span>SOCH</span>
                </li>

                <li>
                  <div>
                    <img src={"../../static/images/image4.png"}></img>
                  </div>
                  <span>Bata</span>
                </li>
                <li>
                  <div>
                    <img src={"../../static/images/image5.png"}></img>
                  </div>
                  <span>Vans</span>
                </li>

                <li>
                  <div>
                    <img src={"../../static/images/image6.png"}></img>
                  </div>
                  <span>Brand Factory</span>
                </li>
              </Stores>
            </LeftBody>
            <RightBody>
              <div>
                <p>Explore A Category</p>
                <ListCategory>
                  <ul>
                    {_.map(this.state.categorys, (category, index1) => (
                      <li>
                        <b>{category.sub}</b>
                        <ul>
                          {_.map(category.data.value, (d, index2) => (
                            <li>{d}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ListCategory>
              </div>
            </RightBody>
          </Body>

          <BrandContainer>
            <h3>Explore Your favourite Brands</h3>
            <ul>
              <li>
                <div>
                  <img src={"../../static/images/peterengland.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/nike.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/vans.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/max.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/peterengland.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/nike.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/vans.png"}></img>
                </div>
              </li>
              <li>
                <div>
                  <img src={"../../static/images/max.png"}></img>
                </div>
              </li>
            </ul>
          </BrandContainer>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default Category;
