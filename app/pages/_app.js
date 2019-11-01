import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import AppConstant from "../constants/appConstant";
import createStore from "../store";
import Layout from "../layout";
import cookies from "next-cookies";
import NProgress from "nprogress";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import { makeRequest } from "../constants/request";
import { login, gotWishlist } from "../actions/syncAction";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faUser);

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const getWishlist = async c => {
  const resp = await makeRequest(
    "get",
    `${AppConstant.default.baseURL}/api/fairpe/wishlist`,
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
      ctx.store.dispatch(login(c.authtoken));
      await getWishlist(c)
        .then(resp => {
          ctx.store.dispatch(gotWishlist(resp.data));
        })
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
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
