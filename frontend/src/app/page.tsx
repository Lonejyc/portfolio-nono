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
          <div className="head">
            <Image src={Head} alt="Tête de Dylan Thomas"></Image>
          </div>
          <div className="head">
            <Image src={Head} alt="Tête de Dylan Thomas"></Image>
          </div>
          <div className="logo">
            <Image src={After} alt="Logo de After Effect" className="logoEL shadow-md rounded-xl"></Image>
          </div>
          <div className="logo">
            <Image src={Illustrator} alt="Logo de Illustrator" className="logoEL shadow-md rounded-xl"></Image>
          </div>
        </div>
        <a href="#" className="navArrow bg-white rounded-full flex justify-center items-center w-14 h-14 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:translate-y-0.5">
          <Image src={Arrow} alt="Flèche vers le bas"></Image>
        </a>
      </section>
      <section className="pres rounded-t-xxxl bg-white text-black py-20 flex gap-16">
        <div className="content w-1/2 pl-40">
          {/* <Image src={} alt=""></Image> */}
          <h2 className="mb-10 soulmaze">Présentation</h2>
          <p className="pb-10">
              🎨 Salut, moi c’est Dylan !
              <br /><br />
              Graphiste et motion designer en MMI à l’IUT de Chambéry, je transforme les idées en visuels impactant. Mon truc ? Créer des identités graphiques qui claquent, du logo à la charte visuelle, en passant par du motion design et du web.
              <br /><br />
              📢 Ma philosophie : un bon design, c’est comme une blague bien placée – il doit être simple, efficace et marquer les esprits.
              <br /><br />
              Que ce soit pour donner vie à une marque, booster une communication ou simplement éviter un logo qui ressemble à un PowerPoint des années 2000, je suis là !
          </p>
          <a href="#" className="bg-dGreen px-16 py-3 uppercase text-white rounded-full soulmaze">La suite</a>
          {/* <Image src={} alt=""></Image> */}
        </div>
        <div className="images w-1/2 pr-40">
        <div className="image bg-dGray rounded-xxl shadow-md px-28 py-24">
          <Image src={Head} alt="Tête de Dylan Thomas"></Image>
        </div>
          {/* <Image src={} alt=""></Image> */}
        </div>
      </section>
    </main>
  );
}
