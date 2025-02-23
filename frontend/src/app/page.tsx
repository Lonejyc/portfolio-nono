import Image from "next/image";
import Head1 from "/public/images/head1.png";
import Head2 from "/public/images/head2.png";
import Illustrator from "/public/images/illustrator.png";
import After from "/public/images/afterEffect.png";
import Arrow1 from "/public/images/arrow1.svg";
import Arrow2 from "/public/images/arrow2.svg";
import Arrow3 from "/public/images/arrow3.svg";
import Hashtag from "/public/images/hashtag.svg";

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
      <section className="hero bg-dGreen text-white pt-20">
        <h1 className="text-white text-9xl text-center mx-32 wide">PORTFOLIO DYLAN THOMAS</h1>
        <div className="elements">
          <div className="head">
            <Image src={Head1} alt="Tête de Dylan Thomas"></Image>
          </div>
          <div className="head">
            <Image src={Head1} alt="Tête de Dylan Thomas"></Image>
          </div>
          <div className="logo">
            <Image src={After} alt="Logo de After Effect" className="logoEL shadow-md rounded-xl"></Image>
          </div>
          <div className="logo">
            <Image src={Illustrator} alt="Logo de Illustrator" className="logoEL shadow-md rounded-xl"></Image>
          </div>
        </div>
        <a href="#" className="navArrow bg-white rounded-full flex justify-center items-center w-14 h-14 absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:translate-y-0.5">
          <Image src={Arrow1} alt="Flèche vers le bas"></Image>
        </a>
      </section>
      <section className="pres rounded-t-xxxl bg-white text-black py-20 flex gap-16">
        <div className="content w-1/2 pl-40 relative">
          <Image src={Arrow2} alt="Flèche tordu" className="absolute top-0 left-0"></Image>
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
          <div className="flex items-center">
            <a href="#" className="bg-dGreen px-16 py-3 uppercase text-white rounded-full soulmaze">La suite</a>
            <Image src={Arrow3} alt="Flèche tordu" className="ml-6 translate-y-1/3"></Image>
          </div>
        </div>
        <div className="images w-1/2 pr-40 relative">
          <div className="image bg-dGray shadow-md mt-8">
            <Image src={Head2} alt="Tête de Dylan Thomas"></Image>
            <Image src={Hashtag} alt="Hashtag" className="absolute right-0 bottom-0 translate-y-1/2 translate-x-1/3"></Image>
          </div>
        </div>
      </section>
      <section className="visual text-white py-20">
        <h2 className="text-center">Identités visuelles</h2>
        <div className="visual-identities mx-48">
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
      </section>
      <section className="motion bg-white text-black py-20 rounded-b-xxxl">
        <h2 className="text-center">Motions</h2>
        <div className="motions mx-48 flex flex-col gap-16">
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
      <section className="other text-white">
        <h2 className="text-center">Autres projets</h2>

      </section>
    </main>
  );
}
