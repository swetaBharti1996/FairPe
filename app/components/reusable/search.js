import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 55px; */

  border-radius: 49px;
  /* box-shadow: 0 2px 4px 2px #ddd; */
  box-shadow: 0px 0px 30px #00000014;
  border: 1px solid #ededed;
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100%;
  /* height: 100%; */
  @media only screen and (max-width: 992px) {
    width: 100%;
    border-radius: 32px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 38px 48px; */
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
    padding: 22px 0px;
    font-size: 16px;
    /* width: 16px;     */
  }
  @media only screen and (max-width: 992px) {
    /* margin: 0px 30px; */
    padding: 20px 0px;
    width: 80%;
    margin-left: 8% !important;
  }
`;
const SearchButton = styled.button`
  background-image: linear-gradient(127deg, #ff632a, #e20000);
  width: 11%;
  border: none;
  border-radius: 0px 49px 49px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  > img {
    width: 50%;
  }
  @media only screen and (max-width: 992px) {
    width: 20%;
  }
`;
const SearchDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  z-index: 99;
  width: 100%;
  padding-bottom: 40px;
  /* padding: 10px; */
  background-color: #fff;
  color: #777;
  cursor: default;
  border-radius: 49px;

  @media screen and (max-width: ${props => props.theme.bpxs}) {
    top: 43px;
  }
`;
const SuggestionList = styled.div`
  width: 90%;
  padding: 10px 5%;
  font-size: 16px;
  font-weight: bolder;
  text-transform: capitalize;
  color: #666666;
  background: ${props => (props.hover ? "#eee" : "#fff")};
  :hover {
    background: #eee;
  }
  @media only screen and (max-width: 992px) {
    padding: 10px 8%;
    font-size: 14px;
    width: 80%;
  }
`;
class Search extends Component {
  state = {
    searchTerm: "",
    showSuggestion: false,
    list: [
      "the chemist",
      "the power of positive thinking",
      "everyone has a story",
      "age of shiva"
    ],
    list2: [],
    hovered: ""
  };
  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value, hovered: "" });
  };

  onChange = ({ value }) => {
    if (value) {
      this.state.searchTerm = value;
      this.props.fetchWishlist();
      this.props.onSearch(value);
    }
  };

  setSuggestion = () => {
    this.setState({ showSuggestion: true });
  };
  onInputFocus = f => {
    this.props.loading();
    if (this.state.searchTerm) {
      const resp = this.props.search[this.state.searchTerm];
      if (!resp) {
        this.debouncedFetch(this.state.searchTerm, _.noop);
      }
      this.setState({ searchTerm: this.state.searchTerm });
    }
  };
  debouncedFetch = _.debounce((input, callback) => {
    this.props
      .searchSuggestion(input)
      .then(() => {
        const options = this.props.search[input] || [];
        const result = options.map(x => ({ label: x, value: x }));
        callback(result);
      })
      .catch(error => callback([]));
  }, 500);

  getOptions = (term, callback) => {
    const input = _.trim(term);
    if (!input) {
      return callback([]);
    }
    const options = this.props.search[input] || [];
    if (options.length) {
      const result = options.map(x => (
        <SuggestionList
          onMouseDown={() => {
            this.onChange({ value: x });
          }}
          data={x}
          key={x}
          hover={this.state.hovered === x}
          onMouseOver={this.onHover}
        >
          {x}
        </SuggestionList>
      ));
      return callback(result);
    }

    this.debouncedFetch(input, callback);
  };

  onHover = e => {
    this.setState({
      hovered: e.target.innerHTML
    });
  };

  onUpDown = e => {
    const { searchTerm, hovered, list } = this.state;
    let options = this.props.search[searchTerm] || list;
    let index = options.indexOf(hovered);
    if (e.keyCode == 13) {
      e.preventDefault();
      this.onChange({ value: this.state.hovered || this.state.searchTerm });
      this.setState({ list: [], showSuggestion: false });
    }
    if (e.keyCode === 40 && options.length) {
      let i = ++index;
      if (i > options.length - 1) {
        i = 0;
      }
      this.setState({ hovered: options[i] });
    } else if (e.keyCode === 38) {
      let j = --index;
      if (j < 0) {
        j = options.length - 1;
      }
      this.setState({ hovered: options[j] });
    }
  };
  render() {
    const { searchTerm, showSuggestion, list, hovered } = this.state;
    return (
      <Wrapper>
        <Container>
          <SearchBar
            type="text"
            placeholder="Search for any category / product"
            value={searchTerm}
            onChange={this.handleInputChange}
            onFocus={() => this.setSuggestion()}
            onBlur={() =>
              this.setState({ showSuggestion: false, hovered: null })
            }
            onKeyDown={this.onUpDown}
          />
          <SearchButton onClick={() => this.onChange({ value: searchTerm })}>
            <img src="../../static/images/search_big.png" />
          </SearchButton>
        </Container>
        {showSuggestion && (
          <SearchDropdown onClick={this.onChange}>
            {this.getOptions(searchTerm, data => {
              return data;
            })}
            {!searchTerm &&
              list.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <SuggestionList
                      onMouseDown={() => {
                        this.onChange({ value: data });
                        this.setState({ list: [], value: "" });
                      }}
                      onMouseOver={this.onHover}
                      data={data}
                      hover={hovered === data}
                    >
                      {data}
                    </SuggestionList>
                  </React.Fragment>
                );
              })}
          </SearchDropdown>
        )}
      </Wrapper>
    );
  }
}

export default Search;
