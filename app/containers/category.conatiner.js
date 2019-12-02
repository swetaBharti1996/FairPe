import { connect } from "react-redux";
import { withRouter } from "next/router";
import Category from "../components/category.component";
import queryString from "query-string";
import Router from "next/router";
import { filterResults, categoryResults } from "../actions/asyncAction";
import {} from "../actions/syncAction";

class CategoryContainer extends React.Component {
  render() {
    return <Category {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
    products: state.products,
    category: state.home.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubCat: term => {
      const newQuery = { term, page: 1 };
      const query = queryString.stringify(newQuery);
      Router.push(`/search?${query}`);
      return dispatch(categoryResults(query, 1));
    },
    onSearch: term => {
      const newQuery = { term, page: 1 };
      const query = queryString.stringify(newQuery);
      Router.push(`/search?${query}`);
      return dispatch(filterResults(query, 1));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoryContainer));
