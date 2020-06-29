import Navigation from "./navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <div>
      <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/darkly/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Bo21yfmmZuXwcN/9vKrA5jPUMhr7znVBBeLxT9MA4r2BchhusfJ6+n8TLGUcRAtL"
          crossOrigin="anonymous"
        />
      </Head>
      <Navigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
