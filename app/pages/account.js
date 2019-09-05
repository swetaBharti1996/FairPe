import Account from "../containers/account.container";
import { fetchWishlist } from '../actions/asyncAction';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Account />;
  }
}

export default Index;