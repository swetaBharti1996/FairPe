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
                    {/* <Filters> */}
                    {filters.length &&
                        filters.map((filter,index)=>(
                            <>
                                {Object.keys(filter).map((key, i)=>(
                                    <Container>
                                        {key == "categoryBuckets" &&
                                            <Category bucket={filter[key]} updateCategory={applyCategoryFilter}/>
                                        }
                                        {key != "price" && key != "categoryBuckets" &&
                                            <Filters bucket={filter[key]} updateFilter={applyFilter} title={key}/>
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