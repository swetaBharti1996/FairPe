import { connect } from "react-redux";
import { withRouter } from "next/router";
import Search from "../components/reusable/search";
import queryString from "query-string";
import Router from "next/router";
import {
  filterResults,
  searchSuggestion,
  fetchWishlist
} from "../actions/asyncAction";
import { loading } from "../actions/syncAction";

class SearchContainer extends React.Component {
  render() {
    return <Search {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { search: state.search };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: term => {
      const newQuery = { term, page: 1 };
      const query = queryString.stringify(newQuery);
      Router.push(`/search?${query}`);
      return dispatch(filterResults(query, 1));
    },
    fetchWishlist: () => dispatch(fetchWishlist()),
    searchSuggestion: (term, CB) => dispatch(searchSuggestion(term, CB)),
    loading: () => dispatch(loading()),
    customSearch: query => {
      Router.push(`/search?${query}`);
      return dispatch(filterResults(query, 1));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchContainer));
