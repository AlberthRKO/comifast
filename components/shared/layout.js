import Head from "next/head";
import Order from "./order";
import Sidebar from "./sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  RiSearchLine,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
  RiPieChart2Line,
} from "react-icons/ri";
import { profile, userNavigation } from "../../utils/data";

const Layout = ({ children, title = "", description = "" }) => {
  // seccion de showOrder
  const [showOrder, setShowOrder] = useState(false);

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    // console.log(showOrder);
  };

  //   show search
  const [showSearch, setshowSearch] = useState(false);
  const toggle = () => setshowSearch(!showSearch);
  //   console.log(showSearch);

  // Dark / Light
  // Seccion de darkmode
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // arreglando el problema del doble renderizado
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
          <header className="p-4 transition-all">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full shadow-lg hover:shadow-blue-100 dark:shadow-gray-900 dark:hover:shadow-[#ec7b6a3a]"
                  src={profile.imgUrl}
                  width={50}
                  height={50}
                  alt="Avatar Usuario"
                />
                <div>
                  <h2 className="text-xl font-bold">{profile.name}</h2>
                  {/* <p className="text-gray-400">{fechaFormateada}</p> */}
                  <p className="text-gray-400">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  name="showSearch"
                  type="button"
                  id="showSearch"
                  aria-labelledby="showSearch"
                  className={`navLink lg:hidden ${
                    showSearch ? "shadow-blue-100 dark:shadow-[#ec7b6a3a]" : ""
                  }`}
                  onClick={toggle}
                >
                  {showSearch ? (
                    <RiCloseLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
                  ) : (
                    <RiSearchLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
                  )}
                </button>

                <form className="pr-1 transition-all hidden lg:block">
                  <div className="w-full relative group transition-all">
                    <RiSearchLine className="text-gray-600 absolute text-md left-2 top-1/2 -translate-y-1/2  cursor-pointer group-focus-within:font-bold" />
                    <input
                      placeholder="Search"
                      className="w-full outline-none shadow-md rounded-lg py-2 pl-8 pr-2 bg-[#f6f9ff] dark:bg-[#262837] focus:shadow-blue-100 focus:dark:shadow-[#ec7b6a3a] "
                      type="text"
                    />
                  </div>
                </form>

                {/* Dark/ Light */}
                {currentTheme === "dark" ? (
                  <button
                    name="light"
                    type="button"
                    id="lightTheme"
                    aria-labelledby="lightTheme"
                    onClick={() => setTheme("light")}
                    className="navLink"
                  >
                    <RiSunLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
                  </button>
                ) : (
                  <button
                    name="dark"
                    type="button"
                    id="darkTheme"
                    aria-labelledby="darkTheme"
                    onClick={() => setTheme("dark")}
                    className="navLink"
                  >
                    <RiMoonLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
                  </button>
                )}

                {/* Show order */}
                <button
                  name="orders"
                  type="button"
                  id="orders"
                  aria-labelledby="orders"
                  className={`navLink hidden lg:block ${
                    showOrder ? "shadow-blue-100 dark:shadow-[#ec7b6a3a]" : ""
                  }`}
                  onClick={toggleOrder}
                >
                  {showOrder ? (
                    <RiCloseLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
                  ) : (
                    <RiPieChart2Line className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
                  )}
                </button>
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
                <input
                  placeholder="Search"
                  className="w-full outline-none shadow-md rounded-lg py-2 pl-8 pr-2 bg-[#f6f9ff] dark:bg-[#262837] focus:shadow-blue-100 focus:dark:shadow-[#ec7b6a3a] "
                  type="text"
                />
              </div>
            </form>
          </header>
          {/* seccion para escribir todo */}
          <main className="p-4">{children}</main>
        </div>
        <Order showOrder={showOrder} />
      </div>
    </>
  );
};

export default Layout;
