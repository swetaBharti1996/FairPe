import Reac from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* width: 100%; */
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
`;
const Container = styled.div`
  width: 100%;
  font-family: 'Karla', sans-serif;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CECECE;
  
`;
const ImageContainer = styled.div`
  width: 107px;
  height: 160px;
  margin-right: 20px;
  > img {
    width: 100%;
    /* height: 100%; */
  }
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: left;
  width: 100%;
  color: #000;
  @media only screen and (max-width: 1440px){
    font-size: 16px;
  }
`;

const Author = styled.p`
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
    margin-top: 5px;
    width: 100%;
  }
`;

const ProductCard = () => {
    return (
        <Wrapper>
            <ImageContainer>
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/I/51DwqenW78L._SL300_.jpg"
                    alt="Solved Papers Karnataka CET Engineering Entrance"
                />
            </ImageContainer>
            <Container>
                <Title>Solved Papers Karnataka CET Engineering Entrance</Title>

                <Author>
                    By <b>Robert Vein</b>
                </Author>
                <Binding>Paperback,Hardcover</Binding>

                <Box>
                    <PriceContainer>
                        <p>Price starts at</p>
                        <b>Rs. 10372</b>
                    </PriceContainer>
                </Box>
            </Container>
            <Wishlist>
                <img src="../../../static/images/wishlist_fill.png" />
            </Wishlist>
        </Wrapper>
    );
};

export default ProductCard;