import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 400px;
`;
const MiniTitle = styled.p`
    font-size: 18px;
    margin-bottom: 60px;
    color: #220A3E;
`;
const Container = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
`;
const LeftContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
`;
const RightContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 30px;
    width: 60%;
    margin-bottom: 12px;
    color: #333333;
    font-weight: bolder;
`;
const SubTitle = styled.h2`
    margin: 0px;
    color: #333333;
    font-size: 22px;
    margin-bottom: 50px;
`;
const Content = styled.p`
    font-size: 16px;
    color: #707070;
    margin-bottom: 25px;
`;
const ShopImage = styled.img`
    width: 60%;
`;
const Button = styled.button`
    border: none;
    width: 200px;
    padding: 13px 30px;
    border-radius: 24px;
    font-size: 18px;
    color: #fff;
    background-image: linear-gradient(105deg, #FF632A, #E20000); 
`;

class Description extends Component {
    render() {
        return (
            <Wrapper>
                <MiniTitle>Why Fairpe?</MiniTitle>
                <Container>
                    <LeftContainer>
                        <Title>India’s first platform for Offline products.</Title>
                        <SubTitle>Enjoy the advantages of shopping locally</SubTitle>
                        <Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Content>
                        <Button>Refer and Earn</Button>
                    </LeftContainer>
                    <RightContainer>
                        <ShopImage src="../../static/images/shopping.svg"/>
                    </RightContainer>
                </Container>
            </Wrapper>
        )
    }
}

export default Description;