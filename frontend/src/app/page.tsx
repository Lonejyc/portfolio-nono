import Image from "next/image";
import Head from "/public/images/head.png";
import Illustrator from "/public/images/illustrator.png";
import After from "/public/images/afterEffect.png";
import Arrow from "/public/images/arrow.svg";

export default async function Home() {
  return (
    <main className="w-full">
      <section className="hero bg-dGreen text-white pt-20">
        <h1 className="text-white text-9xl text-center mx-32 wide">PORTFOLIO DYLAN THOMAS</h1>
        <div className="elements">
          <div className="head animate-pulse">
            <Image src={Head} alt="Tête de Dylan Thomas"></Image>
          </div>
          <div className="head animate-pulse delay-200">
            <Image src={Head} alt="Tête de Dylan Thomas"></Image>
          </div>
          <div className="logo animate-spin">
            <Image src={After} alt="Logo de After Effect" className="logoEL"></Image>
          </div>
          <div className="logo animate-spin">
            <Image src={Illustrator} alt="Logo de Illustrator" className="logoEL"></Image>
          </div>
        </div>
        <a href="#" className="navArrow bg-white rounded-full flex justify-center items-center w-14 h-14 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:translate-y-0.5">
          <Image src={Arrow} alt="Flèche vers le bas"></Image>
        </a>
      </section>
    </main>
  );
}
