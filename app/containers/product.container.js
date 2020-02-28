import { connect } from "react-redux";
import { withRouter } from "next/router";
import Product from "../components/product.component";
import {
  wishlist,
  getCurrentLocation,
  getLivePrice
} from "../actions/asyncAction";
import { authModal } from "../actions/syncAction";

class ProductContainer extends React.Component {
  render() {
    return <Product {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.productDetail,
    wishlistData: state.wishlist,
    auth: state.auth,
    loc: state.location,
    livePrice: state.livePrice,
    seo: state.seo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    wishlist: data => dispatch(wishlist(data)),
    authModal: flag => dispatch(authModal(flag)),
    getCurrentLocation: (data, CB) => dispatch(getCurrentLocation(data, CB)),
    getLivePrice: (data, CB) => dispatch(getLivePrice(data, CB))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductContainer));
