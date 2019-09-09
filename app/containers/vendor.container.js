import { connect } from "react-redux";
import { withRouter } from "next/router";
import Vendor from "../components/vendor.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class VendorContainer extends React.Component {
  render() {
    return <Vendor {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VendorContainer));