import React from "react";
import styled from "styled-components";
import _ from "lodash";
import queryString from "query-string";

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  > h2 {
    font: menu;
    font-size: 27px;
    font-weight: 600;
    letter-spacing: -0.3px;
  }
`;

const Body = styled.div`
  margin-top: 32px;
  > ul {
    display: flex;
    margin-top: 24px;
    margin-bottom: 0;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      flex-flow: column;
    }
    > li {
      /* border: 1px solid; */
      flex: 1;
      min-height: 99px;

      margin-bottom: 32px;

      &:last-child {
        > span {
          margin-right: 0;
        }
      }
      > span {
        font: menu;
        text-transform: capitalize;
        color: #333;
        display: block;
        border-bottom: 1px solid #d9d9d9;
        padding-bottom: 16px;
        margin-right: 32px;
        margin-left: 8px;
      }
    }
  }
`;

const PopularList = styled.ul`
  margin-top: 10px;
  margin-right: 32px;
  &:last-child {
    margin-right: 0;
  }

  > li {
    > a {
      display: block;
      padding: 8px;
      font: menu;
      font-size: 14px;
      width: 90%;

      &:hover {
        color: #6276f1;
      }
    }
  }
`;

const SEARCHES = [
  {
    type: "reliance digital",
    list: [
      {
        name: "reliancedigital samsung mobile",
        data: { type: "store", name: "reliancedigital" }
      },
      {
        name: "reliancedigital vivo mobile",
        data: { type: "store", name: "reliancedigital" }
      },
      {
        name: "reliancedigital oppo mobile",
        data: { type: "store", name: "reliancedigital" }
      },
      {
        name: "reliancedigital iphone mobile",
        data: { type: "store", name: "reliancedigital" }
      },
      {
        name: "reliancedigital lyf mobile",
        data: { type: "store", name: "reliancedigital" }
      },
      {
        name: "reliancedigital lenovo mobile",
        data: { type: "store", name: "reliancedigital" }
      }
    ]
  },
  {
    type: "sangeetha mobiles",
    list: [
      {
        name: "sangeethamobiles Iphone mobile",
        data: { type: "store", name: "sangeethamobiles" }
      },
      {
        name: "sangeethamobiles oppo mobile",
        data: { type: "store", name: "sangeethamobiles" }
      },
      {
        name: "sangeethamobiles oneplus mobile",
        data: { type: "store", name: "sangeethamobiles" }
      },
      {
        name: "sangeethamobiles redmi mobile",
        data: { type: "store", name: "sangeethamobiles" }
      },
      {
        name: "sangeethamobiles realme mobile",
        data: { type: "store", name: "sangeethamobiles" }
      },
      {
        name: "sangeethamobiles vivo mobile",
        data: { type: "store", name: "sangeethamobiles" }
      },
      {
        name: "sangeethamobiles samsung mobile",
        data: { type: "store", name: "sangeethamobiles" }
      }
    ]
  },
  {
    type: "popular store search",
    list: [
      {
        name: "croma vivo mobile",
        data: { type: "store", name: "croma" }
      },
      {
        name: "croma iphone mobile",
        data: { type: "store", name: "croma" }
      },
      {
        name: "croma oppo mobile",
        data: { type: "store", name: "croma" }
      },
      {
        name: "tatacliq iphone mobile",
        data: { type: "store", name: "tatacliq" }
      },
      {
        name: "tatacliq samsung mobile",
        data: { type: "store", name: "tatacliq" }
      },
      {
        name: "tatacliq redmi mobile",
        data: { type: "store", name: "tatacliq" }
      }
    ]
  },
  {
    type: "trending brands",
    list: [
      {
        name: "oneplus mobile",
        data: { type: "brand", name: "oneplus" }
      },
      {
        name: "apple mobile",
        data: { type: "brand", name: "apple" }
      },
      {
        name: "oppo mobile",
        data: { type: "brand", name: "oppo" }
      },
      {
        name: "vivo mobile",
        data: { type: "brand", name: "vivo" }
      },
      {
        name: "lyf mobile",
        data: { type: "brand", name: "lyf" }
      },
      {
        name: "redmi mobile",
        data: { type: "brand", name: "redmi" }
      }
    ]
  },
  {
    type: "trending brands",
    list: [
      {
        name: "realme mobile",
        data: { type: "brand", name: "realme" }
      },
      {
        name: "sony mobile",
        data: { type: "brand", name: "sony" }
      },
      {
        name: "honor mobile",
        data: { type: "brand", name: "honor" }
      },
      {
        name: "lenovo mobile",
        data: { type: "brand", name: "lenovo" }
      },
      {
        name: "lg mobile",
        data: { type: "brand", name: "lg" }
      },
      {
        name: "google mobile",
        data: { type: "brand", name: "google" }
      }
    ]
  }
];

const Popular = props => {
  const { popularSearch } = props;
  const onSearch = data => {
    let temp = {
      page: 1,
      term: ""
    };

    if (data.data.type === "brand") {
      temp["category"] = "electronics";
      temp["subcategory"] = "mobile phones";
      temp["level"] = 1;
      temp[data.data.type] = data.data.name;
      temp.term = data.name.split(" ")[0].toLowerCase();
    } else {
      temp[data.data.type] = data.data.name;
      temp.term = data.name.split(" ")[1].toLowerCase();
    }

    let query = queryString.stringify(temp);

    popularSearch(query);
  };

  return (
    <Wrapper>
      <Header>
        <h2>Popular Store & Product Search</h2>
      </Header>

      <Body>
        <ul>
          {_.map(SEARCHES, (s, i) => {
            return (
              <li>
                <span>{s.type}</span>

                <PopularList>
                  {_.map(s.list, (d, i) => {
                    return (
                      <li>
                        <a onClick={() => onSearch(d)}>{d.name}</a>
                      </li>
                    );
                  })}
                </PopularList>
              </li>
            );
          })}
        </ul>
      </Body>
    </Wrapper>
  );
};

export default Popular;
