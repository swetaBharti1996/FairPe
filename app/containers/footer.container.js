import { connect } from "react-redux";
import { withRouter } from "next/router";
import Footer from "../components/footer.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class FooterContainer extends React.Component {
  render() {
    return <Footer {...this.props} />;
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
)(withRouter(FooterContainer));
