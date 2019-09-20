import Contact from "../containers/contact.container";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <Contact />;
  }
}

export default Index;
