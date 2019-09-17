import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    background: transparent linear-gradient(141deg, rgba(255, 99, 42, 0.95) 0%, rgba(226, 0, 0, 0.95) 100%) 0% 0% no-repeat padding-box;
    width: 100%;
    min-height: 80vh;
    border-radius: 10px;
    box-shadow: 0px 0px 12px #00000014;
    font-family: 'Karla', sans-serif;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 5%;
    margin-bottom: 10%;
`;
const Header = styled.h1`
    color: #fff;
    font-size: 46px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 50px;
    @media only screen and (max-width: 1440px){
        font-size: 36px;
    }
`;
const SubHeader = styled.h4`
    color: #fff;
    font-size: 22px;
    font-family: 'Karla', sans-serif;
    margin-bottom: 20px;
`;
const Content = styled.p`
    color: #fff;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    margin-bottom: 20px;
    @media only screen and (max-width: 1440px){
        font-size: 16px;
    }
`;
const Input = styled.input`
    background: rgba(255,255,255,0.2);
    border-radius: 5px !important;
    font-size: 18px;
    width: 65%;
    border: none !important;
    padding: 20px 30px;
    color: #fff !important;
    margin-bottom: 20px !important;
    ::placeholder{
        color: #fff !important;
    }
    @media only screen and (max-width: 1440px){
        width: 80%;
        font-size: 16px;
    }
`;
const Button = styled.button`
    font-weight: bolder;
    font-size: 18px;
    color: #ff632A;
    background: #fff;
    border: none;
    border-radius: 24px;
    width: 35%;
    padding: 15px 0;
    font-family: 'Karla', sans-serif;
    text-align: center;
    @media only screen and (max-width: 1440px){
        font-size: 16px;
    }
`;

class Form extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Header>Register your shop with FairPe</Header>
                    <SubHeader>But why?</SubHeader>
                    <Content>
                        These days every offline store requires online promotion to bring in more customers. So by registering your shop with FairPe we can drive some impressions to your store. It will help you get real-time consumers. Also, you can beat your competition to become the best store in your area.
                    </Content>
                    <Input type="text" placeholder="Your full name*" />
                    <Input type="text" placeholder="Email / Mobile Number" />
                    <Input type="text" placeholder="Location URL / Address of the shop*" />
                    <Button>Register shop</Button>
                </Container>
            </Wrapper>
        )
    }
}

export default Form;