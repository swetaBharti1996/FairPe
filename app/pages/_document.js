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

  setHotjarTag = () => {
    return {
      __html: `
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1675974,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:500,700,900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Changa:700&display=swap"
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

          {isProduction && (
            <script dangerouslySetInnerHTML={this.setHotjarTag()} />
          )}
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
