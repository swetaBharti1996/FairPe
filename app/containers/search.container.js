import _ from "lodash";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import queryString from "query-string";
import Router from "next/router";
import { filterResults } from "../actions/asyncAction";
import SearchPage from "../components/search.component";

const stringFacet = ["brand", "site", "publisher", "author"];
const numberFacet = ["lower", "upper"];

const determineFacet = query => {
  let facetCount = 0;
  let stringExists = 0;
  let numberExists = 0;
  stringFacet.forEach(f => {
    if (query[f] && !_.isEmpty(query[f])) stringExists = 1;
  });
  numberFacet.forEach(f => {
    if (query[f]) numberExists = 2;
  });
  facetCount = stringExists + numberExists;
  return facetCount;
};
class SearchContainer extends React.Component {
  applyPriceFilter = (lower, upper) => {
    const currentQuery = this.props.filters.query;

    let newQuery = _.assign({}, currentQuery, { lower, upper });
    newQuery = _.omit(newQuery, ["facets"]);
    const count = determineFacet(newQuery);
    if (count) {
      newQuery.facets = count;
    }
    const query = queryString.stringify(newQuery);
    Router.push(`/search?${query}`);
    this.props.dispatch(filterResults(query, 1));
  };
  applyFilter = (type, value) => {
    const currentQuery = this.props.filters.query;
    let newQuery = null;
    if (value) {
      newQuery = _.assign({}, currentQuery, {
        [type]: value
      });
    } else {
      newQuery = _.omit(currentQuery, [type]);
    }
    newQuery = _.omit(newQuery, ["facets"]);

    const count = determineFacet(newQuery);
    if (count) {
      newQuery.facets = count;
    }

    newQuery.page = 1;
    if (type == "page") {
      newQuery.page = value;
    }
    const query = queryString.stringify(newQuery);
    Router.push(`/search?${query}`);

    let page = 1;
    if (type == "page") {
      page = value;
    }

    this.props.dispatch(filterResults(query, page));
  };

  applyCategoryFilter = (category, subcategory, level) => {
    const currentQuery = this.props.filters.query;
    let newQuery = null;
    if (category && subcategory && level) {
      newQuery = _.assign({}, currentQuery, {
        subcategory,
        category,
        level,
        page: 1
      });
    } else {
      newQuery = _.omit(currentQuery, category, subcategory, level);
    }
    newQuery = _.omit(newQuery, ["facets"]);
    const count = determineFacet(newQuery);
    if (count) {
      newQuery.facets = count;
    }
    const query = queryString.stringify(newQuery);
    Router.push(`/search?${query}`);
    this.props.dispatch(filterResults(query, 1));
  };
  clearFilter = () => {
    const currentQuery = this.props.filters.query;
    const newQuery = {
      term: currentQuery.term,
      page: 1
    };
    const query = queryString.stringify(newQuery);
    Router.push(`/search?${query}`);
    this.props.dispatch(filterResults(query));
  };
  clearAll = () => {
    const currentQuery = this.props.filters.query;
    const newQuery = {
      term: currentQuery.term,
      page: 1,
      category: currentQuery.category,
      level: currentQuery.level,
      subcategory: currentQuery.subcategory
    };
    const query = queryString.stringify(newQuery);
    Router.push(`/search?${query}`);
    this.props.dispatch(filterResults(query));
  };
  render() {
    const {
      products,
      filters,
      count,
      total,
      router: { query }
    } = this.props;
    return (
      <SearchPage
        clearFilter={this.clearFilter}
        clearAll={this.clearAll}
        applyPriceFilter={this.applyPriceFilter}
        applyFilter={this.applyFilter}
        applyCategoryFilter={this.applyCategoryFilter}
        filters={filters.filters}
        count={count}
        total={total}
        query={filters.query}
        products={products}
      />
    );
  }
}

export default connect(s => ({
  filters: s.filters,
  products: s.products.products,
  count: s.products.count,
  total: s.products.total
}))(withRouter(SearchContainer));
