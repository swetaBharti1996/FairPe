import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";
import { ServerStyleSheet } from "styled-components";
import { AddToCart } from "../UI";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const selectStyles = extractCritical(page.html);
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, selectStyles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap"
            rel="stylesheet"
          ></link>

          <link
            href="https://use.fontawesome.com/releases/v5.7.2/css/svg-with-js.css"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="/static/css/loader.css" />

          <style
            dangerouslySetInnerHTML={{ __html: this.props.selectStyles.css }}
          />

          {this.props.styleTags}
          <link rel="stylesheet" href="/static/css/style.css" />
          <link rel="stylesheet" href="/static/css/nprogress.css" />

          <script />
        </Head>
        <body
          style={{
            margin: "0px",
            padding: "0px"
            // backgroundImage:
            //   "linear-gradient( 135deg, rgb(98, 118, 241) 0%, rgb(191, 121, 247)"
          }}
        >
          <Main />
          <NextScript />
          <div id="__CUSTOM_CUBE_LOADER__">
            <div className="circle-loader" />
          </div>
        </body>
      </html>
    );
  }
}
