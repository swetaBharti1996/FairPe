import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import _ from "lodash";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ValueLabel from "@material-ui/core/Slider/ValueLabel";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 0 16px;
`;
const Title = styled.h1`
  font-size: 16px;
  font-family: "Karla", sans-serif;
  margin-bottom: 12px;
  font-weight: 600;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "Karla", sans-serif;
`;
const Min = styled.p`
  width: 50%;
  color: #666666;
  font-size: 16px;
`;
const Max = styled.p`
  width: 50%;
  color: #666666;
  font-size: 16px;
  text-align: right;
`;

const StyledValueLabel = withStyles({
  offset: {
    top: 40,
    left: props =>
      props.index === 0 ? "calc(-50% + -10px)" : "calc(-50% + 12px)"
  },
  circle: {
    background: "none"
  },
  label: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bolder"
  },
  value: {
    fontSize: 16,
    color: "#666"
  }
})(ValueLabel);

const CustomSlider = withStyles({
  root: {
    color: "#220A3E",
    height: 6
  },
  thumb: {
    height: 20,
    width: 20,
    background: "linear-gradient(125deg, #FF632A 0%, #E20000 100%)",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  track: {
    height: 6,
    borderRadius: 3
  },
  rail: {
    height: 6,
    borderRadius: 3
  }
})(Slider);

let min, max;

class RangeSlider extends Component {
  state = {
    low: 0,
    high: 100
  };
  componentDidMount = () => {
    const { high } = this.state;
    if (!_.isEmpty(this.props.bucket)) {
      this.setState({ low: this.props.bucket[0].key });

      if (this.props.bucket[this.props.bucket.length - 1].key > high) {
        this.setState({
          high: this.props.bucket[this.props.bucket.length - 1].key
        });
        max = this.props.bucket[this.props.bucket.length - 1].key;
      }

      min = this.props.bucket[0].key;
    }
  };
  componentDidUpdate = prevProps => {
    const { high } = this.state;
    if (this.props.bucket != prevProps.bucket) {
      this.setState({ low: this.props.bucket[0].key });

      if (this.props.bucket[this.props.bucket.length - 1].key > high) {
        this.setState({
          high: this.props.bucket[this.props.bucket.length - 1].key
        });
        max = this.props.bucket[this.props.bucket.length - 1].key;
      }

      min = this.props.bucket[0].key;
    }
  };
  onChangeHandler = (event, newValue) => {
    this.setState({ low: newValue[0], high: newValue[1] });
  };
  handleChange = (event, newValue) => {
    this.setState({ low: newValue[0], high: newValue[1] });
    this.props.updateFilter(newValue[0], newValue[1]);
  };
  render() {
    return (
      <Wrapper>
        {/* <Title>Price</Title>
        <CustomSlider
          value={[this.state.low, this.state.high]}
          min={min}
          max={max}
          onChange={this.onChangeHandler}
          onChangeCommitted={this.handleChange}
          valueLabelDisplay="auto"
          ValueLabelComponent={StyledValueLabel}
          aria-labelledby="range-slider"
        />
        <Container>
          <Min>{min}</Min>
          <Max>{max}</Max>
        </Container> */}
      </Wrapper>
    );
  }
}

export default RangeSlider;
