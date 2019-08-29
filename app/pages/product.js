import axios from "axios";
import { makeRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";
import { gotProductDetail, gotProductSeo } from "../actions/syncAction";
import Product from "../containers/product.container";

const fetchProductDetail = id => {
  return makeRequest("get", `${AppConstants.default.baseURL}/api/product/${id}`);
};
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
    const { id } = query;

    await axios
      .post(`${AppConstants.default.baseURL}/api/seo/productpage`, { pid: id })
      .then(resp => store.dispatch(gotProductSeo(resp.data)))
      .catch(err => console.log(err));

    return new Promise((resolve, reject) => {
      fetchProductDetail(id)
        .then(resp => {
          store.dispatch(gotProductDetail(resp.data));
        })
        .then(resolve)
        .catch(err => console.log(err) || resolve({}));
    });
  }

  render() {
    return <Product />;
  }
}

export default Index;
