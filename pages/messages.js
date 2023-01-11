import React from "react";
import Layout from "../components/shared/layout";

const Messages = () => {
  return (
    <Layout title="Messages" description="">
      {/* Inicio del contenido dashboard */}
      <h2 className="text-xl text-center text-[#012970] dark:text-white font-bold">
        Messages
      </h2>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
        inventore aperiam optio natus, non labore necessitatibus beatae totam
        tempore delectus exercitationem. Consequatur sint dignissimos voluptatem
        eligendi dolorem odit distinctio officiis.
      </p>
    </Layout>
  );
};

export default Messages;
