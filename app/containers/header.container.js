import { connect } from "react-redux";
import Header from "../components/header.component";
import { logout, filterResults } from "../actions/asyncAction";
import {} from "../actions/syncAction";
import queryString from "query-string";
import Router from "next/router";

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    onSearch: term => {
      const newQuery = { term, page: 1 };
      const query = queryString.stringify(newQuery);
      Router.push(`/search?${query}`);
      return dispatch(filterResults(query, 1));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
