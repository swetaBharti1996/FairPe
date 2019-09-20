import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import AppConstant from "../constants/appConstant";
import createStore from "../store";
import Layout from "../layout";
import cookies from "next-cookies";
import NProgress from "nprogress";
import Router from "next/router";
import { makeRequest } from "../constants/request";
import { gotUserDetails, fetchWishlist } from "../actions/syncAction";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const getWishlist = async c => {
  const resp = await makeRequest(
    "get",
    `${AppConstant.default.baseURL}/api/wishlist`,
    null,
    {
      Authorization: c.authtoken.replace("authtoken=", "")
    }
  );
  return resp;
};
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const c = cookies(ctx);
    const isServer = !!ctx.req;
    if (!!c.authtoken && isServer) {
      ctx.store.dispatch(gotUserDetails(c.authtoken));
      getWishlist(c)
        .then(resp => ctx.store.dispatch(fetchWishlist(resp.data)))
        .catch(err => console.log(err));
    }
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
