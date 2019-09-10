import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 300px;
    font-family: 'Karla', sans-serif;
`;
const HeaderContainer = styled.div`
    height: 60vh;
    width: 100%;
    background: url('../../static/images/careers.jpg');
    background-position: bottom;
    background-size: cover;
    margin-bottom: 50px;
`;
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background: transparent linear-gradient(108deg, rgba(255, 99, 42, 0.66) 0%, rgba(226, 0, 0, 0.66) 100%) 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const SubTitle = styled.p`
    color: #fff;
    font-weight: bolder;
    font-size: 22px;
    margin-bottom: 20px;
`;
const Title = styled.h1`
    color: #fff;
    font-size: 48px;
    font-family: 'Montserrat',sans-serif;
`;
const Container = styled.div`
    width: 70%;
    margin: auto;
    >h2{
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: #000;
        text-align: center;
        margin-bottom: 40px;
    }
    @media only screen and (max-width: 1440px){
        width: 80%;
    }
`;
const CardContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
`;
const Card = styled.div`
    background: #fff;
    box-shadow: 0px 0px 12px #00000014;
    border-radius: 10px;
    padding: 30px 30px;
    width: 27%;
    >h2{
        font-size: 24px;
        color: #000;
        margin-bottom: 10px;
    }
    >h3{
        font-size: 16px;
        margin-bottom: 10px;
        color: #FF632A;
    }
    >p{
        font-size: 16px;
        color: #666;
        margin-bottom: 40px;
    }
    >button{
        cursor: pointer;
        font-family: 'Karla',sans-serif;
        padding: 15px 0px;
        width: 45%;
        text-align: center;
        font-size: 16px;
        font-weight: bolder;
        border: 1px solid #ff632A;
        border-radius: 24px;
        background: #fff;
        :hover{
            background:linear-gradient(111deg, #FF632A 0%, #E20000 100%);
            border: none;
            color: #fff;
        }
    }
`;
const Data = [
    {
        title: "Full Stack Developer",
        location: "Bengaluru",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Sr. Data Scientist",
        location: "Bengaluru",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "Big Data Engineer",
        location: "Bengaluru",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]
class Careers extends Component {
    render() {
        return (
            <Wrapper>
                <HeaderContainer>
                    <Overlay>
                        <SubTitle>Careers</SubTitle>
                        <Title>Join the wonderful team at FairPe</Title>
                    </Overlay>
                </HeaderContainer>
                <Container>
                    <h2>Current Openings</h2>
                    <CardContainer>
                        {Data.map((item, key) => (
                            <Card key={`career${key}`}>
                                <h2>{item.title}</h2>
                                <h3>{item.location}</h3>
                                <p>{item.description}</p>
                                <button>Apply</button>
                            </Card>
                        ))}
                    </CardContainer>
                </Container>
            </Wrapper>
        )
    }
}

export default Careers;