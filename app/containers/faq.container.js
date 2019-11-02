import { connect } from "react-redux";
import { withRouter } from "next/router";
import FAQ from "../components/faq.component";
import { question } from "../actions/asyncAction";

class FaqContainer extends React.Component {
  render() {
    return <FAQ {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    question: data => dispatch(question(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FaqContainer));
