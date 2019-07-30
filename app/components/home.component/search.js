import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 1063px;
    /* padding: 38px 48px; */
    background: #fff;
    border-radius: 49px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
    margin-bottom: 55px;
`;
const SearchBar = styled.input`
    font-size: 20px;
    margin: 38px 0px;
    margin-left: 48px;
    width: 931px;
    border: none;
    ::placeholder {
       color: #999999;
   }
`;
const SearchButton = styled.button`
    background-image: linear-gradient(127deg, #FF632A, #E20000);   
    width: 132px;
    border: none;
    border-radius: 0px 49px 49px 0px;
`;
class Search extends Component{
    render(){
        return(
            <Wrapper>
                <SearchBar placeholder="Search for any category / product"/>
                <SearchButton>
                    <img src="../../static/images/search_big.png"/>
                </SearchButton>
            </Wrapper>
        )
    }
}

export default Search;