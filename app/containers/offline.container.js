import { connect } from "react-redux";
import { withRouter } from "next/router";
import Offline from "../components/offline.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class OfflineContainer extends React.Component {
  render() {
    return <Offline {...this.props} />;
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
)(withRouter(OfflineContainer));
