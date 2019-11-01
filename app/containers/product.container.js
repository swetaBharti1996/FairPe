import { connect } from "react-redux";
import { withRouter } from "next/router";
import Product from "../components/product.component";
import {wishlist} from "../actions/asyncAction";
import {authModal} from "../actions/syncAction";

class ProductContainer extends React.Component {
  render() {
    return <Product {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.productDetail,
    user: state.auth,
    wishlistData: state.wishlist

  };
};

const mapDispatchToProps = dispatch => {
  return {
 authModal:(flag) => dispatch(authModal(flag)),
 wishlist: (data) => dispatch(wishlist(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductContainer));
