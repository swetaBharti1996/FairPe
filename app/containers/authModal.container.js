import { connect } from "react-redux";
import { withRouter } from "next/router";
import AuthModal from "../components/authModal.component";
import { login, signup } from "../actions/asyncAction";
import {} from "../actions/syncAction";

class AuthModalContainer extends React.Component {
  render() {
    return <AuthModal {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data)),
    signup: data => dispatch(signup(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthModalContainer));
