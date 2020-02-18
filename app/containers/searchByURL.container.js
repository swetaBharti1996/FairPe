import { connect } from "react-redux";
import SearchByURL from "../components/searchByURL.component";
import { searchByURL, productDetail } from "../actions/asyncAction";
import { getSearchByURL, gotProductDetail } from "../actions/syncAction";

class SearchByURLContainer extends React.Component {
  render() {
    return <SearchByURL {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    url: state.searchByURL,
    product: state.productDetail,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchByURL: (URL, CB) => dispatch(searchByURL(URL, CB)),
    productDetail: (ID, CB) => dispatch(productDetail(ID, CB)),
    syncGetSearchByURL: data => dispatch(getSearchByURL(data)),
    syncGotProductDetail: data => dispatch(gotProductDetail(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByURLContainer);
