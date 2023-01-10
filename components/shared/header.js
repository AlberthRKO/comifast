import Image from "next/image";
import React, { useState } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";

const Header = () => {
  // Sacar fecha js
  const fecha = new Date();
  //   const fechaFormateada = fecha.toLocaleDateString("es-ES");
  const fechaFormateada = fecha.toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  //   console.log(fechaFormateada);

  //   show search
  const [showSearch, setshowSearch] = useState(false);
  const toggle = () => setshowSearch(!showSearch);
  //   console.log(showSearch);

  return (
    <header className="p-4 transition-all">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full shadow-lg hover:shadow-blue-100 dark:shadow-gray-900 dark:hover:shadow-[#ec7b6a3a]"
            src="/alberth.svg"
            width={50}
            height={50}
            alt="Avatar Usuario"
          />
          <div>
            <h2 className="text-xl font-bold">Alberth Paredes </h2>
            <p className="text-gray-400">{fechaFormateada}</p>
          </div>
        </div>
        <div>
          <button className="navLink lg:hidden" onClick={toggle}>
            {showSearch ? (
              <RiCloseLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
            ) : (
              <RiSearchLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
            )}
          </button>
          <form className="p-4 transition-all hidden lg:block">
            <div className="w-full relative group transition-all">
              <RiSearchLine className="text-gray-600 absolute text-md left-2 top-1/2 -translate-y-1/2  cursor-pointer group-focus-within:font-bold" />
              <RiSearchLine className="text-gray-600 absolute text-md left-2 top-1/2 -translate-y-1/2  cursor-pointer group-focus-within:font-bold" />
              <input
                placeholder="Buscar"
                className="w-full outline-none shadow-md rounded-lg py-2 pl-8 pr-2 bg-[#f6f9ff] dark:bg-[#262837] focus:shadow-blue-100 focus:dark:shadow-[#ec7b6a3a] "
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Styles search mobile*/}
      <form
        className={`py-4 transition-all lg:hidden ${
          showSearch ? "my-0 opacity-1" : "-my-8 w-2/12 opacity-0 mx-auto"
        }`}
      >
        <div className="w-full relative group transition-all">
          <RiSearchLine className="text-gray-600 absolute text-md left-2 top-1/2 -translate-y-1/2  cursor-pointer group-focus-within:font-bold" />
          <RiSearchLine className="text-gray-600 absolute text-md left-2 top-1/2 -translate-y-1/2  cursor-pointer group-focus-within:font-bold" />
          <input
            placeholder="Buscar"
            className="w-full outline-none shadow-md rounded-lg py-2 pl-8 pr-2 bg-[#f6f9ff] dark:bg-[#262837] focus:shadow-blue-100 focus:dark:shadow-[#ec7b6a3a] "
            type="text"
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
