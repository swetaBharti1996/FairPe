import { connect } from "react-redux";
import { withRouter } from "next/router";
import Account from "../components/account.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class AccountContainer extends React.Component {
  render() {
    return <Account {...this.props} />;
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
)(withRouter(AccountContainer));
