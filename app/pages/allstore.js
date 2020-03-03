import AllStore from "../containers/allStore.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <AllStore />;
  }
}

export default Index;
