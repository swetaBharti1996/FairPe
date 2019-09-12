import React, { Component } from 'react';
import styled from 'styled-components';
import ListingSection from './listingsection';
import Category from './category';
import Filters from './filter';
import Price from './price';
import _ from "lodash";

const Wrapper = styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: row;
    background: #F7F7F7;
`;
const FilterSection = styled.div`
    width: 20%;
    height: 100%;
    @media only screen and (max-width: 1440px){
        width: 25%;
    }
`;
const Container = styled.div`
    margin-left: 40px;
    margin-right: 40px;
`;
class Search extends Component {
    render() {
        const {
            filters,
            query,
            total,
            count,
            applyFilter,
            applyPriceFilter,
            applyCategoryFilter,
            clearAll
        } = this.props;
        return (
            <Wrapper>
                <FilterSection>
                    {!_.isEmpty(filters) &&
                        filters.map((filter,index)=>(
                            <>
                                {Object.keys(filter).map((key, i)=>(
                                    <Container>
                                        {key == "categoryBuckets" &&
                                            <Category bucket={filter[key]} updateCategory={applyCategoryFilter}/>
                                        }
                                        {key != "price" && key != "categoryBuckets" && !_.isEmpty(filter[key]) &&
                                            <Filters bucket={filter[key]} updateFilter={applyFilter} title={key} query={query}/>
                                        }
                                        {key == "price" && !_.isEmpty(filter[key]) &&
                                            <Price bucket={filter[key]} updateFilter={applyPriceFilter}/>
                                        }
                                    </Container>
                                ))}
                            </>
                        ))
                    }
                </FilterSection>
                <ListingSection 
                    products={this.props.products} 
                    applyFilter = {applyFilter}
                    count = {count}
                    total = {total}
                    query = {query}    
                />
            </Wrapper>
        )
    }
}

export default Search;