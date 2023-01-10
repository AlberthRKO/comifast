import Layout from "../components/shared/layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import Sidebar from "../components/shared/sidebar";
import Header from "../components/shared/header";
import FlipMove from "react-flip-move";

export default function Home() {
  const [showOrder, setShowOrder] = useState(false);

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    console.log(showOrder);
  };

  return (
    <>
      <Layout
        title="Order"
        description="ComiFast for order section"
        toggleOrder={toggleOrder}
        showOrder={showOrder}
      >
        <main className="lg:pl-28 lg:flex transition-all">
          <div
            className={`transition-all ${
              showOrder ? "lg:w-9/12" : "lg:w-full"
            }`}
          >
            <Header />
            {/* Seccion de dashboard */}
            <div className="p-4">
              <h2 className="text-xl text-center text-[#012970] dark:text-white font-bold">
                Seccion de Dashboard
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                inventore aperiam optio natus, non labore necessitatibus beatae
                totam tempore delectus exercitationem. Consequatur sint
                dignissimos voluptatem eligendi dolorem odit distinctio
                officiis.
              </p>
            </div>
          </div>
          <div
            className={`transition-all w-full ${
              showOrder
                ? "right-0 bottom-24 lg:w-3/12"
                : "-right-full bottom-24 lg:hidden"
            } bg-white top-0 dark:bg-[#1F1D2B] lg:min-h-screen fixed rounded-xl shadow-lg lg:static text-center lg:text-start px-5 py-4`}
          >
            <h2 className="text-xl text-[#012970] dark:text-white font-bold">
              Seccion de Pedidos
            </h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              inventore aperiam optio natus, non labore necessitatibus beatae
              totam tempore delectus exercitationem. Consequatur sint
              dignissimos voluptatem eligendi dolorem odit distinctio officiis.
            </p>
          </div>
        </main>
      </Layout>
    </>
  );
}
