import { connect } from "react-redux";
import { withRouter } from "next/router";
import FAQ from "../components/faq.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class FaqContainer extends React.Component {
  render() {
    return <FAQ {...this.props} />;
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
)(withRouter(FaqContainer));