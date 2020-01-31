import _ from "lodash";
import queryString from "query-string";
import AppConstant from "../constants/appConstant";
import { makeRequest } from "../constants/request";
import { gotProducts } from "../actions/syncAction";
import Search from "../containers/search.container";

const fetchSearchData = async query => {
  const resp = await makeRequest(
    "post",
    `${AppConstant.default.searchURL}/_search?${query}`
  );
  return resp;
};
class SearchPage extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;

    const isServer = !!req;

    // console.log(isServer);

    // if (isServer) {
    const searchQuery = queryString.stringify(query);
    return new Promise((resolve, reject) => {
      fetchSearchData(searchQuery)
        .then(resp => store.dispatch(gotProducts(resp.data, searchQuery)))
        .then(resolve)
        .catch(err => console.log(err) || resolve({}));
    });
    // } else return;
  }

  render() {
    return <Search />;
  }
}

export default SearchPage;
