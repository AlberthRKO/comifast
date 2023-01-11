import Head from "next/head";
import { useState } from "react";
import Header from "./header";
import Order from "./order";
import Sidebar from "./sidebar";

const Layout = ({ children, title = "", description = "" }) => {
  // seccion de showOrder
  const [showOrder, setShowOrder] = useState(false);

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    // console.log(showOrder);
  };

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
      <div className="min-h-screen lg:pl-28 lg:flex transition-all">
        <div
          className={`transition-all ${showOrder ? "lg:w-9/12" : "lg:w-full"}`}
        >
          <Header showOrder={showOrder} toggleOrder={toggleOrder} />
          {/* seccion para escribir todo */}
          <main className="p-4">{children}</main>
        </div>
        <Order showOrder={showOrder} />
      </div>
    </>
  );
};

export default Layout;
