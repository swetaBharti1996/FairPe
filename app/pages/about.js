import About from "../containers/about.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <About />;
  }
}

export default Index;
