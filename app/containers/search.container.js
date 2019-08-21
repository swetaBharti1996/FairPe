import { connect } from "react-redux";
import { withRouter } from "next/router";
import Search from "../components/search.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class SearchContainer extends React.Component {
  render() {
    return <Search {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchContainer));
