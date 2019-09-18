import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    font-family: 'Karla', sans-serif;
    margin-bottom: 70px;
`;
const BigTitle = styled.h1`
    font-size: 88px;
    text-align: center;
    color: #F7F7F7;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    @media only screen and (max-width: 992px) {
        font-size: 50px;
    }
`;
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-top: -42px;
    margin-bottom: 70px;
    @media only screen and (max-width: 992px) {
        font-size: 24px;
        margin-top: -32px;
    }
    @media only screen and (max-width: 992px) {
        font-size: 18px;
        margin-top: -26px;
    }
`;
const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
`;
const Category = styled.div`
    width: 15%;
    justify-content: center;
    align-items: center;
    margin-bottom:80px;
    @media only screen and (max-width: 992px) {
        width: 24%;
    }
`;
const CatImage = styled.img`
    height: 60px;
    display: block;
    margin: 0px auto;
    margin-bottom: 20px;
    @media only screen and (max-width: 992px) {
        height: 40px;
    }
`;
const CatTitle = styled.p`
    text-align:center;
    font-size: 18px;
    font-weight: bolder;
    @media only screen and (max-width: 992px) {
        font-size: 16px;
    }
`;

class Categories extends Component{
    render(){
        return(
            <Wrapper>
                <BigTitle>PRODUCTS</BigTitle>
                <Title>Buy from these product categories</Title>
                <Container>
                    <Category>
                        <CatImage src="../../static/images/Electronics_ACTIVE@2x.png"/>
                        <CatTitle>Electronics</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Beauty@2x.png"/>
                        <CatTitle>Beauty</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Baby@2x.png"/>
                        <CatTitle>Baby</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Books@2x.png"/>
                        <CatTitle>Books</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Fashion@2x.png"/>
                        <CatTitle>Fashion</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Gaming@2x.png"/>
                        <CatTitle>Gaming</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Jewellery@2x.png"/>
                        <CatTitle>Jewellery</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Toys@2x.png"/>
                        <CatTitle>Toys</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Kitchen@2x.png"/>
                        <CatTitle>Kitchen</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Sports@2x.png"/>
                        <CatTitle>Sports</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Large_Appliances@2x.png"/>
                        <CatTitle>Large appliances</CatTitle>
                    </Category>
                    <Category>
                        <CatImage src="../../static/images/Electronics@2x.png"/>
                        <CatTitle>More coming</CatTitle>
                    </Category>
                </Container>
            </Wrapper>
        )
    }
}

export default Categories;