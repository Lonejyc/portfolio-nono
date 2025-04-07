import Image from "next/image";
import Head1 from "/public/images/head1.png";
import Head2 from "/public/images/head2.png";
import Illustrator from "/public/images/illustrator.png";
import After from "/public/images/afterEffect.png";
import Arrow1 from "/public/images/arrow1.svg";
import Arrow2 from "/public/images/arrow2.svg";
import Arrow3 from "/public/images/arrow3.svg";
import Hashtag from "/public/images/hashtag.svg";
import Volley from "/public/images/volley.jpeg";
import Pc from "/public/images/pc.png";
import Phone from "/public/images/phone.png";
import Tache1 from "/public/images/transition/tache1.svg";
import Tache2 from "/public/images/transition/tache2.svg";
import Grid from "../assets/grid.svg";

import VisualPres from "../components/VisualPres";
import MotionPres from "../components/MotionPres";
// import datas from "../datas/content.json";

interface VisualIdentity {
  title: string;
  description: string;
  image: string;
}

interface Motion {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface Content {
  VisualIdentity: {
      [key: string]: VisualIdentity;
  };
  Motion: {
      [key: string]: Motion;
  };
}

const content: Content = require('../datas/content.json');

export default async function Home() {
  return (
    <main className="w-full">
      <section className="hero bg-dGreen text-white pt-8 md:pt-20 relative h-[42dvh] sm:h-[52dvh] md:h-[70dvh] lg:h-[calc(95dvh-4rem)]">
        <div className="absolute z-0 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-6rem)] md:w-[calc(100%-12rem)] h-[93%] bg-[url('../assets/grid.svg')] bg-repeat bg-bottom"></div>
        <h1 className="text-white text-center text-6xl mx-2 xs:mx-8 sm:text-7xl sm:mx-16 md:text-8xl md:mx-24 lg:text-9xl lg:mx-32 wide">PORTFOLIO DYLAN THOMAS</h1>
        <div className="elements">
          <div className="absolute top-[60%] left-[8%] md:top-[40%] md:left-[10%] w-[calc(100vw-80%)] h-auto rotate-[22deg] backdrop-blur-[12px] bg-[rgba(250,250,250,0.2)] shadow-[0px_-4px_15px_0px_rgba(0,0,0,0.25),0px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10vw] md:rounded-[5vw]">
            <Image src={Head1} alt="Tête de Dylan Thomas" className="w-full object-cover p-[4vw]"></Image>
          </div>
          <div className="absolute top-[32%] left-[70%] md:top-[15%] md:left-[75%] w-[calc(100vw-80%)] h-auto rotate-[-38deg] backdrop-blur-[12px] bg-[rgba(250,250,250,0.2)] shadow-[0px_-4px_15px_0px_rgba(0,0,0,0.25),0px_4px_10px_0px_rgba(0,0,0,0.25)] rounded-[10vw] md:rounded-[5vw]">
            <Image src={Head1} alt="Tête de Dylan Thomas" className="w-full object-cover p-[4vw]"></Image>
          </div>
          <div className="absolute top-[35%] left-[14%] md:top-[22%] md:left-[20%] w-[calc(100vw-86%)] sm:w-[calc(100vw-88%)] md:w-[calc(100vw-90%)] lg:w-[calc(100vw-92%)] h-auto rotate-[-33deg]">
            <Image src={After} alt="Logo de After Effect" className="w-full object-cover shadow-md rounded-xl"></Image>
          </div>
          <div className="absolute top-[65%] left-[80%] md:top-[50%] md:left-[70%] w-[calc(100vw-86%)] sm:w-[calc(100vw-88%)] md:w-[calc(100vw-90%)] lg:w-[calc(100vw-92%)] h-auto rotate-[25deg]">
            <Image src={Illustrator} alt="Logo de Illustrator" className="w-full object-cover shadow-md rounded-xl"></Image>
          </div>
        </div>
        <a href="#pres" className="bg-white rounded-full hidden lg:flex justify-center items-center w-14 h-14 absolute top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:-translate-y-1/4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <Image src={Arrow1} alt="Flèche vers le bas"></Image>
        </a>
      </section>
      <section id="pres" className="flex flex-col md:flex-row relative bg-white text-black py-28 gap-4 md:gap-16 rounded-t-xxl md:rounded-t-xxxl">
        <div className="content w-full md:w-1/2 pl-16 pr-16 md:pl-36 lg:pl-40 md:pr-0 relative">
          <Image src={Arrow2} alt="Flèche tordu" className="absolute hidden md:flex top-0 left-0"></Image>
          <h3 className="mb-10 soulmaze">Présentation</h3>
          <p className="pb-10">
              🎨 Salut, moi c’est Dylan !
              <br /><br />
              Graphiste et motion designer en MMI à l’IUT de Chambéry, je transforme les idées en visuels impactant. Mon truc ? Créer des identités graphiques qui claquent, du logo à la charte visuelle, en passant par du motion design et du web.
              <br /><br />
              📢 Ma philosophie : un bon design, c’est comme une blague bien placée – il doit être simple, efficace et marquer les esprits.
              <br /><br />
              Que ce soit pour donner vie à une marque, booster une communication ou simplement éviter un logo qui ressemble à un PowerPoint des années 2000, je suis là !
          </p>
          <div className="hidden md:flex items-center">
            <a href="#" className="bg-dGreen px-6 lg:px-14 py-3 uppercase text-white rounded-full soulmaze">La suite</a>
            <Image src={Arrow3} alt="Flèche tordu" className="ml-6 translate-y-1/3"></Image>
          </div>
        </div>
        <div className="w-full h-full md:w-1/2 flex justify-center md:max-lg:self-center md:pr-40 relative">
          <div className="bg-dGray shadow-md mt-8 rounded-[10vw] md:rounded-[5vw] relative w-[calc(100vw-30vw)] md:w-[calc(100vw-65vw)] h-auto">
            <Image src={Head2} alt="Tête de Dylan Thomas" className="justify-self-center w-2/3 md:w-full object-cover pb-[16vw] md:pb-[6vw] p-[6vw]"></Image>
            <Image src={Hashtag} alt="Hashtag" className="w-[30%] absolute right-0 bottom-0 translate-y-1/2 translate-x-1/3"></Image>
          </div>
        </div>
        <Image src={Tache1} alt="tache de peinture" className="w-[100vw] h-[10vh] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></Image>
      </section>
      <section id="projects" className="visual text-white py-28 relative">
        <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-6rem)] md:w-[calc(100%-12rem)] h-[calc(100%-8rem)] bg-[url('../assets/grid.svg')] bg-repeat bg-bottom"></div>
        <h2 className="text-center z-10">Identités visuelles</h2>
        <div className="mx-[5vw] md:mx-[10vw] z-10 flex flex-col gap-4 md:gap-16 relative">
          {Object.keys(content.VisualIdentity).map((key) => {
            const identity = content.VisualIdentity[key];
            return (
              <VisualPres
                key={key}
                title={identity.title}
                description={identity.description}
                image={identity.image}
              />
            );
          })}
        </div>
        <Image src={Tache2} alt="tache de peinture" className="w-[100vw] h-[10vh] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3"></Image>
      </section>
      <section id="motions" className="motion bg-white text-black py-28 rounded-b-xxl md:rounded-b-xxxl">
        <h2 className="text-center">Motions</h2>
        <div className="mx-[5vw] md:mx-[8vw] flex flex-col gap-4 md:gap-16">
          {Object.keys(content.Motion).map((key) => {
            const motion = content.Motion[key];
            return (
              <MotionPres
                key={key}
                title={motion.title}
                description={motion.description}
                image={motion.image}
                link={motion.link}
              />
            );
          })}
        </div>
      </section>
      <section className="text-white mt-20 pb-28 px-12 md:px-28 relative">
        <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-6rem)] md:w-[calc(100%-12rem)] h-[calc(100%-8rem)] bg-[url('../assets/grid.svg')] bg-repeat bg-bottom"></div>
        <h2 className="text-center py-8">Autres projets</h2>
        <div className="bg-dGrayTrans backdrop-filter backdrop-blur-[8px] p-12 rounded-3xl md:rounded-xxl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col">
              <Image 
                src={Volley} 
                alt="Maillot de Volley"
                className="w-full h-full object-cover aspect-[530/676] rounded-3xl md:rounded-[40px] shadow-xl"
              />
              <p className="mt-2">MMI volleyball</p>
            </div>
            <div className="flex flex-col">
              <Image 
                src={Phone} 
                alt="Fond d'écran de téléphone"
                className="w-full h-full object-cover aspect-[530/676] rounded-3xl md:rounded-[40px] shadow-xl"
              />
              <p className="mt-2">Fond d'écran personnel</p>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <Image 
              src={Pc} 
              alt="Fond d'écran d'ordinateur"
              className="w-full h-full object-cover rounded-2xl md:rounded-[40px] shadow-xl"
            />
            <p className="mt-2">Fond d'écran d'ordinateur</p>
          </div>
        </div>
      </section>
    </main>
  );
}
