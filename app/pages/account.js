import Account from "../containers/account.container";
import { fetchWishlist } from "../actions/asyncAction";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
    return {
      query
    };
  }

  render() {
    const { query } = this.props;
    return <Account query={query} />;
  }
}

export default Index;
