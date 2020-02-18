import { connect } from "react-redux";
import Header from "../components/header.component";
import {
  filterResults,
  login,
  signup,
  getCurrentLocation
} from "../actions/asyncAction";
import { refreshLocation, authModal, logout } from "../actions/syncAction";
import queryString from "query-string";
import Router from "next/router";

const mapStateToProps = state => {
  return {
    user: state.auth,
    error: state.error,
    location: state.location,
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: (data, CB) => dispatch(login(data, CB)),
    signup: (data, CB) => dispatch(signup(data, CB)),
    getCurrentLocation: (data, CB) => dispatch(getCurrentLocation(data, CB)),
    refreshLocation: data => dispatch(refreshLocation(data)),
    authModal: flag => dispatch(authModal(flag)),
    onSearch: term => {
      const newQuery = { term, page: 1 };
      const query = queryString.stringify(newQuery);
      Router.push(`/search?${query}`);
      return dispatch(filterResults(query, 1));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
