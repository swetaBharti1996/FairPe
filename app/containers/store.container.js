import { connect } from "react-redux";
import Store from "../components/store.component";
import { postStoreReview, getStoreReview } from "../actions/asyncAction";
import { authModal, reviewModal } from "../actions/syncAction";

class StoreContainer extends React.Component {
  render() {
    return <Store {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth, modal: state.modal, review: state.review };
};

const mapDispatchToProps = dispatch => {
  return {
    authModal: flag => dispatch(authModal(flag)),
    reviewModal: flag => dispatch(reviewModal(flag)),
    postStoreReview: (data, CB) => dispatch(postStoreReview(data, CB)),
    getStoreReview: (data, CB) => dispatch(getStoreReview(data, CB))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);
