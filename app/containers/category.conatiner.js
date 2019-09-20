import { connect } from "react-redux";
import { withRouter } from "next/router";
import Category from "../components/category.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class CategoryContainer extends React.Component {
  render() {
    return <Category {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CategoryContainer));
