import React, { Component } from 'react';
import styled from 'styled-components';
import ListingSection from './listingsection';

const Wrapper = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: row;
`;
const FilterSection = styled.div`
    width: 25%;
`;
class Search extends Component{
    render(){
        return(
            <Wrapper>
                <FilterSection/>
                <ListingSection/>
            </Wrapper>
        )
    }
}

export default Search;