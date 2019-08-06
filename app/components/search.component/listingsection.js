import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../reusable/search';
import ProductCard from '../reusable/productCard';

const Wrapper = styled.div`
    width: 75%;
    background: #F7F7F7;
    margin-bottom: 400px;
`;
const Container = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;
const SearchContainer = styled.div`
    width: 80%;
    height: 70px;
    @media only screen and (max-width: 1440px){
        height: 60px;
    }
    padding: 16px 0px;
`;
const DataContainer = styled.div`
    background: #fff;
    height: 100%;
`;
const ResultDetails = styled.div`
    font-family: 'Karla', sans-serif;
    font-size: 16px;
    color: #666666;
    width: 100%;
    padding: 40px 0px;
    border-bottom: 1px solid #ddd;
    >span{
        font-size: 18px;
        font-weight: bolder;
        color: #220A3E;
    }
`;
const ProductListing = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: space-between;
    padding: 110px 0;
    /* margin-bottom: 50px; */
`;
const LoadMore = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    >a{
        color: #FF632A;
        font-weight: bolder;
        font-size: 22px;
    }
    >i{
        color: #E20000;
        font-size: 32px;
    }
`;
class ListingSection extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <SearchContainer>
                        <SearchBar />
                    </SearchContainer>
                </Container>
                <DataContainer>
                    <Container>
                        <ResultDetails>
                            <span>32 Results</span> from 7344 results for "Physics"
                        </ResultDetails>
                        <ProductListing>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </ProductListing>
                        <LoadMore>
                            <a>Load More</a>
                            <i class="material-icons">keyboard_arrow_down</i>
                        </LoadMore>
                    </Container>
                </DataContainer>
            </Wrapper>
        )
    }
}

export default ListingSection;