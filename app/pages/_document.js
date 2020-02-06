import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";
import { ServerStyleSheet } from "styled-components";
import { Fragment } from "react";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const selectStyles = extractCritical(page.html);
    const styleTags = sheet.getStyleElement();

    const isProduction = process.env.NODE_ENV === "production";
    // const initialProps = await Document.getInitialProps(ctx);

    return { ...page, styleTags, selectStyles, isProduction };
  }

  setGoogleTags = () => {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-123415504-7');
      `
    };
  };

  render() {
    const { isProduction } = this.props;

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
        <body style={{ margin: "0px", padding: "0px" }}>
          <Main />
          <NextScript />

          {isProduction && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-123415504-7"
              />
              {/* We call the function above to inject the contents of the script tag */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}

          <div id="__CUSTOM_CUBE_LOADER__">
            <div className="circle-loader" />
          </div>
        </body>
      </html>
    );
  }
}
