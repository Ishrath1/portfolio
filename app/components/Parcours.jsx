import { eduData, expData, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Timeline from "./Timeline";
import { motion } from "motion/react";

function Parcours() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="parcours"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-4xl lg:text-5xl font-rufina"
      >
        Parcours
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 font-sintony"
      >
        {/* -- parcours scolaire -- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full lg:w-110 border border-gray-400 rounded-xl
     cursor-pointer hover:bg-lightHover/10 hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/40"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" ml-10 mt-5  text-lg"
          >
            Formations
          </motion.h3>
          <Timeline items={eduData} />
        </motion.div>
        {/* ------------------------ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          {/* -- parcours pro -- */}
          <div
            className="mb-10 max-w-2xl border border-gray-400 rounded-xl
     cursor-pointer hover:bg-lightHover/10 hover:-translate-y-1 duration-500 dark:hover:bg-darkHover/40"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className=" ml-10 mt-5 text-lg"
            >
              Expérience
            </motion.h3>
            <Timeline items={expData} />
          </div>
          {/* ------------------------ */}
          {/* -- compétences -- */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="my-6 ml-10 mt-5 text-lg"
            >
              Compétences
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex items-center flex-wrap gap-3 sm:gap-5"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-lightTheme"
                  key={index}
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
          {/* ------------------------ */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Parcours;
