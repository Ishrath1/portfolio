import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";

function Projets() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projets"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="text-center text-4xl lg:text-5xl font-rufina"
      >
        Projets
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.9,
        }}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 dark:text-darkHover"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <a href={project.link} target="_blank">
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-sintony"> {project.title}</h2>
                  <p className="font-sintony text-sm text-gray-700">
                    {project.description}
                  </p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lightHover transition">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5"
                  />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
      {/*      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Afficher Plus
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </a> */}
    </motion.div>
  );
}

export default Projets;
