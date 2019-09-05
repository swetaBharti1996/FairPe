import theme from "../constants/theme";
import Header from "../containers/header.container";
import Footer from "../containers/footer.container";
import AuthModal from "../containers/authModal.container";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { authModal } from "../actions/syncAction";

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
            <Header newRouter={router} openModal={this.props.authModal}/>
            {this.props.children}
            {this.props.modal.auth && !this.props.user && 
              <AuthModal closeModal={this.props.authModal}/>
            }
            <Footer />
          </MainContainer>
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.name,
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authModal : (flag) => dispatch(authModal(flag)) 
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
