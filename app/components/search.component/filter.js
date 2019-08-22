import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const Checkbox = styled.div`
    display: flex;
    height: 20px;
    width: 20px;
    align-items: center;
    justify-content: center;
    border: 2px solid #666;
    margin-right: 5px;
    margin-bottom: 10px;
    >i{
        color: #FF632A;
    }
`;
const List = styled.p`
    display: flex;
    color: #666666;
`;
class Filters extends Component {
    render() {
        return (
            <Wrapper>
                {bucket &&
                    bucket.map((data, index) => {
                        return (
                            <ListContainer>
                                <Checkbox onClick={() => selFilters.includes(data.key) ? this.onRemoveBrand({ value: data.key }) : this.onSelBrand(data.key)}>
                                    {selFilters.includes(data.key) && (
                                        <i class="material-icons">
                                            check
                                        </i>
                                    )}
                                </Checkbox>
                                <List>{data.key}</List>
                            </ListContainer>
                        );
                    })}
            </Wrapper>
        )
    }
}

export default Filters;
