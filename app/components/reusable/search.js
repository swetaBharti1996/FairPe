import React, { Component } from "react";
import styled from "styled-components";

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
    margin-left: 48px;
    width: 85%;
    border: none;
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