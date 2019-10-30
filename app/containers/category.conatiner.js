import { connect } from "react-redux";
import { withRouter } from "next/router";
import Category from "../components/category.component";
import queryString from "query-string";
import {filterResults} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class CategoryContainer extends React.Component {
  render() {
    return <Category {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoryContainer));
