import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { message, Tag, Button } from "antd";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageWrapper = styled.div`
  margin-top: 70px;
  background: #f8f8f8;
  height: 100vh;
  /* background: linear-gradient(to right, #cbcaa5, #334d50); */
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  width: 1280px;
  margin: 0 auto;
  flex-flow: column;
  height: 599px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    padding: 16px;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-bottom: 16px;
  > img {
    width: 200px;
    height: auto;
    opacity: 0.9;
  }
  > h3 {
    font: menu;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: -0.3px;
    color: #4a4a4a;
    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      font-size: 30px;
      margin-bottom: 8px;
    }
  }
`;

const SearchContainer = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  border: 1px solid #dfdfdf;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 3px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  font-size: 18px;
  font-family: ${props => props.theme.font};
  /* margin: 20px 0px; */
  margin-left: 5% !important;
  width: 85%;
  height: 100%;
  padding: 22px 0px;
  border: none !important;
  :focus {
    border: none;
  }
  ::placeholder {
    color: #999999;
    font-family: ${props => props.theme.font};
  }
  @media only screen and (max-width: 1440px) {
    /* margin: 15px 0px; */
    padding: 18px 0px;
    font-size: 16px;
    /* width: 16px;     */
  }
  @media only screen and (max-width: 992px) {
    /* margin: 0px 30px; */
    padding: 18px 0px;
    width: 80%;
    margin-left: 8% !important;
  }
