import { connect } from "react-redux";
import { withRouter } from "next/router";
import ALlStore from "../components/allstore.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class AllStoreContainer extends React.Component {
  render() {
    return <ALlStore {...this.props} />;
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
)(withRouter(AllStoreContainer));
