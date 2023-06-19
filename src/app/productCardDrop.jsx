import React from 'react';
import Image from 'next/image';

const ProductcardDrop = ({ name, precio, imgLink,type }) => {
  return (
    <div>
      <div className="bg-white blur-sm  max-w-sm mx-auto  shadow-xl">
        <div className="py-4 px-6 flex flex-col gap-2">
          <a href="#" className="text-2xl font-mono font-t text-black">
            {name}
          </a>
          <p className='text-green-800 font-mono'>{type}</p>
        </div>
        <div>
          <Image
            src={imgLink} // Use the prop value for the image source
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div className="py-4 px-6 flex items-center justify-between bg-green-800">
          <span className="text-white font-bold">${precio}</span>
          <button className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
            Unite a la <span className="font-mono">Crew</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductcardDrop;
