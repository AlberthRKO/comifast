import Head from "next/head";
import React from "react";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`ComiFast - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {children}
    </>
  );
};

export default Layout;