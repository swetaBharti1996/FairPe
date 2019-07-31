import Search from "../containers/search.container";

class SearchPage extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Search />;
  }
}

export default SearchPage;
