import React from "react";
import { RiReactjsLine } from "react-icons/ri";

import { FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiRedux,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="HTML5"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="CSS3"
        >
          <SiCss3 className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="CSS3"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="React"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Redux"
        >
          <SiRedux className="text-7xl text-purple-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.1 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Node.js"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
