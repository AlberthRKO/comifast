import React, { useState } from "react";
import { categories, orderTypes } from "../../utils/data";
import CardOrder from "../cardOrder";

import ListaBox from "../listaBox";

const Order = ({ showOrder }) => {
  const [selected, setSelected] = useState(
    orderTypes.find((typeOrder) => typeOrder.available)
  );

  return (
    <div
      className={`transition-all z-10 w-9/12 ${
        showOrder
          ? "right-0 bottom-24 text-center sm:w-7/12 md:w-5/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
          : "-right-full bottom-24 lg:hidden"
      } bg-white top-0 dark:bg-[#1F1D2B] overflow-y-scroll scrollbar-hide lg:min-h-screen fixed rounded-xl shadow-lg lg:static text-center lg:text-start px-4 py-4`}
    >
      <h2 className="text-xl text-title">Order #423</h2>
      <div className="flex justify-between items-center">
        <h3 className="text-section text-lg">Order type:</h3>
        <ListaBox
          selected={selected}
          setSelected={setSelected}
          lists={orderTypes}
        />
      </div>

      {/* Pedidos */}
      {categories.broaster.map((dishe) => (
        <CardOrder key={dishe.id} dishe={dishe} />
      ))}
    </div>
  );
};

export default Order;
