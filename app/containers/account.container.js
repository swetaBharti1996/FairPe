import { connect } from "react-redux";
import { withRouter } from "next/router";
import Account from "../components/account.component";
import { fetchWishlist } from "../actions/asyncAction";
import {} from "../actions/syncAction";

class AccountContainer extends React.Component {
  render() {
    return <Account {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth,
    wishlist: state.wishlist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWishlist: () => dispatch(fetchWishlist())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AccountContainer));
