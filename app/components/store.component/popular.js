import React from "react";
import styled from "styled-components";

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

const Popular = props => {
  const {} = props;
  return (
    <PopularProduct style={{ marginTop: 30 }}>
      <h1>Popular Products</h1>

      <ul>
        <li>
          <a>
            <img
              src={
                "https://www.reliancedigital.in/medias/OPPO-A1K-Smart-Phones-491570666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NTQ1fGltYWdlL2pwZWd8aW1hZ2VzL2g1Ny9oNTMvOTE0Njk5ODU4NzQyMi5qcGd8OTQ5MmEzNTkwOTk5ZmNkOWMwODI3ZjZmM2Q4OTJkMmQzZTMyN2U0OTVjOWMyN2JhM2Y4NmEzOTQ4NzVhN2U4Zg"
              }
            />
          </a>
          <h2>
            <a>Oppo A1K (red)(2GB RAM, 32GB Storage)</a>
          </h2>
          <p>
            <a>Rs 7490</a>
          </p>
        </li>
        <li>
          <a>
            <img
              src={
                "https://www.reliancedigital.in/medias/iPhone-11-Pro-256GB-Silver-491584677-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzg5OHxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDM0LzkxOTU5MDQzNjg2NzAuanBnfDY2NTZlYTQxYjFlMmIwMjU4NDNlOGEwOGYyMjY2NzhjOGM2NDAyNjE3M2JhNDExNDc1ODE0NDA0NTQ0ZmYzZTg"
              }
            />
          </a>
          <h2>
            <a>Oppo A1K (red)(2GB RAM, 32GB Storage)</a>
          </h2>
          <p>
            <a>Rs 7490</a>
          </p>
        </li>
        <li>
          <a>
            <img
              src={
                "https://www.reliancedigital.in/medias/iPhone-11-128GB-Purple-491584664-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzAzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGU2LzkxOTU4ODI1NDUxODIuanBnfDc4NzVlNWY2MmViNWExMzg2OTdkY2U3ODE1ZDc0NjIwNWM2NjUzZDlhNzljOThmZWRkOGFmMjQwYTg4YzI4MDI"
              }
            />
          </a>
          <h2>
            <a>Apple iPhone 11 (green, A/MWM62HN)(128GB Storage)</a>
          </h2>
          <p>
            <a>Rs 69900</a>
          </p>
        </li>
      </ul>
    </PopularProduct>
  );
};

export default Popular;
