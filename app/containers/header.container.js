import { connect } from "react-redux";
import { withRouter } from "next/router";
import Header from "../components/header.component";
import { logout } from "../actions/asyncAction";
import {} from "../actions/syncAction";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderContainer));
