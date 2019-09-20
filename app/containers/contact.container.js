import { connect } from "react-redux";
import { withRouter } from "next/router";
import Contact from "../components/contact.component";
import {} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class ContactContainer extends React.Component {
  render() {
    return <Contact {...this.props} />;
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
)(withRouter(ContactContainer));
