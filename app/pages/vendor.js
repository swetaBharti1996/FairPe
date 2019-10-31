import Vendor from "../containers/vendor.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Vendor />;
  }
}

export default Index;
