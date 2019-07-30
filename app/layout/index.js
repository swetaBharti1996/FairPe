import theme from "../constants/theme";
import Header from "../containers/header.container";
import Footer from "../containers/footer.container";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
// import {} from "../UI";
import {} from "../actions/asyncAction";

const MainWrapper = styled.div``;
const MainContainer = styled.div``;

class Layout extends React.Component {
  render() {
    const { router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <MainContainer>
            <Header newRouter={router} />
            {this.props.children}

            <Footer />
          </MainContainer>
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
