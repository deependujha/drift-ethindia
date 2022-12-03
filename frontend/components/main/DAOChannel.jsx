import React from 'react';
import Image from 'next/image';

const DAOChannel = ({ img, name, active }) => {
	return (
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
  );
};

export default DAOChannel;
