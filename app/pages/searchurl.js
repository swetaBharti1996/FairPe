import axios from "axios";
import { makeRequest } from "../constants/request";
import AppConstants from "../constants/appConstant";
import {} from "../actions/syncAction";
import SearchByURL from "../containers/searchByURL.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
    const { id } = query;
  }

  render() {
    return <SearchByURL />;
  }
}

export default Index;
