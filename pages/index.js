import Layout from "../components/shared/layout";
import FlipMove from "react-flip-move";
import { Tab } from "@headlessui/react";
import { categories } from "../utils/data";
import Card from "../components/card";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      <Layout title="Order" description="ComiFast for order section">
        {/* Inicio del contenido dashboard */}

        {/* Nav para los tipos de comida usando tabs */}
        <nav className="w-full pb-3 rounded-md">
          {/* usando headlessui */}
          <Tab.Group>
            <Tab.List className="flex gap-3 justify-center overflow-x-scroll scrollbar-hide">
              {/* llamamos a los nombres de las posiciones del json */}
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "capitalize navLink font-semibold py-1 px-4 mb-5 focus-visible:outline-none",
                      selected
                        ? "text-[#012970] dark:text-[#ec7c6a] font-bold shadow-blue-100 dark:shadow-[#ec7b6a3a]"
                        : ""
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            {/* Seccion de contenido de tabs */}
            <Tab.Panels>
              {Object.values(categories).map((dishes, index) => (
                <Tab.Panel key={index} className="flex gap-5">
                  {/* Contenido del tab */}
                  {dishes.map((dishe) => (
                    // item
                    <Card key={dishe.key} dishe={dishe} />
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </nav>

        <h2 className="text-xl text-center text-[#012970] dark:text-white font-bold">
          Seccion de Dashboard
        </h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          inventore aperiam optio natus, non labore necessitatibus beatae totam
          tempore delectus exercitationem. Consequatur sint dignissimos
          voluptatem eligendi dolorem odit distinctio officiis.
        </p>
      </Layout>
    </>
  );
}
