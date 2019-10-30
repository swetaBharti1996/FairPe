import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 30px;
  display: flex;
  align-content: center;
  width: 280px;
  height: 80px;
  background: #fff;
  box-shadow: 0px 2px 4px #ccc;
  border-radius: 5px;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;
const Title = styled.h1`
  font-size: 14px;
  font-weight: lighter;
  color: #404041;
  font-family: "Karla", sans-serif;
`;

class Notification extends Component {
  componentWillReceiveProps = nextProps => {
    if (nextProps.notif != this.props.notif) {
      if (nextProps.notif.message != "") {
        setTimeout(() => {
          this.props.notification();
        }, 3000);
      }
    }
  };
  render() {
    if (!_.isEmpty(this.props.notif) && this.props.notif.message.length) {
      return (
        <Wrapper>
          <Container>
            <Logo src="../../static/images/notification.png" />
            <Title>{this.props.notif.message}</Title>
          </Container>
        </Wrapper>
      );
    } else {
      return <></>;
    }
  }
}
export default Notification;
