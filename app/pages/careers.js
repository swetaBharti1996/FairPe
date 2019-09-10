import Careers from "../containers/careers.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Careers />;
  }
}

export default Index;