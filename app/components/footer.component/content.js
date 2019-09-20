import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    padding-bottom: 50px;
    border-bottom: 1px solid #ff632A;
`;
const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;
const LeftContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    >h1{
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        color: #000;
        margin-bottom: 10px;
    }
    >p{
        font-family: 'Karla',sans-serif;
        font-size: 16px;
    }
`;
const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Column = styled.div`
    display: flex;
    width: 30%;
    flex-flow: column wrap;
    >h1{
        font-family: 'Karla', sans-serif;
        font-size: 22px;
        font-weight: bolder;
        margin-bottom: 10px;
        color: #000;
    }
    >a{
        font-family: 'Karla', sans-serif;
        font-size: 16px;
        font-weight: lighter;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover{
            color: #ff632a;
        }
    }
`;
class Content extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <LeftContainer>
                        <h1>Who we are</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </LeftContainer>
                    <RightContainer>
                        <Column>
                            <h1>Partner with us</h1>
                            <Link route={"vendor"}>Register shop</Link>
                            <Link route={"about"}>Offline partners</Link>
                            <Link route={"careers"}>Careers</Link>
                        </Column>
                        <Column>
                            <h1>Support</h1>
                            <Link route={"faq"}>FAQ</Link>
                            <Link>Customer Care</Link>
                        </Column>
                        <Column>
                            <h1>Contact us</h1>
                            <Link>hello@fairpe.com</Link>
                            <Link>Facebook</Link>
                            <Link>Instagram</Link>
                            <Link>Twitter</Link>
                        </Column>
                    </RightContainer>
                </Container>
            </Wrapper>
        )
    }
}

export default Content;