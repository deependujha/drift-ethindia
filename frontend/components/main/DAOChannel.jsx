import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const DAOChannel = ({ img, name, active }) => {
  return (
    <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.9 }}>
      <div className="text-center">
        <Image
          src={img}
          height={50}
          width={60}
          alt="myDao"
          className="bg-white rounded-lg "
        />
        <div
          className={`${
            active === true ? "text-white text-lg fw-bolder" : "text-white"
          }`}
        >
          {name}
        </div>
      </div>
    </motion.div>
  );
};

export default DAOChannel;
