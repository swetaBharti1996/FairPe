import Offline from "../containers/offline.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Offline />;
  }
}

export default Index;
