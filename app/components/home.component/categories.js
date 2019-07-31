import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    font-family: 'Karla', sans-serif;
    margin-bottom: 70px;
`;
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-bottom: 70px;
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
`;
const CatImage = styled.img`
    height: 60px;
    display: block;
    margin: 0px auto;
    margin-bottom: 20px;
`;
const CatTitle = styled.p`
    text-align:center;
    font-size: 18px;
    font-weight: bolder;
`;

class Categories extends Component{
    render(){
        return(
            <Wrapper>
                <Title>Explore with these product categories</Title>
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