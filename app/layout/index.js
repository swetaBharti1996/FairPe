import theme from "../constants/theme";
import Header from "../containers/header.container";
import Footer from "../containers/footer.container";
import AuthModal from "../containers/authModal.container";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
// import {} from "../UI";
import {} from "../actions/asyncAction";

const MainWrapper = styled.div``;
const MainContainer = styled.div``;

class Layout extends React.Component {
  state = {
    showModal: false
  }
  openModal = () => {
    this.setState({showModal: true});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }
  render() {
    const { router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <MainContainer>
            <Header newRouter={router} openModal={this.openModal}/>
            {this.props.children}
            {this.state.showModal && 
              <AuthModal closeModal={this.closeModal}/>
            }
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
