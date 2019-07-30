import { connect } from "react-redux";
import { withRouter } from "next/router";
import Header from "../components/header.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
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
)(withRouter(HeaderContainer));
