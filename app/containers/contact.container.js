import { connect } from "react-redux";
import { withRouter } from "next/router";
import Contact from "../components/contact.component";
import { contact } from "../actions/asyncAction";

class ContactContainer extends React.Component {
  render() {
    return <Contact {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    contact: data => dispatch(contact(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactContainer));
