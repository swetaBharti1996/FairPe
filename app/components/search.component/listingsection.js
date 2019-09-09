import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../../containers/searchbar.container';
import ProductCard from '../reusable/productCard';
import _ from "lodash";

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
    width: 90%;
    height: 70px;
    @media only screen and (max-width: 1440px){
        height: 60px;
    }
    padding: 20px 0px;
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
    grid-template-columns: repeat(auto-fit, 320px);
    padding: 110px 0;
    padding-left: 50px;
    @media only screen and (max-width: 1440px){
        grid-template-columns: repeat(auto-fit, 280px);
        padding-left: 50px;
    }
    /* margin-bottom: 50px; */
`;
const LoadMore = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
const NoDataText = styled.div`
    text-align: center;
    font-weight: bolder;
    font-size: 24px;
    color: #888;
    margin-top: 100px;
`;
const NoDataImg = styled.img`
    display: block;
    margin: 50px auto;
    height: 300px;
`;
class ListingSection extends Component {
    state = {
        load: true
    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom-300 <= window.innerHeight;
    }
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    componentDidUpdate(prevProps) {
        if (this.props.products !== prevProps.products) {
          this.setState({load: true})
        }
      }

    trackScrolling = () => {
        const { products, total } = this.props;
        let length;
        if (products)
            length = Object.keys(products).length;
        const wrappedElement = document.getElementById('products');
        if (this.isBottom(wrappedElement) && length< total) {
            if(this.state.load && this.props.query.page<5)
                this.loadMore();
            // document.removeEventListener('scroll', this.trackScrolling);
        }
    };
    loadMore = () => {
        this.setState({load: false})
        let page = Number(this.props.query.page) + 1;
        this.props.applyFilter('page', page);
        this.setState({ page: page });
    }
    render() {
        const { products, count, total, query } = this.props;
        let length;
        if (products)
            length = Object.keys(products).length;
        return (
            <Wrapper id="products">
                <Container>
                    <SearchContainer>
                        <SearchBar />
                    </SearchContainer>
                </Container>
                <DataContainer>
                    {!_.isEmpty(products)?
                    <Container>
                        <ResultDetails>
                            <span>{length} Results</span> from {total} results for "{query.term}"
                        </ResultDetails>
                        <ProductListing>
                            {_.map(products, (product, id) => (
                                <ProductCard
                                    key={id}
                                    product={product}
                                />
                            ))}
                        </ProductListing>
                        {products && (length < total) &&
                            <LoadMore onClick={() => this.loadMore()}>
                                <a>Load More</a>
                                <i className="material-icons">keyboard_arrow_down</i>
                            </LoadMore>
                        }
                    </Container>
                    :
                    <Container>
                        <NoDataText>Sorry we didn't find anything. Try exploring something else!</NoDataText>
                        <NoDataImg src="../../static/images/empty.svg"/>
                    </Container>
                    }
                </DataContainer>
            </Wrapper>
        )
    }
}

export default ListingSection;