`;
const SearchButton = styled.button`
  /* background-image: linear-gradient(127deg, #ff632a, #e20000); */
  width: 11%;
  border: none;
  border-radius: 0px 3px 3px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;

  background: ${props =>
    `linear-gradient(127deg, ${props.theme.primary}, ${props.theme.secondary})`};
  > img {
    width: 50%;
  }
  @media only screen and (max-width: 992px) {
    width: 20%;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Loader = styled.div``;

const TagContainer = styled.div`
  width: 650px;
  margin-top: 8px;
  padding: 8px 0;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }

  > p {
    display: inline-block;
    margin-bottom: 0;
    font: menu;
    font-size: 14px;
    margin-right: 6px;
    margin-left: 4px;
    color: #4a4a4a;
  }
`;

const FoundContainer = styled.div`
  width: 650px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
  > span {
    margin-bottom: 12px;
    display: block;
    font: menu;
    font-size: 14px;
    letter-spacing: -0.3px;
  }
  > ul {
    display: flex;
    > li {
      background: #fff;
      margin-right: 16px;
      text-align: center;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      overflow: hidden;
      flex-flow: column;
      width: 250px;

      &:last-child {
        margin-right: 0;
      }
      > a {
        display: block;
        padding: 24px;
        width: 161px;
        height: auto;
        > img {
          opacity: 1;
          max-width: 100%;
          max-height: 94%;
          margin: auto;
        }
      }
      > h2 {
        padding: 0px 8px;
        font: menu;
        font-size: 14px;
        font-weight: 600;
        color: #4a4a4a;
        text-align: left;
      }
      > p {
        font: menu;
        padding: 0 8px;
        font-size: 14px;
        font-weight: 600;
        text-align: left;
        width: 100%;
        color: #6276f1;
        margin-top: 8px;
      }
    }
  }
`;

const LoginText = styled.div`
  font: menu;
  text-align: center;
  font-weight: bolder;
  font-size: 28px;
  color: #555;
  letter-spacing: -0.5px;
  margin-top: 16px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 24px;
  }
`;
const NoLogin = styled.img`
  height: 351px;
  display: block;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    height: 195px;
  }
`;

const StoreLogo = styled.img`
  width: 80px;
`;

const SearchByURL = props => {
  const {
    searchByURL,
    url,
    productDetail,
    product,
    syncGetSearchByURL,
    syncGotProductDetail,
    auth
  } = props;

  useEffect(() => {
    return () => {
      syncGetSearchByURL([]);
      syncGotProductDetail({});
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState();

  const onSearch = () => {
    if (term) {
      setLoading(true);

      setTimeout(() => {
        searchByURL(term, bol => {
          if (_.isEmpty(bol)) {
            message.error("Product Not Found", 2);
            return setLoading(false);
          }
          if (bol) {
            let URL = bol[0];

            if (URL) {
              let startPoint = "product/";

              let id = URL.slice(
                URL.indexOf(startPoint) + startPoint.length,
                URL.length
              );

              productDetail(id, bol => {
                setLoading(false);
                if (bol) {
                } else {
                  message.error("sorry,product not found", 2);
                }
              });
            }
          } else {
            setLoading(false);
            message.error("error", 1);
          }
        });
      }, 1500);
    }
  };

  return (
    <PageWrapper>
      {!_.isEmpty(auth) ? (
        <Wrapper>
          <Container>
            <Title>
              <h3>Paste Product URL</h3>
            </Title>
            <SearchContainer>
              <SearchBar
                type="text"
                placeholder="Enter product URL "
                value={term}
                onChange={e => setTerm(e.target.value)}
                // onKeyDown={this.onUpDown}
              />
              <SearchButton onClick={onSearch}>
                <img src="../../static/images/search_big.png" />
              </SearchButton>
            </SearchContainer>

            <TagContainer>
              <p style={{ display: "block", marginBottom: 8 }}>Working on :</p>
              <Tag
                style={{
                  fontSize: "14px",
                  letterSpacing: -0.3,
                  padding: 3,
                  marginBottom: 6
                }}
                color={"geekblue"}
              >
                <StoreLogo
                  src={
                    "https://cdn.grabon.in/gograbon/images/merchant/1545149127709/amazon-recharge-logo.png"
                  }
                />
              </Tag>
              <Tag
                style={{
                  fontSize: "14px",
                  letterSpacing: -0.3,
                  padding: 3,
                  marginBottom: 6
                }}
                color={"geekblue"}
              >
                <StoreLogo
                  src={
                    "https://cdn.grabon.in/gograbon/images/merchant/1545146890469/flipkart-logo.png"
                  }
                />
              </Tag>
              <Tag
                style={{
                  fontSize: "14px",
                  letterSpacing: -0.3,
                  padding: 3,
                  marginBottom: 6
                }}
                color={"geekblue"}
              >
                <StoreLogo
                  src={
                    "https://cdn.grabon.in/gograbon/images/merchant/1560169346883/tata-cliq-logo.jpg"
                  }
                />
              </Tag>
              <Tag
                style={{
                  fontSize: "14px",
                  letterSpacing: -0.3,
                  padding: 3,
                  marginBottom: 6
                }}
                color={"geekblue"}
              >
                <StoreLogo
                  src={
                    "https://cdn.grabon.in/gograbon/images/merchant/1545146897952/croma-logo.jpeg"
                  }
                />
              </Tag>
            </TagContainer>

            <LoaderContainer>
              {loading && <Loader className="customLoader"></Loader>}

              {!loading && !_.isEmpty(url) && (
                <FoundContainer>
                  <span>{`Found ${url.length} product`}</span>

                  <ul>
                    <li>
                      <a target="_blank" href={url[0]}>
                        <img
                          style={{ width: 200 }}
                          src={!_.isEmpty(product) ? product.data.image : ""}
                        />
                      </a>
                      <h2>
                        <a target="_blank" href={url[0]}>
                          {!_.isEmpty(product) && product.data.title}
                        </a>
                      </h2>
                      <p>
                        <a target="_blank" href={url[0]}>
                          more <FontAwesomeIcon icon={"angle-right"} />
                        </a>
                      </p>
                    </li>
                  </ul>
                </FoundContainer>
              )}
            </LoaderContainer>
          </Container>
        </Wrapper>
      ) : (
        <Wrapper>
          <NoLogin src="../../static/images/unauth2.svg" />
          <LoginText>Login and start using search by URL</LoginText>
        </Wrapper>
      )}
    </PageWrapper>
  );
};

export default SearchByURL;
