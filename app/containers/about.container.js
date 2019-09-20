import { connect } from "react-redux";
import { withRouter } from "next/router";
import About from "../components/about.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class AboutContainer extends React.Component {
  render() {
    return <About {...this.props} />;
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
)(withRouter(AboutContainer));
