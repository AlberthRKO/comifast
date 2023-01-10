import Head from "next/head";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({
  children,
  title = "",
  description = "",
  toggleOrder,
  showOrder,
}) => {
  return (
    <>
      <Head>
        <title>{`ComiFast - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* pasamos los parametros del toogle para los icons */}
      <Sidebar toggleOrder={toggleOrder} showOrder={showOrder} />
      {/* <Header /> */}
      {children}
    </>
  );
};

export default Layout;
