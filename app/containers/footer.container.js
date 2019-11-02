import { connect } from "react-redux";
import { withRouter } from "next/router";
import Footer from "../components/footer.component";
import { subscribe } from "../actions/asyncAction";

class FooterContainer extends React.Component {
  render() {
    return <Footer {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    subscribe: data => dispatch(subscribe(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FooterContainer));
