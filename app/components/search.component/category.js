import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const MainContainer = styled.div`
  flex-flow: column;
  margin-bottom: 20px;
  padding: 0 8px;
`;
const CategoryContainer = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
`;
const Arrow = styled.div`
  background: none;
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #220a3e;
  cursor: pointer;
  :focus {
    border: none;
  }
`;
const ArrowEmpty = styled.div`
  padding: 5px;
  /* opacity: 0.8; */
  /* background: #eee; */
  align-items: center;
  border-radius: 50;
  justify-content: center;
`;
const EachCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 8px;
`;
const CategoryKey = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  align-items: center;
  justify-content: space-between;
`;
const SubCategory = styled.div`
  padding-left: 20px;
`;
const CategoryHolder = styled.button`
  border: none;
  background: none;
  color: #000000;
  padding: 5px;
  cursor: pointer;
  outline: none;
`;
const CategoryText = styled.p`
  font-family: "Karla", sans-serif;
  color: #000000;
  text-transform: capitalize;

  margin: 0;
  font-size: 18px;

  margin: 0;
  @media only screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;
const CategoryText1 = styled.p`
  font-family: "Karla", sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-transform: capitalize;
  margin: 0;
  /* margin-bottom: 10px; */
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;

var count = 0;
class Category extends Component {
  state = {
    selected: "",
    count: 0
  };
  componentDidMount = () => {
    if (!_.isEmpty(this.props.bucket))
      this.handleList(this.props.bucket[0].key);
  };
  handleSelect = (cat, key, i) => {
    this.setState({ selected: key });
    this.props.updateCategory(cat, key, i);
  };
  handleList = key => {
    if (this.state[key]) this.setState({ [key]: false });
    else this.setState({ [key]: true });
  };
  subCatContainer = (cat, bucket, subCat, i) => {
    if (i <= 5) {
      count = 0;
      return (
        <>
          {bucket.map(item => {
            count = 0;
            _.map(item[subCat]["buckets"], term => {
              if (term.key != "nil") count++;
            });
            return (
              <>
                {item.key != "nil" && (
                  <SubCategory>
                    <CategoryKey>
                      <CategoryHolder
                        onClick={() => this.handleSelect(cat, item.key, i - 1)}
                        background={this.state.selected == item.key}
                      >
                        <CategoryText
                          background={this.state.selected == item.key}
                        >
                          {item.key}
                        </CategoryText>
                      </CategoryHolder>
                      {count > 0 ? (
                        <Arrow
                          onClick={() => this.handleList(item.key)}
                          background={this.state.selected == item.key}
                        >
                          <i className="material-icons">
                            {this.state[item.key]
                              ? "keyboard_arrow_down"
                              : "keyboard_arrow_right"}
                          </i>
                        </Arrow>
                      ) : (
                        <ArrowEmpty
                          background={this.state.selected == item.key}
                        />
                      )}
                    </CategoryKey>
                    {this.state[item.key] &&
                      this.subCatContainer(
                        cat,
                        item[subCat]["buckets"],
                        "SubCategory" + (i + 1),
                        i + 1
                      )}
                  </SubCategory>
                )}
              </>
            );
          })}
        </>
      );
    }
    return;
  };
  render() {
    return (
      <MainContainer>
        <CategoryContainer>
          {this.props.bucket.map(item => (
            <>
              {item.key != "nil" && (
                <EachCategory>
                  <CategoryKey onClick={() => this.handleList(item.key)}>
                    <CategoryHolder>
                      <CategoryText1>{item.key}</CategoryText1>
                    </CategoryHolder>
                    <Arrow background={this.state.selected == item.key}>
                      <i className="material-icons">
                        {this.state[item.key]
                          ? "keyboard_arrow_down"
                          : "keyboard_arrow_right"}
                      </i>
                    </Arrow>
                  </CategoryKey>
                  {this.state[item.key] &&
                    this.subCatContainer(
                      item.key,
                      item["SubCategory1"]["buckets"],
                      "SubCategory2",
                      2
                    )}
                </EachCategory>
              )}
            </>
          ))}
        </CategoryContainer>
      </MainContainer>
    );
  }
}

export default Category;
