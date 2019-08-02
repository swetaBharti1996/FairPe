import { connect } from "react-redux";
import { withRouter } from "next/router";
import Product from "../components/product.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class ProductContainer extends React.Component {
  render() {
    return <Product {...this.props} />;
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
)(withRouter(ProductContainer));
