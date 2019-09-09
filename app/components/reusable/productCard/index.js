import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import { authModal } from '../../../actions/syncAction';
import { wishlist } from "../../../actions/asyncAction";

const Wrapper = styled.a`
  margin-bottom: 100px;
  text-decoration: none;
`;
const Container = styled.div`
  width: 205px;
  font-family: 'Karla', sans-serif;
`;
const ImageContainer = styled.div`
  height: 180px;
  padding-bottom: 20px;
`;

const BodyContainer = styled.div`
  height: 110px;
`;
const Title = styled.h2`
  font-size: 18px;
  text-align: left;
  width: 100%;
  margin-top: 17px;
  color: #000;
  &:hover{
    color: #FF6300;
  }
  @media only screen and (max-width: 1440px){
    font-size: 16px;
  }
`;

const Author = styled.p`
  margin-top: 12px;
  line-height: 19px;
  font-size: 16px;

  color: #666;
  > b {
    color: #333;
  }
  @media only screen and (max-width: 1440px){
    font-size: 14px;
  }
`;

const Binding = styled.p`
  line-height: 17px;
  font-size: 14px;
  margin-top: 16px;
  color: #666;
  @media only screen and (max-width: 1440px){
    font-size: 12px;
  }
`;

const Box = styled.div`
  padding: 21px 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom: 1px solid #cecece;
  border-top: 1px solid #cecece;
  margin-top: 11px;
  @media only screen and (max-width: 1440px){
    padding: 14px 0;
  }
`;

const PriceContainer = styled.div`
  > p {
    line-height: 19px;
    font-size: 16px;
    color: #666;
  }
  >b {
    line-height: 28px;
    font-size: 24px;
    color: #000;
    margin-top: 6px;
  }
  @media only screen and (max-width: 1440px){
    >p{
      font-size: 14px;
    }
    >b{
      font-size: 22px;
    }
  }
`;

const Wishlist = styled.div`
  >img{
    margin-top: 10px;
    width: 80%;
  }
`;

class ProductCard extends Component {
  state = {
    liked: false
  }
  componentDidMount() {
    if (!_.isEmpty(this.props.wishlistData) && !(this.props.wishlistData.error == "unauthorized")) {
      let flag = this.props.wishlistData.data.find((ele) => { return ele.pid == this.props.product.pid });
      this.setState({ liked: flag })
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.wishlistData !== prevProps.wishlistData) {
      if (!_.isEmpty(this.props.wishlistData) && !(this.props.wishlistData.error == "unauthorized")) {
        let flag = this.props.wishlistData.data.find((ele) => { return ele.pid == this.props.product.pid });
        this.setState({ liked: flag })
      }
      else {
        this.setState({ liked: false })
      }
    }
  }
  handleWishlist = (e) => {
    e.preventDefault();
    const { auth, product, authModal, wishlist } = this.props;
    if (_.isEmpty(auth)) {
      authModal(true)
    }
    else {
      this.setState({ liked: !this.state.liked });
      const data = {
        pid: product.pid,
        title: product.title,
        price: _.toString(product.mprice || product.price),
        image: product.image,
        publisher: JSON.parse(product.specifications).publisher,
        author: JSON.parse(product.specifications).author
      };
      wishlist(data);
    }
  };
  render() {
    const { product } = this.props;
    let specs = JSON.parse(product.specifications);
    return (
      <Wrapper href={'/product/' + product.pid} target="_blank">
        <Container>
          <ImageContainer>
            <img
              src={product.image}
              alt={product.title}
            />
          </ImageContainer>
          <BodyContainer>
            <Title>{product.title}</Title>

            <Author>
              By <b>{product.site_name}</b>
            </Author>
          </BodyContainer>

          <Box>
            <PriceContainer>
              <p>Price starts at</p>
              <b>Rs. {product.mprice}</b>
            </PriceContainer>
            <Wishlist onClick={this.handleWishlist}>
              {this.state.liked ?
                <img src="../../../static/images/wishlist_fill.png" />
                :
                <img src="../../../static/images/wishlist_empty.png" />
              }
            </Wishlist>
          </Box>
          {/* <AddToCart /> */}
        </Container>
      </Wrapper>
    );
  }
};


const mapStateToProps = state => {
  return {
    auth: state.auth,
    wishlistData: state.wishlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authModal: (flag) => dispatch(authModal(flag)),
    wishlist: (data) => dispatch(wishlist(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
