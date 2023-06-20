import React from "react";
import Image from "next/image";
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-black w-full p-8">
      <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
        <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
          <h2 className="text-3xl font-bold ">HighDrip</h2>
          <iframe
            className=" rounded-xl"
            src="https://open.spotify.com/embed/playlist/44to1RQjEXRXsg8ieh6YMT?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            
          ></iframe>
        </div>
        <div className="md:col-span-4 xl:col-span-2">
          <h2 className="font-bold mb-6 uppercase">Menu</h2>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:underline">
              Inicio
            </a>
            <a href="#" className="hover:underline">
              Drop{" "}
                  <span className="font-mono text-green-600 blur-sm">
                    high in th sky
                  </span>{" "}
            </a>
            <a href="#" className="hover:underline">
           <span className="text-amber-800 font-bold">LEGENDS'S</span>
            </a>
            
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold mb-6 uppercase">Redes sociales</h2>
          <nav>

            <a
              href="https://www.instagram.com/high_drip1/"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              target="_blank"
            >
              
              <BsInstagram />
             high_drip1
            </a>
            <a
              href="https://www.instagram.com/jtdevsmx/"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              target="_blank"
            >
            
              <BsWhatsapp /> +54 9 11 3422-5749
            </a>
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold mb-6 uppercase">Contacto</h2>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Moron, the West of BA
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
         Thiagoleyes2003@gmail.com            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              +54 9 11 3422-5749
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <p className=" text-center md:text-left">
          &copy; 2023
          <span className=" font-bold"> high drip.</span> Todos los
          derechos reservados.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            href="#"
            className=" transition-colors"
          >
            Terminos y condiciones
          </a>
          <span className="hidden md:flex">|</span>
          <a
            href="#"
            className=" transition-colors"
          >
creado por FUTURE AGENCY DZN          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
