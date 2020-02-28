import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import _ from "lodash";
import { authModal } from "../../../actions/syncAction";
import { wishlist } from "../../../actions/asyncAction";

const Wrapper = styled.a`
  margin-bottom: 24px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 25%;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 45.5%;
    margin-right: 24px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  /* border: 1px solid; */
`;
const Container = styled.div`
  width: 220px;
  font-family: "Karla", sans-serif;
  @media only screen and (max-width: 1440px) {
    width: 180px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  height: 200px;
  max-height: 200px;
  line-height: 200px;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;

  > img {
    margin: auto;
    opacity: 1;
    max-width: 100%;
    max-height: 94%;
    @media screen and (max-width: ${props => props.theme.bpxs}) {
      max-width: 85%;
    }
  }
`;

const BodyContainer = styled.div`
  /* height: 42px; */
  margin-bottom: 4px;

  min-height: 70px;

  > span {
    font: menu;
    color: #555;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Title = styled.h2`
  font-size: 17px;
  text-align: left;
  width: 100%;
  margin-top: 4px;
  color: #000;

  font-weight: 600;
  &:hover {
    color: ${props => props.theme.primary};
  }
  @media only screen and (max-width: 1440px) {
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
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

const Binding = styled.p`
  line-height: 17px;
  font-size: 14px;
  margin-top: 16px;
  color: #666;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #cecece;
  border-top: 1px solid #cecece;
  margin-top: 8px;
  padding: 6px 0;
`;

const PriceContainer = styled.div`
  > p {
    line-height: 19px;
    font-size: 16px;
    color: #666;
    margin-bottom: 0;
  }
  > b {
    line-height: 28px;
    font-size: 24px;
    color: #000;
    margin-top: 6px;
  }

  @media only screen and (max-width: 1440px) {
    > p {
      font-size: 14px;
      margin-bottom: 0;
    }
    > b {
      font-size: 22px;
    }
  }
`;

const Wishlist = styled.div`
  > img {
    margin-top: 10px;
    width: 80%;
  }
`;

class ProductCard extends Component {
  state = {
    liked: false
  };
  componentDidMount() {
    if (
      !_.isEmpty(this.props.wishlistData) &&
      !(this.props.wishlistData.error == "unauthorized")
    ) {
      let flag = this.props.wishlistData.data.find(ele => {
        return ele.pid == this.props.product.pid;
      });
      this.setState({ liked: flag });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.wishlistData !== prevProps.wishlistData) {
      if (
        !_.isEmpty(this.props.wishlistData) &&
        !(this.props.wishlistData.error == "unauthorized")
      ) {
        let flag = this.props.wishlistData.data.find(ele => {
          return ele.pid == this.props.product.pid;
        });
        this.setState({ liked: flag });
      } else {
        this.setState({ liked: false });
      }
    }
  }
  handleTitle = title => {
    if (title.length > 30) {
      title = title.slice(0, 30) + "...";
    }
    return title;
  };

  handleWishlist = e => {
    e.preventDefault();
    const { auth, product, authModal, wishlist } = this.props;
    if (_.isEmpty(auth)) {
      authModal(true);
    } else {
      this.setState({ liked: !this.state.liked });
      const data = {
        pid: product.pid,
        title: product.title,
        price: _.toString(product.mprice || product.price),
        image: product.image
      };
      wishlist(data);
    }
  };
  render() {
    const { product } = this.props;

    return (
      <Wrapper
        {...this.props}
        href={`/product/${product.pid}${true ? "?hide=true" : ""}`}
        target="_blank"
      >
        <Container>
          <ImageContainer>
            <img
              src={
                _.isEmpty(product.image.trim())
                  ? "../../../static/images/no-image.jpg"
                  : product.image
              }
              alt={product.title}
            />
          </ImageContainer>
          <BodyContainer>
            <Title title={product.title}>
              {this.handleTitle(product.title)}
            </Title>
            <span>available at {product.score} store</span>

            {/* <Author>
              By <b>{product.site_name}</b>
            </Author> */}
          </BodyContainer>

          <Box>
            <PriceContainer>
              <p>Price starts at</p>
              <b>Rs {product.mprice || product.price}</b>
            </PriceContainer>
            <Wishlist onClick={this.handleWishlist}>
              {this.state.liked ? (
                <img src="../../../static/images/wishlist_fill.png" />
              ) : (
                <img src="../../../static/images/wishlist_empty.png" />
              )}
            </Wishlist>
          </Box>
          {/* <AddToCart /> */}
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    wishlistData: state.wishlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authModal: flag => dispatch(authModal(flag)),
    wishlist: data => dispatch(wishlist(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
