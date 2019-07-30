import Home from "../containers/home.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Home />;
  }
}

export default Index;
