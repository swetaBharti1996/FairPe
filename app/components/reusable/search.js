import React, { Component } from "react";
import styled from "styled-components";
import _ from 'lodash';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100%;
    /* padding: 38px 48px; */
    background: #fff;
    border-radius: 49px;
    box-shadow: 0 2px 4px 2px #ddd;
    /* margin-bottom: 55px; */
`;
const SearchBar = styled.input`
    font-size: 16px;
    margin: 3% 0px;
    margin-left: 40px !important;
    width: 85%;
    height: 100%;
    /* padding: 25px 30px; */
    border: none !important;
    :focus{
        border: none;
    }
    ::placeholder {
       color: #999999;
    };
`;
const SearchButton = styled.button`
    background-image: linear-gradient(127deg, #FF632A, #E20000);   
    width: 15%;
    border: none;
    border-radius: 0px 49px 49px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
        width: 40%;
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
        console.log(e.target.value);
        this.setState({ searchTerm: e.target.value });
    };

    onChange = ({ value }) => {
        console.log('hello');
        if (value) {
            this.state.searchTerm = value;
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
                        analytics(
                            Events.SEARCH_EVENT,
                            {},
                            { event: "suggestion-click", searchTerm: x }
                        );
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

    onEnterPress = term => e => {
        if (e.key == "Enter") {
            console.log('enter');
            e.preventDefault();
            this.onChange({ value: term || this.state.searchTerm });
        }
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
                <SearchBar
                    type="text"
                    placeholder="Search for any category / product"
                    value={searchTerm}
                    onChange={this.handleInputChange}
                    onFocus={()=>this.setSuggestion()}
                    onKeyPress={() => this.onEnterPress(hovered)}
                    onBlur={() =>
                        this.setState({ showSuggestion: false, hovered: null })
                    }
                    // onKeyDown={this.onUpDown}
                />
                <SearchButton
                    onClick={() => 
                        this.onChange({ value: searchTerm })
                    }
                >
                    <img src="../../static/images/search_big.png" />
                </SearchButton>
            </Wrapper>
        )
    }
}

export default Search;