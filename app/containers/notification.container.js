import { connect } from "react-redux";
import { withRouter } from "next/router";
import Notification from "../components/notification.component";
import {} from "../actions/asyncAction";
import { notification } from "../actions/syncAction";

class HomeContainer extends React.Component {
  render() {
    return <Notification {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    notif: state.notification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    notification: () => dispatch(notification())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeContainer));
