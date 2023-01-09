import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  RiHome5Line,
  RiPieChart2Line,
  RiMailLine,
  RiNotification3Line,
  RiSettings3Line,
  RiLogoutCircleRLine,
  RiMenu2Fill,
  RiUserLine,
  RiSearchLine,
} from "react-icons/ri";

const Sidebar = () => {
  // para asignar al elemento activo
  const router = useRouter();

  return (
    <>
      {/* Sidebar */}
      <div className="bg-white z-50 dark:bg-[#1F1D2B] fixed -left-full lg:left-0 top-0 w-28 h-full py-5 flex flex-col justify-between rounded-r-2xl">
        <ul className="pl-4">
          <li>
            <Link href="/">
              <span>
                <Image
                  className="text-center mx-auto mb-4"
                  src="/logo.png"
                  width={50}
                  height={50}
                  priority
                  alt="logo de ComiFast"
                />
              </span>
            </Link>
          </li>
          <li className={router.pathname === "/" ? "listaActiva" : "lista"}>
            <Link href="/" legacyBehavior>
              <a>
                <RiHome5Line className="icon" />
              </a>
            </Link>
          </li>
          <li
            className={router.pathname === "/orders" ? "listaActiva" : "lista"}
          >
            <Link href="/orders" legacyBehavior>
              <a>
                <RiPieChart2Line className="icon" />
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/messages" ? "listaActiva" : "lista"
            }
          >
            <Link href="/messages" legacyBehavior>
              <a>
                <RiMailLine className="icon" />
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/notification" ? "listaActiva" : "lista"
            }
          >
            <Link href="/notifications" legacyBehavior>
              <a>
                <RiNotification3Line className="icon" />
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/settings" ? "listaActiva" : "lista"
            }
          >
            <Link href="/settings" legacyBehavior>
              <a>
                <RiSettings3Line className="icon" />
              </a>
            </Link>
          </li>
        </ul>
        <ul className="pl-4">
          <li className="lista">
            <a onClick={() => {}}>
              <RiLogoutCircleRLine className="icon" />
            </a>
          </li>
        </ul>
      </div>
      {/* Sidebar collapse */}
      <nav className="bg-white dark:bg-[#282637] mx-4 fixed bottom-5 right-0 left-0 px-4 py-3 rounded-3xl flex justify-around shadow-lg dark:shadow-gray-900 dark:border-t-[1px] dark:border-[#242231] lg:hidden">
        {/* reutilzidando coidog del sidebar */}
        <button className="navLink">
          <RiMenu2Fill className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
        </button>
        <button className="navLink">
          <RiSearchLine className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
        </button>
        <button className="navLink">
          <RiMenu2Fill className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
        </button>
        <button className="navLink">
          <RiPieChart2Line className="text-xl text-[#012970] dark:text-[#ec7c6a]" />
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
