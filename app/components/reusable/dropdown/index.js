import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  width: 214px;
  border: 1px solid #c6c6c6;
  border-radius: ${props => (props.toggle ? "10px 10px 0px 0px" : "10px")};
  align-items: center;
  position: relative;
  margin-right: 8px;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 172px;
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
  flex: 1;
`;
const Line = styled.div`
  width: 100%;
  height: 10px;
  margin-bottom: 5px;
  background: #ccc;
`;
const Select = styled.p`
  font-size: 18px;
  width: 80%;
  height: 100%;
  color: #220a3e;
  display: flex;
  align-items: center;
  padding-left: 16px;
  letter-spacing: -0.7px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 15px;
  }
`;
const DownButton = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  > i {
  }
`;
const SearchDropdown = styled.ul`
  background: ${props => props.theme.primary};
  color: #777;
  border-radius: 0px 0px 10px 10px;
  z-index: 100;
  position: absolute;
  top: 42px;
  width: 214px;
  padding: 16px 0;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 172px;
    margin: 0;
  }
`;
const SuggestionList = styled.div`
  font-size: 16px;
  font-weight: bolder;
  text-transform: capitalize;
  color: #fff;
  z-index: 100;
  cursor: pointer;

  padding: 4px 0;
  margin-bottom: 4px;
  padding-left: 8px;

  &:last-child {
    padding-bottom: 0;
  }
  &:hover {
    background: #fff;
    color: #220a3e;
  }

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 14px;
  }
`;
class DropDown extends Component {
  state = {
    value: "",
    showList: false
  };

  clickHandler = (value, index) => {
    if (value) {
      this.setState({ value });
      this.setState({ showList: false });
      this.props.onSort(index);
    }
  };

  toggleHandler = () => {
    this.setState({ showList: !this.state.showList });
  };
  render() {
    const { value, showList } = this.state;
    const { list } = this.props;
    return (
      <Wrapper toggle={showList}>
        <Container onClick={() => this.toggleHandler()}>
          <Select>{value ? value : "Choose sort"}</Select>
          <DownButton>
            <i className="material-icons">keyboard_arrow_down</i>
          </DownButton>
        </Container>
        {showList && (
          <>
            <SearchDropdown>
              {list.map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    <SuggestionList
                      onClick={() => this.clickHandler(data, index + 1)}
                    >
                      {data}
                    </SuggestionList>
                  </React.Fragment>
                );
              })}
            </SearchDropdown>
          </>
        )}
      </Wrapper>
    );
  }
}

export default DropDown;
