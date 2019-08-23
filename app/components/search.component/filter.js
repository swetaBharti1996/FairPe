import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 20px;
`;
const Title = styled.h1`
    font-size: 16px;
    font-family: "Karla", sans-serif;
    margin-bottom: 20px;
`;
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
    text-transform: capitalize;
`;
const More = styled.p`
    text-align: right;
    color: #FF632A;
`;
class Filters extends Component {
    state = {
        selFilters: [],
        length: this.props.bucket.length,
        newBucket: []
    }
    componentDidMount = () => {
        if (this.props.bucket.length > 10) {
            this.setState({ length: 10 });
            let arr = this.props.bucket.slice(0, this.state.length);
            this.setState({ newBucket: arr })
        }
        else {
            this.setState({ newBucket: this.props.bucket });
        }
    }
    onSelBrand = (value) => {
        if (value) {
            let brands = this.state.selFilters;
            if (brands) {
                let newArr = [];
                if (!(_.includes(brands, value))) {
                    newArr = [...brands, value];
                }
                brands = newArr.splice(',');
            } else {
                brands = value;
            }
            this.setState({ selFilters: brands })
            this.props.updateFilter(this.props.title, brands);
        }
    }
    onRemoveBrand = ({ value }) => {
        if (value) {
            let tempVal = [...this.state.selFilters];
            let index = tempVal.indexOf(value);

            if (index > -1) {
                tempVal.splice(index, 1);
                this.setState({ selFilters: tempVal });
                this.props.updateFilter(this.props.title, tempVal);
            }
        }
    };
    showMore = () => {
        let arr, len;
        if((this.state.length + 10)< this.props.bucket.length){
            len = this.state.length + 10;
            arr = this.props.bucket.slice(0, len);
        }
        else{
            len = this.props.bucket.length - this.state.length;
            len = len + this.state.length;
            arr = this.props.bucket.slice(0, len);
        }
        this.setState({ newBucket : arr, length: len})
    }
    render() {
        const { bucket, title } = this.props;
        const { selFilters, newBucket, length } = this.state;
        return (
            <Wrapper>
                <Title>{title}</Title>
                {newBucket &&
                    newBucket.map((data, index) => {
                        if (index < this.state.length) {
                            return (
                                <>
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
                                </>
                            )
                        }
                    })}
                    {(bucket && length < bucket.length) && 
                        <More onClick={()=>this.showMore()}>Show More</More>
                    }
            </Wrapper>
        )
    }
}

export default Filters;
