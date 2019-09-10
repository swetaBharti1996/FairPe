import FAQ from "../containers/faq.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <FAQ />;
  }
}

export default Index;