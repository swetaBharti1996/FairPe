import React from "react";
import styled from "styled-components";
import _ from "lodash";

const PopularProduct = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: flex-start;
  padding: 8px 16px;
  align-items: flex-start;
  flex-flow: column;
  > h1 {
    font: menu;
    font-size: 24px;
    margin-bottom: 30px;
    letter-spacing: -0.3px;
    font-weight: 600;
    color: #555;
  }
  > ul {
    margin: 0 0 20px;
    transition: opacity 0.2s ease-in;

    > li {
      padding: 40px 20px 20px;
      border-radius: 2px;
      background: #fff;
      transition: box-shadow 0.1s ease, -webkit-box-shadow 0.1s ease;
      border: 0;
      position: relative;
      width: 292px;
      display: inline-block;
      vertical-align: top;
      float: none;
      font-size: initial;
      white-space: initial;
      margin-bottom: 20px;
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
      > a {
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
          width: 215px;
        }
      }
      > h2 {
        > a {
          font: menu;
          font-weight: 600;
          font-size: 14px;
          color: #666;
        }
      }
      > p {
        > a {
          font: menu;
          font-weight: 600;
          font-size: 15px;
          color: #444;
        }
      }
    }
  }
`;

const POPULAR = [
  {
    title: "Apple iPhone 11 (purple, A/MWM52HN)(128GB Storage)",
    price: 69900,
    storeCount: 3,
    url: "https://fairpe.com/product/FP-LEXAQ992PCYJA0WEGY",
    imageURL:
      "https://www.reliancedigital.in/medias/iPhone-11-128GB-Purple-491584664-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzAzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGU2LzkxOTU4ODI1NDUxODIuanBnfDc4NzVlNWY2MmViNWExMzg2OTdkY2U3ODE1ZDc0NjIwNWM2NjUzZDlhNzljOThmZWRkOGFmMjQwYTg4YzI4MDI"
  },
  {
    title: "Oppo A7 (blue)(3GB RAM, 64GB Storage)",
    price: 8990,
    storeCount: 4,
    url: "https://fairpe.com/product/FP-ODWKEJUHCXFL629B1H",
    imageURL:
      "https://assets.croma.com/medias/sys_master/images/images/h67/h61/8839218266142/216172.png?attachment=true"
  },
  {
    title: "Samsung Galaxy Note 10 (black)(8GB RAM, 256GB Storage)",
    price: 69999,
    storeCount: 5,
    url: "https://fairpe.com/product/FP-VPG8S1VWN0K2GN6J1M",
    imageURL:
      "https://images-eu.ssl-images-amazon.com/images/I/4110WP6GBwL._SL160_.jpg"
  }
];

const Popular = props => {
  const {} = props;
  return (
    <PopularProduct style={{ marginTop: 30 }}>
      <h1>Popular Products</h1>

      <ul>
        {_.map(POPULAR, (p, i) => {
          return (
            <li>
              <a href={p.url} target={"_blank"}>
                <img src={p.imageURL} />
              </a>
              <h2>
                <a href={p.url} target={"_blank"}>
                  {p.title}
                </a>
              </h2>
              <p style={{ marginBottom: 0 }}>
                <a href={p.url} target={"_blank"}>{`Rs ${p.price}`}</a>
              </p>
              <p>
                <a
                  href={p.url}
                  target={"_blank"}
                  style={{ color: "#666" }}
                >{`Available in ${p.storeCount} stores`}</a>
              </p>
            </li>
          );
        })}
      </ul>
    </PopularProduct>
  );
};

export default Popular;
