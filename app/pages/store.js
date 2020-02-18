import axios from "axios";
import { makeRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";
import {} from "../actions/syncAction";
import Store from "../containers/store.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;

    return { query };

    // await axios
    //   .post(`${AppConstants.default.baseURL}/api/seo/productpage`, { pid: id })
    //   .then(resp => store.dispatch(gotProductSeo(resp.data)))
    //   .catch(err => console.log(err));

    // return new Promise((resolve, reject) => {
    //   fetchProductDetail(id)
    //     .then(resp => {
    //       store.dispatch(gotProductDetail(resp.data));
    //     })
    //     .then(resolve)
    //     .catch(err => console.log(err) || resolve({}));
    // });
  }

  render() {
    const { query } = this.props;

    return <Store {...this.props} />;
  }
}

export default Index;
