import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    padding: 50px;
    font-family: 'Karla', sans-serif;
    max-height: 30vh;
    @media only screen and (max-width: 1440px){
        width: 20%;
        max-height: 35vh;
    }
`;
const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #CECECE;
    margin-bottom: 20px;
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    >div{
        height: 70px;
        width: 70px;
        border: 2px solid #FF632A;
        border-radius: 50%;
        margin-bottom: 5px;
    }
    >a{
        color: #FF632A;
        font-weight: bolder;
        font-size: 14px;
        text-align: center;
    }
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >p{
        font-size: 14px;
        color: #666666;
        margin-bottom: 5px;
    }
`;
const Name = styled.div`
    font-size: 16px;
    color: #333333;
    font-weight: bolder;
    margin-bottom: 5px;
`;
const Edit = styled.a`
    font-size: 14px;
    font-weight: bolder;
    color: #FF632A;
    margin-bottom: 20px;
`;
const UserActivities = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Activity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    >a{
        color: #444444;
        font-weight: bolder;
        font-size: 14px;
        :hover{
            color: #FF632A;
        }
    }
    >p{
        font-size: 16px;
        color: #666666;
    }
`;
class Profile extends Component{
    render(){
        const { user } = this.props;
        const { name, email } = user;
        return(
            <Wrapper>
                <UserDetails>
                    <ImageContainer>
                        <div></div>
                        <a>Change</a>
                    </ImageContainer>
                    <Details>
                        <p>{email}</p>
                        <Name>{name}</Name>
                        <Edit>Edit</Edit>
                    </Details>
                </UserDetails>
                <UserActivities>
                    <Activity>
                        <a>Product reviews</a>
                        <p>(0)</p>
                    </Activity>
                    <Activity>
                        <a>Store reviews</a>
                        <p>(0)</p>
                    </Activity>
                </UserActivities>
            </Wrapper>
        )
    }
}

export default Profile;