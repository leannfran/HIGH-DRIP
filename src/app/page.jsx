import Image from "next/image";
import Footer from "./footer";
import Productcard from "./productCard";
import ProductcardDrop from "./productCardDrop";


export default function Home() {
  return (
    <>

      <main className="flex max-w-screen  min-h-screen flex-col items-center justify-between md:pl-4">
        <header className="relative w-full">
          <h1 className="text-[9rem] md:text-[17rem] leading-none font-bold md:h-[90vh]">
            HIGH <br /> DRIP
          </h1>
          <Image
            className=" md:absolute top-0 right-0 -z-10  "
            src={require("/heroimage.png")}
            width={700}
            height={700}
            alt="Picture of 2pac"
          />
          <nav>
            <ul className="flex pl-4 gap-10 font-light">
              <li className=" cursor-pointer hover:underline" >  <a href="#legends">Collection - <span className="text-amber-800 font-bold">LEGENDS'S</span>  </a ></li>
              <li>
                {" "}
                <a href="#drop">
                  Drop{" "}
                  <span className="font-mono text-green-600 blur-sm">
                    High In The Sky
                  </span>{" "}
                </a>{" "}
              </li>
              <li  className="hover:underline cursor-pointer" >  <a href="#sobre">Sobre Nosotros</a></li>

            </ul>
          </nav>
        </header>

        <div id="legends" className="gap-8 flex flex-col pt-20 px-4 md:p-20 w-full bg-black ">
          <h3 className="text-4xl leading-none font-bold">
            ' COLLECTION  <span className="text-amber-800">LEGENDS'S</span>  '
          </h3>

          <div className="gap-8 flex flex-col md:flex-row items-center ">
            <Productcard
              name={"2PAC"}
              precio={"11,500.00"}
              imgLink={"/remera-2pac.png"}
              type={"OverSize"}

            />
            <Productcard
              name={"NOTORIOUS BIG"}
              precio={"12.000"}
              imgLink={"/remera-bigpopa.png"}
              type={"OverSize"}

            />
            <Productcard
              name={"RODMAN FACE"}
              precio={"12.000"}
              imgLink={"/remera-rodman.png"}
              type={"OverSize"}

              
            />
          </div>
        </div>
        <h2 className="text-3xl mt-20 font-thin text-center">
          {" "}
          Drop 
        </h2>
<div className="flex justify-around my-20 w-full items-start ">
        <div id="drop">

          <span className="font-light text-center text-8xl  blur text-green-600  font-mono">
            High <br /> In <br /> The <br /> Sky{" "}
          </span>
        </div>
        <div className="gap-8  flex items-center ">
          <ProductcardDrop
            imgLink={"/soon.jpeg"}
            type={"FROM THE WST"}
          />
        
        </div>
</div>

        <div id="sobre" className="mb-32 mt-20 min-h-[60vh] flex flex-col gap-2 items-center relative text-center">
          <h3 className="text-4xl leading-none font-bold">
            ' HIGH DRIP CREW '
          </h3>
          <h3 className="text-4xl font-thin leading-none ">
            ' HIGH DRIP CREW '
          </h3>
          <h3 className="text-4xl font-mono leading-none ">' H D C '</h3>
          
          <p className="text-xl my-5 text-justify font-light mx-4 md:mx-96">
            En <span className="font-bold">HighDrip</span> , buscamos combinar
            el clásico estilo noventero, con los nuevos 2000s. Nuestra idea es
            respetar la esencia de cada prenda y que cada diseño tenga una{" "}
            <span className="font-bold">historia </span>para contar .
          </p>
          <Image
            className=" hidden md:block top-20 left-100 -rotate-2 -z-10  "
            src="/casset.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />

          <Image
              className=" md:absolute top-4 -rotate-6 left-10 -z-10  "
              src="/biggie.png"
              width={300}
              height={300}
              alt="Picture of the author"
            />

          <Image
            className=" md:absolute top-4 rotate-12 right-10 -z-10  "
            src="/ice-cube.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div >

        </div>
      </main>
      <Footer />
    </>
  );
}
