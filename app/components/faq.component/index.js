import React, { Component } from "react";
import styled from "styled-components";
import Form from "./form";
import { PageWrapper } from "../../UI";

const Wrapper = styled.div`
  margin-top: 80px;
`;
const Header = styled.div`
  height: 24vh;

  background: transparent
    linear-gradient(
      270deg,
      #c80707 0%,
      #ad170cd1 31%,
      #8f2912ba 65%,
      #803215c4 100%
    )
    0% 0% no-repeat padding-box;
  display: flex;
`;

const HeaderContent = styled.div`
  width: ${props => props.theme.smallScreen};
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 93%;
  }
`;
const SubHeader = styled.p`
  font-size: 18px;
  color: #fff;
  margin: 0;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-family: "Montserrat", sans-serif;

  margin: 0;
  font-weight: 600;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    font-size: 32px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  justify-content: space-between;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;
const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-top: 30px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 100%;
  }
`;
const FaqCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: #ffffff padding-box;
  box-shadow: 0px 0px 12px #00000014;
  border: 1px solid #d9d9d9;
  padding: 15px 20px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  cursor: pointer;
  > h4 {
    font-size: 18px;
    width: 90%;
    letter-spacing: -0.5px;
    font-weight: 600;
    margin: 0;
  }
  > p {
    width: 100%;
    color: #666666;
    margin-top: 10px;
    letter-spacing: -0.5px;
    margin: 0;
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: auto;
  }
`;
const Arrow = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  > i {
    color: #ff632a;
  }
`;
const faqData = [
  {
    question: "How FairPe works?",
    answer:
      "Search the product you want to buy. Just like you search on Amazon or Flipkart. Check out the details of the product, along with the price on the online marketplaces and the nearby stores. With the help of latest tools and technologies and our in process patent algorithms we are able to analyze the products and prices all places and give you the right insights."
  },
  {
    question:
      "Why should you use FairPe every time to make purchasing decision?",
    answer:
      "Shopping online has its own benefits while shopping offline has its own. While it’s convenient to shop online sitting at home, you can inspect and examine merchandise, and even ask questions to sales staff while shopping offline. And until now, all know it was a problem to check and compare both of the world products in a single screen. That is why we built FairPe!"
  },
  {
    question: "Can I buy any products which are listed on this website?",
    answer:
      "No, you can’t. We aren’t an ecommerce site but we can help you choose the best products that you can buy at low price."
  },
  {
    question: "Unable to view the offline store details",
    answer:
      "Currently, this feature is limited to a certain locations. We will soon expand to all over India. Until then you can compare in between online stores."
  },
  {
    question: "Can I order any product from nearby offline store using FairPe?",
    answer:
      "No, you can’t. We only provide the nearby store availability of the product that you are searching for. More feature and online delivery will be integrated in the later versions of our product."
  },
  {
    question: "I want to provide feedback to this website",
    answer:
      "That’s great. Simply visit contact us page from this link:Share your suggestions and we will surely implement them in the next update."
  },
  {
    question: "I want to collaborate with FairPe?",
    answer:
      "We are only accepting the entries from online or offline stores. So head over to contact us page to get in touch."
  }
];
class Faq extends Component {
  state = {
    selected: "FAQ 1"
  };
  handleList = key => {
    if (this.state.selected == key) this.setState({ selected: "" });
    else this.setState({ selected: key });
  };
  render() {
    const { question, error } = this.props;
    return (
      <Wrapper>
        <Header>
          <HeaderContent>
            <SubHeader>All your concerns are taken care</SubHeader>
            <Title>FAQ</Title>
          </HeaderContent>
        </Header>
        <PageWrapper style={{ marginTop: 24 }}>
          <Container>
            <FaqContainer>
              {faqData.map((item, key) => (
                <FaqCard
                  key={`faq${key}`}
                  onClick={() => this.handleList(item.question)}
                >
                  <h4>{item.question}</h4>
                  <Arrow>
                    <i className="material-icons">
                      {this.state.selected == item.question
                        ? "keyboard_arrow_up"
                        : "keyboard_arrow_down"}
                    </i>
                  </Arrow>
                  {this.state.selected == item.question && <p>{item.answer}</p>}
                </FaqCard>
              ))}
            </FaqContainer>
            <FormContainer>
              <Form question={question} error={error} />
            </FormContainer>
          </Container>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default Faq;
