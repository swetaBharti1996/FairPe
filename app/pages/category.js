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

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;

    const { slug } = query;

    await axios
      .post(
        `${AppConstants.default.searchCategoryURL}/_search?page=1&term=${slug}`
      )
      .then(resp => store.dispatch(gotProducts(resp.data, { term: slug }, 1)))
      .catch(err => console.log(err));

    return new Promise((resolve, reject) => {
      fetchCategory(slug)
        .then(resp => {
          store.dispatch(gotCategoryData(resp.data));
        })
        .then(resolve)
        .catch(err => console.log(err) || resolve({}));
    });
  }

  render() {
    return <Category />;
  }
}

export default Index;
