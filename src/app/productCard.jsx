import React from 'react';
import Image from 'next/image';

const Productcard = ({ name, precio, imgLink,type }) => {
  return (
    <div data-aos="fade-right" >
      <div className="bg-white max-w-sm mx-auto  shadow-xl">
        <div className="py-4 px-6 flex flex-col gap-2">
          <a href="#" className="text-2xl font-mono font-t text-gray-700">
            {name}
          </a>
          <p className='text-gray-700 font-mono'>{type}</p>
        </div>
        <div>
          <Image
            src={imgLink} // Use the prop value for the image source
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="py-4 px-6 flex items-center justify-between bg-amber-800">
          <span className="text-white font-bold">${precio}</span>
          <a target='_blank' href="https://api.whatsapp.com/send?phone=5491134225749&text=Hola%20%F0%9F%96%96%F0%9F%8F%BD%20Quiero%20comprar%20una%20remera%20de%20la%20%27%20COLLECTION%20LEGENDS%27S%20%27" className="text-gray-200 hover:text-white transition-colors font-semibold outline-none">
            Unite a la <span className="font-mono">Crew</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
