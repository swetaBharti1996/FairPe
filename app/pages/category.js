import Category from "../containers/category.conatiner";
import axios from "axios";
import { makeRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";
import { gotCategoryData, gotProducts } from "../actions/syncAction";
import queryString from "query-string";

const fetchCategory = id => {
  return makeRequest(
    "get",
    `${AppConstants.default.baseURL}/api/fairpe/category?category=${id}`
  );
};

const fetchProducts = (query, page = 1) => {
  return makeRequest(
    "post",
    `${AppConstants.default.searchCategoryURL}/_search?${query}`
  );
};

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;

    const { slug } = query;
    let promise = [];

    promise[0] = new Promise((resolve, reject) => {
      fetchCategory(slug)
        .then(resp => {
          store.dispatch(gotCategoryData(resp.data));
        })
        .then(resolve)
        .catch(err => console.log(err) || resolve({}));
    });
    promise[1] = new Promise((resolve, reject) => {
      const newQuery = {
        term: slug,
        page: 1
      };
      const query1 = queryString.stringify(newQuery);
      fetchProducts(query1)
        .then(resp => {
          store.dispatch(gotProducts(resp.data, query1, 1));
        })
        .then(resolve)
        .catch(err => console.log(err) || resolve({}));
    });

    await Promise.all(promise);
    return true;
  }

  render() {
    return <Category />;
  }
}

export default Index;
