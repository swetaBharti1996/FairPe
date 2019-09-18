import React, { Component } from "react";
import styled from "styled-components";
import _ from 'lodash';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    width: 300px;
    border: 1px solid #220A3E;
    border-radius : ${props => props.toggle? "10px 10px 0px 0px" : "10px"};
    align-items: center;
    /* justify-content: center; */
    @media only screen and (max-width: 1440px){
        width: 250px;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    width: 100%;
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
    padding: 10px 20px;
    color: #220A3E;
    font-weight: bolder;
    @media only screen and (max-width: 1440px){
        padding: 12px 10px;
        font-size: 16px;
    }
`;
const DownButton = styled.div` 
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    >i{

    }
`;
const SearchDropdown = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
    background: #220A3E;
    color: #777;
    border: 1px solid #220A3E;
    cursor: default;
    border-radius: 0px 0px 10px 10px;
    z-index: 100;
`;
const SuggestionList = styled.div`
    width: 100%;
    padding: 10px 5%;
    font-size: 16px;
    font-weight: bolder;
    text-transform: capitalize;
    color: #fff;
    z-index: 100;
    cursor: pointer;
    &:hover{
        background: #fff;
        color: #220A3E;
    }
`;
class DropDown extends Component {
    state = {
        value: "",
        showList: false,
    };

    clickHandler = (value, index) => {
        if (value) {
            this.setState({ value });
            this.setState({ showList: false})
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
                    <Select>{value? value: "Choose sort"}</Select>
                    <DownButton>
                        <i className="material-icons">keyboard_arrow_down</i>
                    </DownButton>
                </Container>
                {showList && (
                    <>
                        <Line />
                        <SearchDropdown>
                            {
                                list.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <SuggestionList
                                                onClick={()=>this.clickHandler(data, index+1)}
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
        )
    }
}

export default DropDown;