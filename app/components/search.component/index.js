import React, { Component } from 'react';
import styled from 'styled-components';
import ListingSection from './listingsection';
import Category from './category';
import Filters from './filter';

const Wrapper = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    background: #F7F7F7;
`;
const FilterSection = styled.div`
    width: 25%;
    height: 100%;
`;
class Search extends Component {
    render() {
        const {
            filters,
            query,
            applyFilter,
            applyPriceFilter,
            applyCategoryFilter,
            clearAll
        } = this.props;
        const { categoryBuckets, priceBuckets, sortedlist } = filters;
        console.log(filters);
        return (
            <Wrapper>
                <FilterSection>
                    {/* <Filters> */}
                    {filters.length &&
                        <>
                            <Category bucket={categoryBuckets} updateCategory={applyCategoryFilter} />
                            <Filters
                                clearAll={clearAll}
                                query={query}
                                allbuckets={sortedlist}
                                applyFilter={applyFilter}
                                applyPriceFilter={applyPriceFilter}
                            />
                        </>
                    }
                    {/* </Filters> */}
                </FilterSection>
                <ListingSection products={this.props.products} />
            </Wrapper>
        )
    }
}

export default Search;