import theme from "../constants/theme";
import Header from "../containers/header.container";
import Footer from "../containers/footer.container";
import AuthModal from "../containers/authModal.container";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { MainWrapper } from "../UI";
import { authModal } from "../actions/syncAction";
import { initGA, logPageView } from "../utils/googelAnalytics";

class Layout extends React.Component {
  state = {
    showModal: false
  };

  // componentDidMount() {
  //   if (!window.GA_INITIALIZED) {
  //     initGA();
  //     window.GA_INITIALIZED = true;
  //   }
  //   logPageView();
  // }
  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { router } = this.props;
    return (
      <MainWrapper>
        <Header newRouter={router} openModal={this.props.authModal} />
        {this.props.children}
        {this.props.modal.auth && !this.props.user && (
          <AuthModal closeModal={this.props.authModal} />
        )}
        <Footer />
      </MainWrapper>
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
    authModal: flag => dispatch(authModal(flag))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
