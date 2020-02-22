import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../server/routes";

const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  min-height: 352px;
  /* border: 1px solid; */

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;

const LeftContainer = styled.div`
  flex: 0.75;
  cursor: pointer;
  /* border-right: 1px solid; */
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    height: 352px;
    margin-bottom: 16px;
  }

  > div {
    background-color: #eee;
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
`;

const RightContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;

  > div {
    display: flex;
    flex-flow: column;
    width: 90%;
    height: 100%;
    padding-top: 8px;
    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      width: 100%;
    }
    > h2 {
      font: menu;
      font-size: 32px;
      color: #444;
      font-weight: 600;
      letter-spacing: -0.3px;
    }
    > p {
      font: menu;
      width: 89%;
      margin-bottom: 16px;
      line-height: 1.4;
    }
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex: 1;
    }
  }
`;

const Button = styled.a`
  font: menu;
  display: block;
  background-color: #6276f1;
  color: #fff;
  padding: 16px 24px;
  border-radius: 4px;
  font-weight: 600;
  width: fit-content;

  &:hover {
    color: #fff;
  }
`;

const Info = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <div>
          <FontAwesomeIcon
            style={{ fontSize: "90px", opacity: 0.7 }}
            icon={"play-circle"}
          />
          <p style={{ marginBottom: 0, marginTop: 6 }}>
            <span
              style={{ font: "menu", fontSize: "18px", color: "#555555a6" }}
            >
              Video Coming Soon
            </span>
          </p>
        </div>
      </LeftContainer>
      <RightContainer>
        <div>
          <h2>Login and use search by product url.</h2>
          <p>
            Login to fairpe to enable features like search by URL and add to the
            wishlist. Copy paste any URL and get real-time price comparison
            across more than 300+ online and nearby offline stores It will help
            user to find products fast with no hassle. Video coming soon for
            easy explanation
          </p>

          <div>
            <Link route={"faq"}>
              <Button>See how it works ?</Button>
            </Link>
          </div>
        </div>
      </RightContainer>
    </Wrapper>
  );
};

export default Info;
