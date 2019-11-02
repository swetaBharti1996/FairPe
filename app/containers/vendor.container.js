import { connect } from "react-redux";
import { withRouter } from "next/router";
import Vendor from "../components/vendor.component";
import { partner } from "../actions/asyncAction";
import {} from "../actions/syncAction";

class VendorContainer extends React.Component {
  render() {
    return <Vendor {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

const mapDispatchToProps = dispatch => {
  return {
    partner: data => dispatch(partner(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VendorContainer));
