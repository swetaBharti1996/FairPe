import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import createStore from "../store";
import Layout from "../layout";
import {} from "../actions/syncAction";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
