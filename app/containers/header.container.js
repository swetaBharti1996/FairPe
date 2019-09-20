import { connect } from "react-redux";
import Header from "../components/header.component";
import { logout } from "../actions/asyncAction";
import {} from "../actions/syncAction";

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
)(Header);
