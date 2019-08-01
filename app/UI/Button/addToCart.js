import styled from "styled-components";

const Container = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > i {
    > img {
    }
  }
  > p {
    line-height: 19px;
    font-size: 16px;
    color: #ff632a;
    margin-left: 13px;
  }
`;

const Wrapper = styled.div`
  margin-top: 12px;
`;

const AddToCart = () => {
  return (
    <Wrapper>
      <Container>
        <i>
          <img src="../../static/images/Cart.png" />
        </i>

        <p>Add to cart</p>
      </Container>
    </Wrapper>
  );
};

export default AddToCart;
