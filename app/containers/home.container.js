import { connect } from "react-redux";
import { withRouter } from "next/router";
import Home from "../components/home.component";
import {
  filterResults,
  categoryData,
  categoryResults
} from "../actions/asyncAction";
import {} from "../actions/syncAction";

class HomeContainer extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterResults: query => dispatch(filterResults(query)),
    categoryData: query => dispatch(categoryData(query)),
    categoryResults: query => dispatch(categoryResults(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
