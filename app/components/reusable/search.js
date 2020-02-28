import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import { Button } from "../../UI";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import { makeRequest } from "../../constants/request";
import AppConstants from "../../constants/appConstant";
import queryString from "query-string";
// const Wrapper = styled.div`
//   display: flex;
// `;

// const SearchContainer = styled.div`
//   flex: 1;
// `;

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided
//   }),
//   control: () => ({
//     padding: "8px",
//     border: "1px solid #bfbfbf",
//     borderTopLeftRadius: 3,
//     borderBottomLeftRadius: 3,
//     flex: 1
//   })
// };

// const Search = props => {
//   const { searchSuggestion, search } = props;

//   const request = term => {
//     // return makeRequest(
//     //   "get",
//     //   `${AppConstants.default.suggestionURL}/suggest?term=${term}`
//     // )
//     //   .then(data => {
//     //     console.log(data);
//     //   })
//     //   .catch(err => {
//     //     console.log(err);
//     //   });

//     searchSuggestion(term, data => {
//       if (data.length) {
//         return { value: "value", label: "label" };
//       }
//     });
//   };

//   const getOptions = (term, callback) => {
//     const input = _.trim(term);
//     if (!input) {
//       return callback([]);
//     }
//     const options = search[input] || [];
//     if (options.length) {
//       return callback(result);
//     }
//   };

//   const promiseOptions = inputValue =>
//     new Promise(resolve => {
//       resolve(request(inputValue));
//     });

//   return (
//     <Wrapper>
//       <SearchContainer>
//         <AsyncSelect
//           styles={customStyles}
//           cacheOptions
//           placeholder={"search any product "}
//           defaultOptions
//           loadOptions={promiseOptions}
//           components={{
//             IndicatorsContainer: () => null
//           }}
//         />
//       </SearchContainer>

//       <Button
//         style={{
//           borderBottomLeftRadius: 0,
//           borderTopLeftRadius: 0,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: 21
//         }}
//         active
//       >
//         <FontAwesomeIcon icon={"search"} />
//       </Button>
//     </Wrapper>
//   );
// };

// export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 55px; */

  border-radius: 3px;
  /* box-shadow: 0 2px 4px 2px #ddd; */
  /* box-shadow: 0px 0px 30px #00000014; */
  border: 1px solid #999999cf;
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100%;
  /* height: 100%; */

  position: relative;
  @media only screen and (max-width: 992px) {
    width: 100%;
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
  padding: 14px 0px;

  font-size: 15px;
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
    padding: 15px 0px;
    font-size: 16px;
    letter-spacing: -0.3px;
    /* width: 16px;     */
  }
  @media only screen and (max-width: 992px) {
    /* margin: 0px 30px; */
    padding: 14px 0px;
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
const SearchDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  width: 89%;
  padding-bottom: 8px;
  background-color: #fff;
  color: #777;
  cursor: default;
  border-radius: 3px;
  position: absolute;
  z-index: 100000;
  margin: 0;
  border: 1px solid #dfdfdf;
  top: 54px;

  @media screen and (max-width: ${props => props.theme.bpxs}) {
    top: 43px;
  }
`;
const SuggestionList = styled.div`
  width: 100%;
  padding: 6px 5%;
  font-size: 15px;
  font-weight: bolder;
  text-transform: capitalize;
  color: #666666;
  cursor: pointer;
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
    list: [],
    list2: [],
    hovered: ""
  };
  handleInputChange = e => {
    this.setState({ searchTerm: e.target.value, hovered: "" });
  };

  onChange = ({ value }) => {
    const { router, customSearch } = this.props;

    if (value) {
      this.state.searchTerm = value;
      this.props.fetchWishlist();

      if (router.pathname === "/store") {
        let temp = {
          term: value,
          store: router.query.name.replace(" ", ""),
          page: 1
        };
        customSearch(queryString.stringify(temp));
      } else {
        this.props.onSearch(value);
      }
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

    const { placeholder } = this.props;

    return (
      <Wrapper>
        <Container>
          <SearchBar
            type="text"
            placeholder={placeholder}
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
