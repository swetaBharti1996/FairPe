import Product from "../containers/product.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Product />;
  }
}

export default Index;
