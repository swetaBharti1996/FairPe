import React, { Component } from "react";
import styled from "styled-components";
import { Checkbox } from "antd";
import _ from "lodash";

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 0 16px;
`;
const Title = styled.h1`
  font-size: 16px;
  font-family: "Karla", sans-serif;
  margin-bottom: 12px;
  font-weight: 600;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: scroll;
`;

const More = styled.p`
  color: #7782f3;
  text-align: left;
  margin-top: 8px;
  cursor: pointer;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;
class Filters extends Component {
  state = {
    length: 10,
    more: false,
    term: ""
  };

  checkSelected = brand => {
    const { query } = this.props;

    const BRAND = query.brand ? query.brand.split(",") : [];
    if (BRAND.indexOf(brand) > -1) return true;
    else return false;
  };
  showMore = length => {
    this.setState({ more: true, length });
  };

  showLess = () => {
    this.setState({ more: false, length: 10 });
  };

  handleBrand = title => {
    if (title.length > 20) {
      title = title.slice(0, 20) + "...";
    }
    return title;
  };
  onBrandSelect = brand => {
    const { query, updateFilter } = this.props;
    const BRAND = query.brand ? query.brand.split(",") : [];
    if (BRAND.indexOf(brand) > -1) {
      BRAND.splice(BRAND.indexOf(brand), 1);
    } else {
      BRAND.push(brand);
    }

    updateFilter("brand", BRAND.join(","));
  };

  render() {
    const { bucket, title } = this.props;
    const { length, more, term } = this.state;

    return (
      <Wrapper>
        {more ? (
          <input
            value={term}
            style={{ padding: "4px 16px", marginBottom: 16, width: "100%" }}
            placeholder={"Search Brand"}
            onChange={event => this.setState({ term: event.target.value })}
          />
        ) : (
          <Title>{title}</Title>
        )}

        <ListContainer>
          {bucket &&
            _.map(
              _.isEmpty(term)
                ? bucket
                : bucket.filter(d => {
                    if (d.key.toLowerCase().includes(_.lowerCase(term)))
                      return d;
                  }),
              (data, index) => {
                if (_.isEmpty(data.key)) return null;
                if (index > length) return null;

                return (
                  <Checkbox
                    key={index}
                    checked={this.checkSelected(data.key)}
                    onClick={() => this.onBrandSelect(data.key)}
                    style={{
                      margin: 0,
                      fontSize: 16,
                      color: "#000",
                      letterSpacing: -0.3,
                      fontFamily: "Karla"
                    }}
                  >
                    {this.handleBrand(data.key)}
                  </Checkbox>
                );
              }
            )}
        </ListContainer>

        {bucket.length > 10 && (
          <>
            {more ? (
              <More onClick={() => this.showLess()}>Show less</More>
            ) : (
              <More onClick={() => this.showMore(bucket.length)}>
                Show all {bucket.length} brand
              </More>
            )}
          </>
        )}
      </Wrapper>
    );
  }
}

export default Filters;
