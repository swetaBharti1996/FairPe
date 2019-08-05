import React, { Component } from "react";
import styled from "styled-components";
import _ from 'lodash';

const MainContainer = styled.div`
  flex-flow: column;
  margin-bottom: 20;
`;
const CategoryContainer = styled.div`
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
`;
const Arrow = styled.button`
  padding: 5px;
  border-radius: 50;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props=> props.background? 'rgba(255,255,255,0.6)': '#ccc'};
  opacity: 0.8;
`;
const ArrowEmpty = styled.div`
  flex: 1;
  padding: 5px;
  background: ${props=> props.background?'rgba(255,255,255,0.6)': '#eee'};
  opacity: 0.8;
  /* background: #eee; */
  align-items: center;
  border-radius: 50;
  justify-content: center;
`;
const EachCategory = styled.div`
  margin: 5px;
`;
const CategoryKey = styled.div`
  flex-direction: row;
  width: 100%;
  margin-bottom:2px;
`;
const SubCategory = styled.div`
  padding-left: 20;
`;
const CategoryHolder = styled.TouchableOpacity`
  flex: 8;
  padding: 5px;
`;
const CategoryText = styled.p`
  color: ${props=>props.background?'rgba(255,255,255,0.6)':"#fff"};
  font-weight: bold;
`;
const CategoryText1 = styled.p`
  font-weight: bold;
  margin-bottom: 5;
  
`;

class Category extends Component {
  state = {
    selected: '',
    count: 0
  };
  handleSelect = (cat, i, key) => {
    this.setState({selected: key});
    this.props.updateCategory(cat, i , key);
  } 
  handleList = (key) =>{
    if(this.state[key])
      this.setState({[key]: false})
    else
      this.setState({[key]: true})
  }
  subCatContainer = (cat, bucket, subCat, i) => {
    if (i <= 5) {
      count = 0;
      return (
        <>
          {bucket.map(item => {
            count = 0;
            _.map(item[subCat]['buckets'], term=>{
              if(term.key!='nil')
                count++;
            })
            return(
            <>
              {item.key != 'nil' &&
                <SubCategory>
                  <CategoryKey>
                    {count > 0 ?  
                      <Arrow onclick={() => this.handleList(item.key)} background={this.state.selected==item.key}>
                        <Icon name={this.state[item.key]?'keyboard-arrow-down':'keyboard-arrow-right'}/>
                      </Arrow>:
                      <ArrowEmpty background={this.state.selected==item.key}/>
                    }
                    <CategoryHolder onclick={() => this.handleSelect(cat, i - 1, item.key)} background={this.state.selected==item.key}>
                      <CategoryText background={this.state.selected==item.key}>{item.key}</CategoryText>
                    </CategoryHolder>
                  </CategoryKey>
                  {
                    this.state[item.key] &&
                    this.subCatContainer(cat, item[subCat]['buckets'], 'SubCategory' + (i + 1), i + 1)
                  }
                </SubCategory>
              }
            </>
          )
        })
          }
        </>
      )
    }
    return;
  }
  render() {
    return (
      <MainContainer>
        <CategoryContainer>
          {
            this.props.bucket.map(item => (
              <EachCategory>
                <CategoryKey>
                  <Arrow onclick={() => this.handleList(item.key)}>
                    <Icon name={this.state[item.key]?'keyboard-arrow-down':'keyboard-arrow-right'}/>
                  </Arrow>
                  <CategoryHolder background={false}>
                    <CategoryText background={false}>{item.key}</CategoryText>
                  </CategoryHolder>
                </CategoryKey>
                {this.state[item.key] && this.subCatContainer(item.key, item['SubCategory1']['buckets'], 'SubCategory2', 2)}
              </EachCategory>
            ))
          }
        </CategoryContainer>
      </MainContainer>
    );
  }
};

export default Category;
