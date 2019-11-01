import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Router } from "../../../server/routes";

const Wrapper = styled.div`
  width: 248px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 24px;
  font-family: "Karla", sans-serif;
  max-height: 300px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    box-sizing: border-box;
  }
`;
const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #cecece;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  > div {
    height: 70px;
    width: 70px;
    border: 2px solid #ff632a;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  > a {
    color: #ff632a;
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
  margin-bottom: 8px;
`;
const Name = styled.p`
  font-size: 18px;
  color: #333333;
  font-weight: bolder;
  text-transform: capitalize;
  letter-spacing: -0.5px;
  margin: 0;
`;
const Edit = styled.a`
  font-size: 14px;
  font-weight: bolder;
  color: #ff632a;
  margin-bottom: 20px;
`;
const UserActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`;
const Activity = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 8px;
  cursor: pointer;
  transition-duration: 200ms;
  background: ${props => (props.active ? "#eee" : "#fff")};
  color: ${props => (props.active ? props.theme.primary : "inherit")};

  &:hover {
    color: ${props => props.theme.primary};
    > span {
      color: ${props => props.theme.primary};
    }
  }
  > span {
    transition-duration: 200ms;
    font-weight: bolder;
    font-size: 16px;
    letter-spacing: -0.5px;
  }
`;

const Email = styled.p`
  font-size: 16px;
  letter-spacing: -0.4px;
  margin: 0;
`;

class Profile extends Component {
  render() {
    const { user, active, handleTabChange, wishlistData } = this.props;
    const { name, email } = user;
    return (
      <Wrapper>
        <UserDetails>
          <ImageContainer>
            <FontAwesomeIcon icon="user" />
          </ImageContainer>
          <Details>
            <Name>{name}</Name>
            <Email>{email}</Email>
          </Details>
        </UserDetails>
        <UserActivities>
          <Activity
            active={active === "wishlist" ? true : false}
            onClick={() => {
              handleTabChange("wishlist");
              Router.pushRoute("account", { ext: "wishlist" });
            }}
          >
            <span>Wishlist</span>
            <span>
              ({wishlistData && wishlistData.data && wishlistData.data.length})
            </span>
          </Activity>
          <Activity
            active={active === "password" ? true : false}
            onClick={() => {
              handleTabChange("password");
              Router.pushRoute("account", { ext: "password" });
            }}
          >
            <span>Change Password</span>
          </Activity>
        </UserActivities>
      </Wrapper>
    );
  }
}

export default Profile;
