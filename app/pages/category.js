import Category from "../containers/category.conatiner";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Category />;
  }
}

export default Index;
